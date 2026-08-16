<?php
/**
 * ACF fields for the Product CPT (armodil_product).
 * Mirrors the shape of PRODUCTS in /app/frontend/src/mock.js
 */
if (!defined('ABSPATH')) exit;
if (!function_exists('acf_add_local_field_group')) return;

add_action('acf/init', function () {
    acf_add_local_field_group([
        'key'      => 'group_armodil_product',
        'title'    => 'Armodafinil — Product details',
        'location' => [[['param' => 'post_type', 'operator' => '==', 'value' => 'armodil_product']]],
        'fields'   => [
            ['key' => 'f_p_badge',    'label' => 'Badge / category label', 'name' => 'badge',    'type' => 'text'],
            ['key' => 'f_p_strength', 'label' => 'Strength (e.g. "200mg")', 'name' => 'strength', 'type' => 'text'],
            ['key' => 'f_p_price',    'label' => 'Base price (A$)',        'name' => 'price',    'type' => 'number', 'step' => 0.01, 'min' => 0],
            ['key' => 'f_p_rating',   'label' => 'Rating (0–5)',           'name' => 'rating',   'type' => 'number', 'step' => 0.1, 'min' => 0, 'max' => 5, 'default_value' => 4.5],
            ['key' => 'f_p_reviews',  'label' => 'Review count',           'name' => 'reviews',  'type' => 'number', 'min' => 0, 'default_value' => 0],
            ['key' => 'f_p_stock',    'label' => 'In stock',               'name' => 'in_stock', 'type' => 'true_false', 'default_value' => 1, 'ui' => 1],

            [
                'key'          => 'f_p_variants',
                'label'        => 'Pack variants',
                'name'         => 'variants',
                'type'         => 'repeater',
                'layout'       => 'table',
                'button_label' => 'Add variant',
                'sub_fields'   => [
                    ['key' => 'f_p_variant_qty',   'label' => 'Qty',      'name' => 'qty',   'type' => 'number', 'min' => 1],
                    ['key' => 'f_p_variant_price', 'label' => 'Price A$', 'name' => 'price', 'type' => 'number', 'step' => 0.01, 'min' => 0],
                ],
            ],

            [
                'key'          => 'f_p_specs',
                'label'        => 'Specifications',
                'name'         => 'specs',
                'type'         => 'repeater',
                'layout'       => 'table',
                'button_label' => 'Add spec row',
                'sub_fields'   => [
                    ['key' => 'f_p_specs_k', 'label' => 'Label', 'name' => 'k', 'type' => 'text'],
                    ['key' => 'f_p_specs_v', 'label' => 'Value', 'name' => 'v', 'type' => 'text'],
                ],
            ],

            ['key' => 'f_p_desc_intro', 'label' => 'Description intro',    'name' => 'desc_intro', 'type' => 'wysiwyg'],
            ['key' => 'f_p_usage',      'label' => 'Uses & dosage (HTML)', 'name' => 'usage',      'type' => 'wysiwyg'],
            ['key' => 'f_p_safety',     'label' => 'Safety info (HTML)',   'name' => 'safety',     'type' => 'wysiwyg'],

            [
                'key'          => 'f_p_key_benefits',
                'label'        => 'Key benefits (bullet list)',
                'name'         => 'key_benefits',
                'type'         => 'repeater',
                'layout'       => 'table',
                'button_label' => 'Add benefit',
                'sub_fields'   => [['key' => 'f_p_key_benefit', 'label' => 'Benefit', 'name' => 'text', 'type' => 'text']],
            ],

            [
                'key'          => 'f_p_related',
                'label'        => 'Frequently bought together',
                'name'         => 'related',
                'type'         => 'relationship',
                'post_type'    => ['armodil_product'],
                'return_format'=> 'object',
                'min'          => 0,
                'max'          => 8,
            ],
        ],
    ]);

    // Product-category taxonomy for filtering (mirrors CATEGORY_TREE)
    if (function_exists('register_taxonomy')) {
        register_taxonomy('product_category', ['armodil_product'], [
            'label'        => 'Product Categories',
            'hierarchical' => true,
            'show_in_rest' => true,
            'rewrite'      => ['slug' => 'category'],
        ]);
    }
});
