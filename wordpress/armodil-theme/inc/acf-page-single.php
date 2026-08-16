<?php
/**
 * ACF for the reusable "single page hero" — used by About, Contact,
 * Categories index, Conditions index, FAQ, Cart, Checkout, Categories,
 * and any custom page that needs an editable eyebrow/title/intro.
 */
if (!defined('ABSPATH')) exit;
if (!function_exists('acf_add_local_field_group')) return;

add_action('acf/init', function () {
    acf_add_local_field_group([
        'key'      => 'group_armodil_page_hero',
        'title'    => 'Armodafinil — Page hero',
        'location' => [[
            ['param' => 'page_template', 'operator' => '==', 'value' => 'page-about.php'],
        ], [
            ['param' => 'page_template', 'operator' => '==', 'value' => 'page-contact.php'],
        ], [
            ['param' => 'page_template', 'operator' => '==', 'value' => 'page-faq.php'],
        ], [
            ['param' => 'page_template', 'operator' => '==', 'value' => 'page-categories.php'],
        ], [
            ['param' => 'page_template', 'operator' => '==', 'value' => 'page-conditions.php'],
        ], [
            ['param' => 'page_template', 'operator' => '==', 'value' => 'page-cart.php'],
        ], [
            ['param' => 'page_template', 'operator' => '==', 'value' => 'page-checkout.php'],
        ]],
        'fields' => [
            ['key' => 'f_hero_eyebrow_p', 'label' => 'Eyebrow',           'name' => 'hero_eyebrow', 'type' => 'text'],
            ['key' => 'f_hero_title_p',   'label' => 'Title (override)',   'name' => 'hero_title',   'type' => 'text', 'instructions' => 'Leave blank to fall back to the page title.'],
            ['key' => 'f_hero_intro_p',   'label' => 'Intro paragraph',    'name' => 'hero_intro',   'type' => 'textarea', 'rows' => 3],
            ['key' => 'f_hero_image_p',   'label' => 'Optional image',     'name' => 'hero_image',   'type' => 'image', 'return_format' => 'array'],
        ],
    ]);
});
