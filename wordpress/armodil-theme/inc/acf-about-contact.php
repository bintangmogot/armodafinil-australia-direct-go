<?php
/** ACF for About and Contact pages. */
if (!defined('ABSPATH')) exit;
if (!function_exists('acf_add_local_field_group')) return;

add_action('acf/init', function () {
    // About page
    acf_add_local_field_group([
        'key'      => 'group_armodil_about',
        'title'    => 'Armodafinil — About',
        'location' => [[['param' => 'page_template', 'operator' => '==', 'value' => 'page-about.php']]],
        'fields'   => [
            [
                'key' => 'f_about_stats', 'label' => 'Stat cards', 'name' => 'stats',
                'type' => 'repeater', 'layout' => 'table', 'button_label' => 'Add stat',
                'sub_fields' => [
                    ['key' => 'f_about_stat_n', 'label' => 'Number', 'name' => 'n', 'type' => 'text'],
                    ['key' => 'f_about_stat_l', 'label' => 'Label',  'name' => 'l', 'type' => 'text'],
                ],
            ],
            [
                'key' => 'f_about_values', 'label' => 'Values (3-up)', 'name' => 'values',
                'type' => 'repeater', 'layout' => 'block', 'button_label' => 'Add value',
                'sub_fields' => [
                    ['key' => 'f_about_value_icon',  'label' => 'Icon',        'name' => 'icon',  'type' => 'text', 'default_value' => 'ShieldCheck'],
                    ['key' => 'f_about_value_title', 'label' => 'Title',       'name' => 'title', 'type' => 'text'],
                    ['key' => 'f_about_value_desc',  'label' => 'Description', 'name' => 'desc',  'type' => 'textarea', 'rows' => 3],
                ],
            ],
            ['key' => 'f_about_story_h', 'label' => 'Story heading',   'name' => 'story_h', 'type' => 'text'],
            ['key' => 'f_about_story_p', 'label' => 'Story paragraphs', 'name' => 'story_p', 'type' => 'wysiwyg'],
            [
                'key' => 'f_about_team', 'label' => 'Team members', 'name' => 'team',
                'type' => 'repeater', 'layout' => 'block', 'button_label' => 'Add member',
                'sub_fields' => [
                    ['key' => 'f_about_team_name', 'label' => 'Name', 'name' => 'name', 'type' => 'text'],
                    ['key' => 'f_about_team_role', 'label' => 'Role', 'name' => 'role', 'type' => 'text'],
                    ['key' => 'f_about_team_bio',  'label' => 'Bio',  'name' => 'bio',  'type' => 'textarea', 'rows' => 3],
                    ['key' => 'f_about_team_avatar', 'label' => 'Avatar', 'name' => 'avatar', 'type' => 'image', 'return_format' => 'array'],
                ],
            ],
        ],
    ]);

    // Contact page
    acf_add_local_field_group([
        'key'      => 'group_armodil_contact',
        'title'    => 'Armodafinil — Contact',
        'location' => [[['param' => 'page_template', 'operator' => '==', 'value' => 'page-contact.php']]],
        'fields'   => [
            [
                'key' => 'f_contact_channels', 'label' => 'Contact channels', 'name' => 'channels',
                'type' => 'repeater', 'layout' => 'block', 'button_label' => 'Add channel',
                'sub_fields' => [
                    ['key' => 'f_contact_ch_icon',  'label' => 'Icon (lucide)', 'name' => 'icon',  'type' => 'text', 'default_value' => 'Mail'],
                    ['key' => 'f_contact_ch_label', 'label' => 'Label',         'name' => 'label', 'type' => 'text'],
                    ['key' => 'f_contact_ch_value', 'label' => 'Value shown',   'name' => 'value', 'type' => 'text'],
                    ['key' => 'f_contact_ch_href',  'label' => 'Link (href)',   'name' => 'href',  'type' => 'text'],
                ],
            ],
            ['key' => 'f_contact_form_title', 'label' => 'Form title', 'name' => 'form_title', 'type' => 'text', 'default_value' => 'Send us a message'],
            ['key' => 'f_contact_form_note',  'label' => 'Success note', 'name' => 'form_note',  'type' => 'text', 'default_value' => "Thanks — we'll reply within one business day."],
        ],
    ]);
});
