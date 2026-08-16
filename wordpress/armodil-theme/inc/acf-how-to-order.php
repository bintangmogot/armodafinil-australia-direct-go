<?php
/** ACF for How-to-Order page — 5-step timeline + before-you-checkout tiles. */
if (!defined('ABSPATH')) exit;
if (!function_exists('acf_add_local_field_group')) return;

add_action('acf/init', function () {
    acf_add_local_field_group([
        'key'      => 'group_armodil_how',
        'title'    => 'Armodafinil — How to order',
        'location' => [[['param' => 'page_template', 'operator' => '==', 'value' => 'page-how-to-order.php']]],
        'fields'   => [
            [
                'key'          => 'f_how_steps',
                'label'        => 'Steps',
                'name'         => 'steps',
                'type'         => 'repeater',
                'layout'       => 'block',
                'min'          => 1, 'max' => 8,
                'button_label' => 'Add step',
                'sub_fields'   => [
                    ['key' => 'f_how_step_icon',  'label' => 'Icon (lucide)', 'name' => 'icon',  'type' => 'text', 'default_value' => 'Search'],
                    ['key' => 'f_how_step_title', 'label' => 'Step title',    'name' => 'title', 'type' => 'text'],
                    ['key' => 'f_how_step_body',  'label' => 'Step body',     'name' => 'body',  'type' => 'textarea', 'rows' => 3],
                ],
            ],
            [
                'key'          => 'f_how_tiles',
                'label'        => 'Before-you-checkout tiles',
                'name'         => 'tiles',
                'type'         => 'repeater',
                'layout'       => 'block',
                'min'          => 1, 'max' => 6,
                'button_label' => 'Add tile',
                'sub_fields'   => [
                    ['key' => 'f_how_tile_icon',  'label' => 'Icon (lucide)', 'name' => 'icon',  'type' => 'text', 'default_value' => 'Truck'],
                    ['key' => 'f_how_tile_title', 'label' => 'Title',         'name' => 'title', 'type' => 'text'],
                    ['key' => 'f_how_tile_body',  'label' => 'Body',          'name' => 'body',  'type' => 'textarea', 'rows' => 3],
                ],
            ],
        ],
    ]);
});
