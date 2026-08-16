<?php
/**
 * ACF for Condition CPT — matches the CONDITIONS shape in mock.js.
 */
if (!defined('ABSPATH')) exit;
if (!function_exists('acf_add_local_field_group')) return;

add_action('acf/init', function () {
    acf_add_local_field_group([
        'key'      => 'group_armodil_condition',
        'title'    => 'Armodafinil — Condition guide',
        'location' => [[['param' => 'post_type', 'operator' => '==', 'value' => 'armodil_condition']]],
        'fields'   => [
            ['key' => 'f_c_eyebrow', 'label' => 'Eyebrow',      'name' => 'eyebrow',      'type' => 'text', 'default_value' => 'Guide'],
            ['key' => 'f_c_excerpt', 'label' => 'Short excerpt', 'name' => 'short_excerpt', 'type' => 'textarea', 'rows' => 3],
            ['key' => 'f_c_reading_time', 'label' => 'Reading time', 'name' => 'reading_time', 'type' => 'text', 'default_value' => '4 min'],

            [
                'key'          => 'f_c_sections',
                'label'        => 'Body sections',
                'name'         => 'sections',
                'type'         => 'repeater',
                'layout'       => 'block',
                'button_label' => 'Add section',
                'sub_fields'   => [
                    ['key' => 'f_c_section_h', 'label' => 'Heading',   'name' => 'h', 'type' => 'text'],
                    ['key' => 'f_c_section_p', 'label' => 'Paragraph', 'name' => 'p', 'type' => 'wysiwyg', 'toolbar' => 'basic'],
                    [
                        'key'          => 'f_c_section_list',
                        'label'        => 'Optional bullet list',
                        'name'         => 'items',
                        'type'         => 'repeater',
                        'layout'       => 'table',
                        'button_label' => 'Add point',
                        'sub_fields'   => [['key' => 'f_c_section_item', 'label' => 'Point', 'name' => 'text', 'type' => 'text']],
                    ],
                ],
            ],

            ['key' => 'f_c_editor_note', 'label' => "Editor's note (bottom callout)", 'name' => 'editor_note', 'type' => 'textarea', 'rows' => 3],
        ],
    ]);
});
