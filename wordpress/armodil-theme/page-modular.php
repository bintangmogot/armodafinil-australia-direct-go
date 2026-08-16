<?php
/**
 * Template Name: Modular Page (ACF Pro)
 * Loops through the Flexible Content field `page_modules` and
 * loads a matching modules/content-{name}.php partial for each row.
 */
if (!defined('ABSPATH')) exit;
get_header();

if (have_posts()) : while (have_posts()) : the_post();
    if (have_rows('page_modules')) :
        while (have_rows('page_modules')) : the_row();
            // Layout key → module name (e.g. layout_hero_product → hero-product)
            $layout = get_row_layout();
            $module = str_replace(['layout_', '_'], ['', '-'], $layout);
            armodil_module($module);
        endwhile;
    else :
        echo '<div class="max-w-3xl mx-auto py-24 text-center text-ink-500">No modules added yet — open this page in the WordPress admin and add sections.</div>';
    endif;
endwhile; endif;

get_footer();
