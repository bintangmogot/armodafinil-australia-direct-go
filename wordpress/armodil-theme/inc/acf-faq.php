<?php
/** ACF for FAQ page — categorised Q&A repeater. */
if (!defined('ABSPATH')) exit;
if (!function_exists('acf_add_local_field_group')) return;

add_action('acf/init', function () {
    acf_add_local_field_group([
        'key'      => 'group_armodil_faq',
        'title'    => 'Armodafinil — FAQ items',
        'location' => [[['param' => 'page_template', 'operator' => '==', 'value' => 'page-faq.php']]],
        'fields'   => [
            [
                'key'          => 'f_faq_categories',
                'label'        => 'Category filter list',
                'name'         => 'faq_categories',
                'type'         => 'repeater',
                'layout'       => 'table',
                'button_label' => 'Add category',
                'sub_fields'   => [
                    ['key' => 'f_faq_cat_name', 'label' => 'Name', 'name' => 'name', 'type' => 'text'],
                    ['key' => 'f_faq_cat_icon', 'label' => 'Icon (lucide name)', 'name' => 'icon', 'type' => 'text'],
                ],
            ],
            [
                'key'          => 'f_faq_items',
                'label'        => 'Questions & answers',
                'name'         => 'faq_items',
                'type'         => 'repeater',
                'layout'       => 'block',
                'button_label' => 'Add Q&A',
                'sub_fields'   => [
                    ['key' => 'f_faq_item_cat', 'label' => 'Category', 'name' => 'cat', 'type' => 'text'],
                    ['key' => 'f_faq_item_q',   'label' => 'Question', 'name' => 'q',   'type' => 'text'],
                    ['key' => 'f_faq_item_a',   'label' => 'Answer',   'name' => 'a',   'type' => 'wysiwyg', 'toolbar' => 'basic'],
                ],
            ],
        ],
    ]);
});
