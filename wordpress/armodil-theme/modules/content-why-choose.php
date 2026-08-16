<?php if (!defined('ABSPATH')) exit;
/** MODULE: content-why-choose.php — matches <WhyChoose /> */
$heading = get_sub_field('heading') ?: 'Why high-achievers choose us';
$items   = get_sub_field('items') ?: [];
?>
<section class="py-16 md:py-20 bg-stone-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-serif font-semibold text-ink-900 text-center"><?php echo esc_html($heading); ?></h2>
        <div class="mt-10 grid md:grid-cols-3 gap-5">
            <?php foreach ($items as $w) : ?>
            <div class="bg-white border border-ink-200 rounded-2xl p-7 hover-lift text-center">
                <div class="mx-auto w-14 h-14 rounded-2xl bg-brand-100 text-brand-700 grid place-items-center"><?php echo armodil_icon($w['icon'] ?: 'ShieldCheck','w-6 h-6'); ?></div>
                <h3 class="mt-5 font-serif text-xl font-semibold text-ink-900"><?php echo esc_html($w['title']); ?></h3>
                <p class="mt-2 text-sm text-ink-700 leading-relaxed"><?php echo esc_html($w['desc']); ?></p>
                <?php if (!empty($w['tag'])) : ?><span class="mt-4 inline-block text-[11px] uppercase tracking-widest font-semibold text-brand-700 bg-brand-100 rounded-full px-3 py-1"><?php echo esc_html($w['tag']); ?></span><?php endif; ?>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
