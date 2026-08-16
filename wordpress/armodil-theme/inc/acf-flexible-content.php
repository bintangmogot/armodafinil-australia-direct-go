<?php
/**
 * ACF Flexible Content registration for the "Modular Page" template.
 * All layout keys match the components in /app/DESIGN_SYSTEM.md.
 * Requires ACF Pro (Flexible Content field).
 */

if (!defined('ABSPATH')) exit;
if (!function_exists('acf_add_local_field_group')) return;

add_action('acf/init', function () {

    /* ============================================================
     * A. Options page — global topbar / navbar / footer / whatsapp
     * ============================================================ */
    if (function_exists('acf_add_options_page')) {
        acf_add_options_page([
            'page_title' => 'Armodil Global Settings',
            'menu_slug'  => 'armodil-settings',
            'icon_url'   => 'dashicons-admin-generic',
        ]);
    }

    acf_add_local_field_group([
        'key' => 'group_armodil_global',
        'title' => 'Armodil — Global (Header / Footer / FAB)',
        'location' => [[['param' => 'options_page', 'operator' => '==', 'value' => 'armodil-settings']]],
        'fields' => [
            // -------- layout_topbar --------
            ['key'=>'field_topbar_left','label'=>'Topbar — Left text','name'=>'topbar_left','type'=>'text','default_value'=>'Premium cognitive support · Australia-wide dispatch'],
            ['key'=>'field_topbar_center','label'=>'Topbar — Center text','name'=>'topbar_center','type'=>'text','default_value'=>'6–12 business days · discreet packaging'],
            ['key'=>'field_topbar_right','label'=>'Topbar — Right label','name'=>'topbar_right','type'=>'text','default_value'=>'Support'],
            ['key'=>'field_topbar_right_link','label'=>'Topbar — Right link','name'=>'topbar_right_link','type'=>'url'],
            // -------- layout_navbar --------
            ['key'=>'field_brand_name','label'=>'Brand name','name'=>'brand_name','type'=>'text','default_value'=>'Armodil'],
            ['key'=>'field_brand_region','label'=>'Brand region','name'=>'brand_region','type'=>'text','default_value'=>'Australia'],
            ['key'=>'field_brand_logo','label'=>'Brand logo (SVG/PNG)','name'=>'brand_logo','type'=>'image','return_format'=>'array'],
            // -------- layout_whatsapp_fab --------
            ['key'=>'field_whatsapp_url','label'=>'WhatsApp URL','name'=>'whatsapp_url','type'=>'url','default_value'=>'https://wa.me/61489995839'],
            // -------- layout_footer --------
            ['key'=>'field_footer_tagline','label'=>'Footer tagline','name'=>'footer_tagline','type'=>'textarea','rows'=>2,'default_value'=>'Steady focus, cleaner clarity, and dependable dispatch — built for Australian customers who take their day seriously.'],
            ['key'=>'field_footer_socials','label'=>'Footer socials','name'=>'footer_socials','type'=>'repeater','layout'=>'block','sub_fields'=>[
                ['key'=>'field_soc_icon','label'=>'Icon (lucide name)','name'=>'icon','type'=>'text'],
                ['key'=>'field_soc_url','label'=>'URL','name'=>'url','type'=>'url'],
            ]],
            ['key'=>'field_footer_email','label'=>'Support email','name'=>'support_email','type'=>'email','default_value'=>'support@armodil.example'],
            ['key'=>'field_footer_phone','label'=>'Support phone','name'=>'support_phone','type'=>'text','default_value'=>'+61 4 8999 5839'],
            ['key'=>'field_footer_address','label'=>'Address','name'=>'address','type'=>'text','default_value'=>'Sydney, AU'],
            ['key'=>'field_footer_legal','label'=>'Legal note','name'=>'legal_note','type'=>'text','default_value'=>'Information only — not medical advice.'],
        ],
    ]);

    /* ============================================================
     * B. Modular Page — flexible content on page templates
     * ============================================================ */
    acf_add_local_field_group([
        'key' => 'group_armodil_modular',
        'title' => 'Armodil — Page Modules',
        'location' => [[['param'=>'page_template','operator'=>'==','value'=>'page-modular.php']]],
        'fields' => [[
            'key' => 'field_page_modules',
            'label' => 'Modules',
            'name'  => 'page_modules',
            'type'  => 'flexible_content',
            'button_label' => 'Add module',
            'layouts' => [

                // ---- layout_hero_product ----
                'layout_hero_product' => [
                    'key'=>'layout_hero_product','name'=>'hero_product','label'=>'Hero — with product card','display'=>'block',
                    'sub_fields'=>[
                        ['key'=>'f_hero_eyebrow','label'=>'Eyebrow','name'=>'eyebrow','type'=>'text'],
                        ['key'=>'f_hero_title','label'=>'Title','name'=>'title','type'=>'text'],
                        ['key'=>'f_hero_subtitle','label'=>'Subtitle','name'=>'subtitle','type'=>'textarea','rows'=>3],
                        ['key'=>'f_hero_cta_label','label'=>'CTA label','name'=>'cta_label','type'=>'text'],
                        ['key'=>'f_hero_cta_url','label'=>'CTA URL','name'=>'cta_url','type'=>'url'],
                        ['key'=>'f_hero_product','label'=>'Featured product','name'=>'featured_product','type'=>'post_object','post_type'=>['armodil_product'],'return_format'=>'object'],
                        ['key'=>'f_hero_image','label'=>'Hero image','name'=>'image','type'=>'image','return_format'=>'array'],
                        ['key'=>'f_hero_note','label'=>'Promo note','name'=>'note','type'=>'text'],
                    ],
                ],

                // ---- layout_trust_strip ----
                'layout_trust_strip' => [
                    'key'=>'layout_trust_strip','name'=>'trust_strip','label'=>'Trust strip (marquee)','display'=>'block',
                    'sub_fields'=>[['key'=>'f_trust_pills','label'=>'Pills','name'=>'pills','type'=>'repeater','layout'=>'table','sub_fields'=>[
                        ['key'=>'f_trust_pill','label'=>'Label','name'=>'label','type'=>'text'],
                    ]]],
                ],

                // ---- layout_shipping_features ----
                'layout_shipping_features' => [
                    'key'=>'layout_shipping_features','name'=>'shipping_features','label'=>'Shipping features (4-up)','display'=>'block',
                    'sub_fields'=>[
                        ['key'=>'f_ship_heading','label'=>'Heading','name'=>'heading','type'=>'text'],
                        ['key'=>'f_ship_sub','label'=>'Sub-heading','name'=>'subheading','type'=>'text'],
                        ['key'=>'f_ship_items','label'=>'Items','name'=>'items','type'=>'repeater','layout'=>'block','min'=>1,'max'=>6,'sub_fields'=>[
                            ['key'=>'f_ship_icon','label'=>'Icon (lucide)','name'=>'icon','type'=>'text'],
                            ['key'=>'f_ship_title','label'=>'Title','name'=>'title','type'=>'text'],
                            ['key'=>'f_ship_desc','label'=>'Description','name'=>'desc','type'=>'textarea','rows'=>3],
                        ]],
                    ],
                ],

                // ---- layout_popular_products ----
                'layout_popular_products' => [
                    'key'=>'layout_popular_products','name'=>'popular_products','label'=>'Popular products','display'=>'block',
                    'sub_fields'=>[
                        ['key'=>'f_pp_heading','label'=>'Heading','name'=>'heading','type'=>'text'],
                        ['key'=>'f_pp_sub','label'=>'Sub-heading','name'=>'subheading','type'=>'text'],
                        ['key'=>'f_pp_products','label'=>'Products','name'=>'products','type'=>'relationship','post_type'=>['armodil_product'],'return_format'=>'object','min'=>4,'max'=>8],
                    ],
                ],

                // ---- layout_testimonials ----
                'layout_testimonials' => [
                    'key'=>'layout_testimonials','name'=>'testimonials','label'=>'Testimonials','display'=>'block',
                    'sub_fields'=>[
                        ['key'=>'f_ts_heading','label'=>'Heading','name'=>'heading','type'=>'text'],
                        ['key'=>'f_ts_sub','label'=>'Sub-heading','name'=>'subheading','type'=>'text'],
                        ['key'=>'f_ts_items','label'=>'Reviews','name'=>'items','type'=>'repeater','min'=>3,'max'=>9,'layout'=>'block','sub_fields'=>[
                            ['key'=>'f_ts_title','label'=>'Title','name'=>'title','type'=>'text'],
                            ['key'=>'f_ts_body','label'=>'Body','name'=>'body','type'=>'textarea','rows'=>3],
                            ['key'=>'f_ts_name','label'=>'Name','name'=>'name','type'=>'text'],
                            ['key'=>'f_ts_city','label'=>'City','name'=>'city','type'=>'text'],
                        ]],
                    ],
                ],

                // ---- layout_why_choose ----
                'layout_why_choose' => [
                    'key'=>'layout_why_choose','name'=>'why_choose','label'=>'Why choose (3 pillars)','display'=>'block',
                    'sub_fields'=>[
                        ['key'=>'f_wc_heading','label'=>'Heading','name'=>'heading','type'=>'text'],
                        ['key'=>'f_wc_items','label'=>'Pillars','name'=>'items','type'=>'repeater','min'=>3,'max'=>3,'sub_fields'=>[
                            ['key'=>'f_wc_icon','label'=>'Icon (lucide)','name'=>'icon','type'=>'text'],
                            ['key'=>'f_wc_title','label'=>'Title','name'=>'title','type'=>'text'],
                            ['key'=>'f_wc_desc','label'=>'Description','name'=>'desc','type'=>'textarea','rows'=>3],
                            ['key'=>'f_wc_tag','label'=>'Tag','name'=>'tag','type'=>'text'],
                        ]],
                    ],
                ],

                // ---- layout_audience_grid ----
                'layout_audience_grid' => [
                    'key'=>'layout_audience_grid','name'=>'audience_grid','label'=>'Audience grid (4-up)','display'=>'block',
                    'sub_fields'=>[
                        ['key'=>'f_ag_heading','label'=>'Heading','name'=>'heading','type'=>'text'],
                        ['key'=>'f_ag_sub','label'=>'Sub-heading','name'=>'subheading','type'=>'text'],
                        ['key'=>'f_ag_items','label'=>'Audiences','name'=>'items','type'=>'repeater','min'=>3,'max'=>6,'sub_fields'=>[
                            ['key'=>'f_ag_icon','label'=>'Icon','name'=>'icon','type'=>'text'],
                            ['key'=>'f_ag_title','label'=>'Title','name'=>'title','type'=>'text'],
                            ['key'=>'f_ag_desc','label'=>'Description','name'=>'desc','type'=>'textarea','rows'=>3],
                            ['key'=>'f_ag_badge','label'=>'Badge','name'=>'badge','type'=>'text'],
                            ['key'=>'f_ag_cta','label'=>'CTA label','name'=>'cta','type'=>'text'],
                            ['key'=>'f_ag_url','label'=>'CTA URL','name'=>'url','type'=>'url'],
                        ]],
                    ],
                ],

                // ---- layout_how_it_works ----
                'layout_how_it_works' => [
                    'key'=>'layout_how_it_works','name'=>'how_it_works','label'=>'How it works (timeline)','display'=>'block',
                    'sub_fields'=>[
                        ['key'=>'f_hw_heading','label'=>'Heading','name'=>'heading','type'=>'text'],
                        ['key'=>'f_hw_sub','label'=>'Sub-heading','name'=>'subheading','type'=>'text'],
                        ['key'=>'f_hw_items','label'=>'Steps','name'=>'items','type'=>'repeater','min'=>2,'max'=>6,'sub_fields'=>[
                            ['key'=>'f_hw_time','label'=>'Time label','name'=>'time','type'=>'text'],
                            ['key'=>'f_hw_title','label'=>'Title','name'=>'title','type'=>'text'],
                            ['key'=>'f_hw_desc','label'=>'Description','name'=>'desc','type'=>'textarea','rows'=>3],
                        ]],
                    ],
                ],

                // ---- layout_faq ----
                'layout_faq' => [
                    'key'=>'layout_faq','name'=>'faq','label'=>'FAQ (accordion)','display'=>'block',
                    'sub_fields'=>[
                        ['key'=>'f_faq_heading','label'=>'Heading','name'=>'heading','type'=>'text','default_value'=>'FAQ'],
                        ['key'=>'f_faq_sub','label'=>'Sub-heading','name'=>'subheading','type'=>'text'],
                        ['key'=>'f_faq_items','label'=>'Q & A','name'=>'items','type'=>'repeater','min'=>1,'layout'=>'block','sub_fields'=>[
                            ['key'=>'f_faq_q','label'=>'Question','name'=>'q','type'=>'text'],
                            ['key'=>'f_faq_a','label'=>'Answer','name'=>'a','type'=>'textarea','rows'=>4],
                        ]],
                    ],
                ],

                // ---- layout_conditions ----
                'layout_conditions' => [
                    'key'=>'layout_conditions','name'=>'conditions','label'=>'Condition guides','display'=>'block',
                    'sub_fields'=>[
                        ['key'=>'f_cg_heading','label'=>'Heading','name'=>'heading','type'=>'text'],
                        ['key'=>'f_cg_sub','label'=>'Sub-heading','name'=>'subheading','type'=>'text'],
                        ['key'=>'f_cg_items','label'=>'Conditions','name'=>'items','type'=>'relationship','post_type'=>['armodil_condition'],'return_format'=>'object','min'=>3,'max'=>6],
                    ],
                ],

                // ---- layout_blog_grid ----
                'layout_blog_grid' => [
                    'key'=>'layout_blog_grid','name'=>'blog_grid','label'=>'Blog grid','display'=>'block',
                    'sub_fields'=>[
                        ['key'=>'f_bg_heading','label'=>'Heading','name'=>'heading','type'=>'text'],
                        ['key'=>'f_bg_sub','label'=>'Sub-heading','name'=>'subheading','type'=>'text'],
                        ['key'=>'f_bg_count','label'=>'Post count','name'=>'count','type'=>'number','default_value'=>3,'min'=>1,'max'=>12],
                    ],
                ],

                // ---- layout_newsletter ----
                'layout_newsletter' => [
                    'key'=>'layout_newsletter','name'=>'newsletter','label'=>'Newsletter CTA','display'=>'block',
                    'sub_fields'=>[
                        ['key'=>'f_nl_heading','label'=>'Heading','name'=>'heading','type'=>'text','default_value'=>'Stay in the loop'],
                        ['key'=>'f_nl_sub','label'=>'Sub-heading','name'=>'subheading','type'=>'textarea','rows'=>2],
                        ['key'=>'f_nl_button','label'=>'Button label','name'=>'button_label','type'=>'text','default_value'=>'Subscribe'],
                    ],
                ],

            ], // end layouts
        ]],
    ]);
});
