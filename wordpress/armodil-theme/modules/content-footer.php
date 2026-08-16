<?php if (!defined('ABSPATH')) exit;
/** MODULE: content-footer.php — matches <Footer /> */
$tagline = get_field('footer_tagline','option') ?: 'Steady focus, cleaner clarity, and dependable dispatch — built for Australian customers who take their day seriously.';
$brand   = get_field('brand_name','option') ?: 'Armodil';
$region  = get_field('brand_region','option') ?: 'Australia';
$socials = get_field('footer_socials','option') ?: [];
$email   = get_field('support_email','option') ?: 'support@armodil.example';
$phone   = get_field('support_phone','option') ?: '+61 4 8999 5839';
$addr    = get_field('address','option') ?: 'Sydney, AU';
$legal   = get_field('legal_note','option') ?: 'Information only — not medical advice.';
?>
<footer class="mt-24 bg-ink-900 text-ink-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        <div class="col-span-2 lg:col-span-2">
            <div class="font-serif text-2xl font-semibold text-white"><?php echo esc_html($brand); ?> <span class="text-brand-300"><?php echo esc_html($region); ?></span></div>
            <p class="mt-3 text-sm text-ink-100/70 max-w-sm"><?php echo esc_html($tagline); ?></p>
            <?php if ($socials) : ?>
            <div class="mt-5 flex items-center gap-3 text-brand-300">
                <?php foreach ($socials as $s) : ?><a href="<?php echo esc_url($s['url']); ?>" class="w-9 h-9 grid place-items-center rounded-full bg-white/5 hover:bg-white/10" aria-label="<?php echo esc_attr($s['icon']); ?>"><?php echo armodil_icon($s['icon'] ?: 'MessageCircle','w-4 h-4'); ?></a><?php endforeach; ?>
            </div>
            <?php endif; ?>
        </div>
        <?php
        $cols = [
            ['title'=>'Shop','loc'=>'footer_shop','fallback'=>[['All products','/product'],['Categories','/categories'],['Condition guides','/conditions'],['Blog','/blog']]],
            ['title'=>'Help','loc'=>'footer_help','fallback'=>[['FAQ','/faq'],['Contact','/contact'],['Shipping','/shipping'],['Returns','/returns']]],
            ['title'=>'Company','loc'=>'footer_company','fallback'=>[['About','/about'],['Privacy','/privacy'],['Terms','/terms']]],
        ];
        foreach ($cols as $col) : ?>
            <div>
                <div class="text-white font-semibold mb-3 text-sm uppercase tracking-widest"><?php echo esc_html($col['title']); ?></div>
                <?php if (has_nav_menu($col['loc'])) {
                    wp_nav_menu(['theme_location'=>$col['loc'],'container'=>false,'menu_class'=>'space-y-2 text-sm text-ink-100/80','fallback_cb'=>false]);
                } else { ?>
                    <ul class="space-y-2 text-sm text-ink-100/80">
                        <?php foreach ($col['fallback'] as $l) : ?><li><a href="<?php echo esc_url(home_url($l[1])); ?>" class="hover:text-brand-300"><?php echo esc_html($l[0]); ?></a></li><?php endforeach; ?>
                    </ul>
                <?php } ?>
            </div>
        <?php endforeach; ?>
    </div>
    <div class="border-t border-white/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row gap-3 items-start md:items-center justify-between text-xs text-ink-100/60">
            <div class="flex flex-wrap items-center gap-4">
                <span class="inline-flex items-center gap-1.5"><?php echo armodil_icon('ShieldCheck','w-3.5 h-3.5 text-brand-300'); ?> SSL secured</span>
                <span class="inline-flex items-center gap-1.5"><?php echo armodil_icon('Truck','w-3.5 h-3.5 text-brand-300'); ?> AU-wide dispatch</span>
                <span class="inline-flex items-center gap-1.5"><?php echo armodil_icon('CreditCard','w-3.5 h-3.5 text-brand-300'); ?> Encrypted checkout</span>
                <span class="inline-flex items-center gap-1.5"><?php echo armodil_icon('MapPin','w-3.5 h-3.5 text-brand-300'); ?> <?php echo esc_html($addr); ?></span>
                <span><?php echo esc_html($email); ?></span>
                <span><?php echo esc_html($phone); ?></span>
            </div>
            <div>© <?php echo date('Y'); ?> <?php echo esc_html($brand); ?>. <?php echo esc_html($legal); ?></div>
        </div>
    </div>
</footer>
