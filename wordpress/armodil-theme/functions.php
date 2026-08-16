<?php
/**
 * Armodil AU — functions.php
 * Boots the theme, enqueues assets, registers ACF flexible content, and loads modules.
 */

if (!defined('ABSPATH')) exit;

define('ARMODIL_VERSION', '1.0.0');
define('ARMODIL_DIR', get_template_directory());
define('ARMODIL_URI', get_template_directory_uri());

/* ------------------------------------------------------------------
 * 1. Theme supports
 * ------------------------------------------------------------------ */
add_action('after_setup_theme', function () {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', ['search-form', 'gallery', 'caption', 'style', 'script']);
    register_nav_menus([
        'primary' => __('Primary Menu', 'armodil'),
        'footer_shop' => __('Footer — Shop', 'armodil'),
        'footer_help' => __('Footer — Help', 'armodil'),
        'footer_company' => __('Footer — Company', 'armodil'),
    ]);
});

/* ------------------------------------------------------------------
 * 2. Enqueue Tailwind (via CDN for MVP) + Google Fonts + theme styles
 *    In production: replace CDN with a compiled tailwind.css.
 * ------------------------------------------------------------------ */
add_action('wp_enqueue_scripts', function () {
    // Google fonts
    wp_enqueue_style(
        'armodil-fonts',
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap',
        [],
        null
    );
    // Tailwind CDN (dev only — swap to compiled build for production)
    wp_enqueue_script('armodil-tailwind', 'https://cdn.tailwindcss.com', [], null, false);
    // Theme stylesheet
    wp_enqueue_style('armodil-style', get_stylesheet_uri(), [], ARMODIL_VERSION);
    // Theme CSS with design tokens
    wp_enqueue_style('armodil-tokens', ARMODIL_URI . '/assets/css/tokens.css', [], ARMODIL_VERSION);
    // Theme interactivity (cart, accordion, TOC)
    wp_enqueue_script('armodil-theme', ARMODIL_URI . '/assets/js/theme.js', [], ARMODIL_VERSION, true);
    wp_localize_script('armodil-theme', 'ARMODIL', [
        'home'       => home_url('/'),
        'ajax'       => admin_url('admin-ajax.php'),
        'currency'   => 'A$',
        'freeShip'   => 299,
        'promoCode'  => 'ARMD10',
    ]);
});

/* ------------------------------------------------------------------
 * 3. Inject Tailwind runtime config (matches DESIGN_SYSTEM.md)
 * ------------------------------------------------------------------ */
add_action('wp_head', function () { ?>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        serif: ['"Playfair Display"','ui-serif','Georgia','serif'],
                        sans:  ['Inter','ui-sans-serif','system-ui','sans-serif'],
                    },
                    colors: {
                        brand: {50:'#f0fdfa',100:'#ccfbf1',200:'#99f6e4',300:'#5eead4',400:'#2dd4bf',500:'#14b8a6',600:'#0d9488',700:'#0f766e',800:'#115e59',900:'#134e4a'},
                        ink:   {50:'#f8fafc',100:'#f1f5f9',200:'#e2e8f0',400:'#94a3b8',500:'#64748b',700:'#334155',800:'#1e293b',900:'#0f172a'},
                    },
                    boxShadow: {
                        card: '0 10px 30px -12px rgba(15,23,42,0.12)',
                        soft: '0 4px 16px -4px rgba(15,23,42,0.08)',
                    },
                }
            }
        }
    </script>
<?php }, 5);

/* ------------------------------------------------------------------
 * 4. Load ACF flexible content registration and helpers
 * ------------------------------------------------------------------ */
require_once ARMODIL_DIR . '/inc/helpers.php';
require_once ARMODIL_DIR . '/inc/acf-flexible-content.php';
require_once ARMODIL_DIR . '/inc/acf-policy.php';
require_once ARMODIL_DIR . '/inc/acf-page-single.php';
require_once ARMODIL_DIR . '/inc/acf-product.php';
require_once ARMODIL_DIR . '/inc/acf-condition.php';
require_once ARMODIL_DIR . '/inc/acf-faq.php';
require_once ARMODIL_DIR . '/inc/acf-how-to-order.php';
require_once ARMODIL_DIR . '/inc/acf-about-contact.php';

/* ------------------------------------------------------------------
 * 5. Register a lightweight custom post type for Conditions & Products
 *    (WooCommerce is recommended for real product management)
 * ------------------------------------------------------------------ */
add_action('init', function () {
    register_post_type('armodil_condition', [
        'label' => 'Conditions',
        'public' => true,
        'has_archive' => 'conditions',
        'rewrite' => ['slug' => 'conditions'],
        'menu_icon' => 'dashicons-heart',
        'supports' => ['title', 'editor', 'thumbnail', 'excerpt'],
        'show_in_rest' => true,
    ]);
    register_post_type('armodil_product', [
        'label' => 'Products',
        'public' => true,
        'has_archive' => 'product',
        'rewrite' => ['slug' => 'product'],
        'menu_icon' => 'dashicons-cart',
        'supports' => ['title', 'editor', 'thumbnail', 'excerpt'],
        'show_in_rest' => true,
    ]);
});
