<?php
/**
 * Theme Setup & Registration
 */

function armo_theme_setup() {
    // Add default posts and comments RSS feed links to head.
    add_theme_support('automatic-feed-links');

    // Let WordPress manage the document title.
    add_theme_support('title-tag');

    // Enable support for Post Thumbnails on posts and pages.
    add_theme_support('post-thumbnails');
    add_image_size('armo-hero', 1920, 800, true);
    add_image_size('armo-card', 600, 400, true);
    add_image_size('armo-product', 800, 800, true);

    // WooCommerce support
    add_theme_support('woocommerce');

    // Register Navigation Menus
        register_nav_menus(array(
        'primary' => __('Primary Menu (Header)', 'armodafinil'),
        'footer'  => __('Footer Menu (Main)', 'armodafinil'),
        'footer-quick' => __('Footer Quick Links', 'armodafinil'),
        'footer-important' => __('Footer Important', 'armodafinil'),
    ));

    // HTML5 markup support
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ));
}
add_action('after_setup_theme', 'armo_theme_setup');

/**
 * Register Custom Post Types
 */
function armo_register_cpt() {
    // Reviews CPT
    register_post_type('review', array(
        'labels' => array(
            'name' => 'Reviews',
            'singular_name' => 'Review',
            'add_new_item' => 'Add New Review'
        ),
        'public' => true,
        'has_archive' => false,
        'supports' => array('title'), // ACF will handle the rest
    ));
}
add_action('init', 'armo_register_cpt');

/**
 * Add Tailwind CSS classes to Navigation Menus
 */
add_filter('nav_menu_css_class', function($classes, $item, $args) {
    if (isset($args->theme_location)) {
        if ($args->theme_location === 'primary' && isset($args->menu_class) && strpos($args->menu_class, 'flex flex-col') !== false) {
            // Mobile Menu LI
            $classes[] = 'w-full list-none';
        } elseif ($args->theme_location === 'mobile_cities') {
            $classes[] = 'list-none';
        }
    }
    return $classes;
}, 10, 3);

add_filter('nav_menu_link_attributes', function($atts, $item, $args) {
    if (isset($args->theme_location) && $args->theme_location === 'primary') {
        if (isset($args->menu_class) && strpos($args->menu_class, 'flex flex-col') !== false) {
            // Mobile Menu Link
            $atts['class'] = (isset($atts['class']) ? $atts['class'] . ' ' : '') . 'block px-6 py-3 text-base font-semibold text-slate-800 hover:bg-stone-50 hover:text-primary transition-colors';
        } else {
            // Desktop Menu Link
            $classes = 'px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200';
            $is_current = in_array('current-menu-item', $item->classes) || $item->current || in_array('current-page-ancestor', $item->classes);
            if ($is_current) {
                $classes .= ' bg-primary-softer text-primary';
            } else {
                $classes .= ' text-foreground/80 hover:bg-primary-softer hover:text-primary';
            }
            $atts['class'] = (isset($atts['class']) ? $atts['class'] . ' ' : '') . $classes;
        }
    } elseif (isset($args->theme_location) && $args->theme_location === 'mobile_cities') {
        $atts['class'] = (isset($atts['class']) ? $atts['class'] . ' ' : '') . 'text-sm text-[#62847A] hover:text-primary transition-colors block py-1.5 font-medium';
    } elseif (isset($args->theme_location) && strpos($args->theme_location, 'footer_') !== false) {
        $atts['class'] = (isset($atts['class']) ? $atts['class'] . ' ' : '') . 'hover:text-primary transition-colors text-muted-foreground';
    }
    return $atts;
}, 10, 3);


/**
 * Handle Review Form Submission via AJAX.
 *
 * =====================================================================
 * 🔰 PHP GUIDE:
 * =====================================================================
 * When a visitor submits the review form on the frontend, the form data
 * is sent here via AJAX. This function:
 * 1. Verifies the security nonce
 * 2. Sanitizes all input data
 * 3. Creates a new 'reviews' CPT post with status 'pending'
 * 4. Saves the rating and name as ACF fields
 *
 * The review will NOT appear on the site until the admin goes to
 * Reviews → All Reviews and changes the status from "Pending" to "Published".
 * =====================================================================
 */
function armo_handle_review_submission() {
    // Verify security nonce
    if ( ! isset( $_POST['armo_review_nonce'] ) || ! wp_verify_nonce( $_POST['armo_review_nonce'], 'armo_submit_review' ) ) {
        wp_send_json_error( array( 'message' => 'Security check failed. Please refresh the page and try again.' ) );
    }

    // Sanitize inputs
    $title      = isset( $_POST['review_title'] )      ? sanitize_text_field( $_POST['review_title'] )      : '';
    $content    = isset( $_POST['review_content'] )    ? sanitize_textarea_field( $_POST['review_content'] ) : '';
    $name       = isset( $_POST['review_name'] )       ? sanitize_text_field( $_POST['review_name'] )       : '';
    $email      = isset( $_POST['review_email'] )      ? sanitize_email( $_POST['review_email'] )           : '';
    $rating     = isset( $_POST['review_rating'] )     ? intval( $_POST['review_rating'] )                  : 5;
    $product_id = isset( $_POST['review_product_id'] ) ? intval( $_POST['review_product_id'] )              : 0;

    // Validate required fields
    if ( empty( $title ) || empty( $content ) || empty( $name ) || empty( $email ) ) {
        wp_send_json_error( array( 'message' => 'Please fill in all required fields.' ) );
    }

    // Validate email
    if ( ! is_email( $email ) ) {
        wp_send_json_error( array( 'message' => 'Please enter a valid email address.' ) );
    }

    // Clamp rating to 1-5
    $rating = max( 1, min( 5, $rating ) );

    // Create the review post as 'pending' (requires admin approval)
    $post_id = wp_insert_post( array(
        'post_type'    => 'reviews',
        'post_title'   => $title,
        'post_content' => $content,
        'post_status'  => 'pending',
    ) );

    if ( is_wp_error( $post_id ) ) {
        wp_send_json_error( array( 'message' => 'Something went wrong. Please try again.' ) );
    }

    // Save ACF fields
    update_field( 'rating', $rating, $post_id );
    update_field( 'name', $name, $post_id );
    update_field( 'email', $email, $post_id );

    // Save linked product if submitted from a product page
    if ( $product_id > 0 ) {
        update_field( 'linked_product', $product_id, $post_id );
    }

    wp_send_json_success( array(
        'message' => 'Thank you for your review! It will appear on the site once approved.',
    ) );
}
// wp_ajax_ = for logged-in users, wp_ajax_nopriv_ = for visitors (not logged in)
add_action( 'wp_ajax_armo_submit_review', 'armo_handle_review_submission' );
add_action( 'wp_ajax_nopriv_armo_submit_review', 'armo_handle_review_submission' );