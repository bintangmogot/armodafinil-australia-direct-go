<?php
/**
 * ACF field group for policy / legal pages (page-policy.php).
 * Uses a Repeater `sections` with a nested Repeater `blocks`
 * so editors can add any number of numbered sections, each with
 * paragraphs, bullet lists, sub-headings, note callouts and warn callouts.
 */
if (!defined('ABSPATH')) exit;
if (!function_exists('acf_add_local_field_group')) return;

add_action('acf/init', function () {

    acf_add_local_field_group([
        'key'      => 'group_armodil_policy',
        'title'    => 'Armodafinil — Policy page',
        'location' => [[['param' => 'page_template', 'operator' => '==', 'value' => 'page-policy.php']]],
        'fields'   => [
            ['key' => 'f_policy_eyebrow', 'label' => 'Eyebrow (small label)', 'name' => 'eyebrow', 'type' => 'text', 'default_value' => 'Legal'],
            ['key' => 'f_policy_intro',   'label' => 'Intro paragraph', 'name' => 'intro', 'type' => 'textarea', 'rows' => 3],
            ['key' => 'f_policy_updated', 'label' => 'Last updated (free-text, e.g. "August 2026")', 'name' => 'updated', 'type' => 'text'],
            ['key' => 'f_policy_cta_label', 'label' => 'Hero CTA label (optional)', 'name' => 'cta_label', 'type' => 'text'],
            ['key' => 'f_policy_cta_url',   'label' => 'Hero CTA URL (optional)',   'name' => 'cta_url',   'type' => 'url'],

            [
                'key'          => 'f_policy_sections',
                'label'        => 'Numbered sections',
                'name'         => 'sections',
                'type'         => 'repeater',
                'layout'       => 'block',
                'button_label' => 'Add section',
                'min'          => 1,
                'sub_fields'   => [
                    ['key' => 'f_policy_section_id',    'label' => 'Anchor ID (kebab-case)', 'name' => 'anchor',  'type' => 'text', 'required' => 1, 'instructions' => 'Used for TOC links, e.g. "order-verification".'],
                    ['key' => 'f_policy_section_title', 'label' => 'Section title',          'name' => 'title',   'type' => 'text', 'required' => 1],
                    [
                        'key'          => 'f_policy_section_blocks',
                        'label'        => 'Content blocks',
                        'name'         => 'blocks',
                        'type'         => 'repeater',
                        'layout'       => 'block',
                        'button_label' => 'Add block',
                        'min'          => 1,
                        'sub_fields'   => [
                            [
                                'key'     => 'f_policy_block_kind', 'label' => 'Block type', 'name' => 'kind', 'type' => 'select',
                                'choices' => [
                                    'p'    => 'Paragraph',
                                    'subh' => 'Sub-heading + paragraph',
                                    'list' => 'Bullet list',
                                    'note' => 'Callout — Note (brand tint)',
                                    'warn' => 'Callout — Important (amber tint)',
                                ],
                                'default_value' => 'p',
                            ],
                            ['key' => 'f_policy_block_subh', 'label' => 'Sub-heading',    'name' => 'subh', 'type' => 'text',     'conditional_logic' => [[['field' => 'f_policy_block_kind', 'operator' => '==', 'value' => 'subh']]]],
                            ['key' => 'f_policy_block_p',    'label' => 'Paragraph text', 'name' => 'p',    'type' => 'textarea', 'rows' => 4, 'conditional_logic' => [[['field' => 'f_policy_block_kind', 'operator' => '==', 'value' => 'p']], [['field' => 'f_policy_block_kind', 'operator' => '==', 'value' => 'subh']]]],
                            ['key' => 'f_policy_block_note', 'label' => 'Note body',      'name' => 'note', 'type' => 'textarea', 'rows' => 3, 'conditional_logic' => [[['field' => 'f_policy_block_kind', 'operator' => '==', 'value' => 'note']]]],
                            ['key' => 'f_policy_block_warn', 'label' => 'Important body', 'name' => 'warn', 'type' => 'textarea', 'rows' => 3, 'conditional_logic' => [[['field' => 'f_policy_block_kind', 'operator' => '==', 'value' => 'warn']]]],
                            [
                                'key'          => 'f_policy_block_list',
                                'label'        => 'List items',
                                'name'         => 'items',
                                'type'         => 'repeater',
                                'layout'       => 'table',
                                'button_label' => 'Add item',
                                'sub_fields'   => [['key' => 'f_policy_block_list_item', 'label' => 'Item', 'name' => 'text', 'type' => 'text']],
                                'conditional_logic' => [[['field' => 'f_policy_block_kind', 'operator' => '==', 'value' => 'list']]],
                            ],
                        ],
                    ],
                ],
            ],
            ['key' => 'f_policy_show_trust', 'label' => 'Show trust badges row', 'name' => 'show_trust', 'type' => 'true_false', 'default_value' => 1, 'ui' => 1],
            ['key' => 'f_policy_show_cta',   'label' => 'Show "Ready to order" CTA below', 'name' => 'show_cta',   'type' => 'true_false', 'default_value' => 1, 'ui' => 1],
        ],
    ]);
});
