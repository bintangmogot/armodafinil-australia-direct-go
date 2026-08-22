<?php
/**
 * Enqueue scripts and styles
 */

function armo_enqueue_scripts() {
    // 1. Google Fonts: Playfair Display + Inter
    wp_enqueue_style(
        'armo-fonts',
        'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@400;500;600&display=swap',
        array(),
        null
    );

    // 2. AOS CSS
    wp_enqueue_style(
        'armo-aos-css',
        'https://unpkg.com/aos@2.3.1/dist/aos.css',
        array(),
        '2.3.1'
    );

    // 3. Main Tailwind CSS
    $css_path = ARMO_THEME_DIR . '/assets/css/main.css';
    $css_url  = ARMO_THEME_URI . '/assets/css/main.css';
    
    if (file_exists($css_path)) {
        wp_enqueue_style('armo-style', $css_url, array(), filemtime($css_path));
    } else {
        wp_enqueue_style('armo-style-fallback', get_stylesheet_uri(), array(), ARMO_THEME_VERSION);
    }

    // 4. Main JavaScript
    wp_enqueue_script(
        'armo-main-js',
        ARMO_THEME_URI . '/assets/js/main.js',
        array('jquery'),
        file_exists(ARMO_THEME_DIR . '/assets/js/main.js') ? filemtime(ARMO_THEME_DIR . '/assets/js/main.js') : ARMO_THEME_VERSION,
        true
    );

    // 5. AOS JS
    wp_enqueue_script(
        'armo-aos-js',
        'https://unpkg.com/aos@2.3.1/dist/aos.js',
        array(),
        '2.3.1',
        true
    );

    // Initialize AOS via inline script
    wp_add_inline_script('armo-aos-js', 'document.addEventListener("DOMContentLoaded", function() { AOS.init({ once: true, offset: 50, duration: 800 }); });');

    // 6. Product Total JS (only on single product)
    if ( is_product() ) {
        wp_enqueue_script(
            'armo-product-total-js',
            ARMO_THEME_URI . '/assets/js/product-total.js',
            array('jquery'),
            file_exists(ARMO_THEME_DIR . '/assets/js/product-total.js') ? filemtime(ARMO_THEME_DIR . '/assets/js/product-total.js') : ARMO_THEME_VERSION,
            true
        );
    }
}
add_action('wp_enqueue_scripts', 'armo_enqueue_scripts');
