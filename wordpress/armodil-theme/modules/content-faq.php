<?php if (!defined('ABSPATH')) exit;
/** MODULE: content-faq.php — matches <FAQBlock /> (uses <details> for pure-PHP accordion) */
$heading = get_sub_field('heading') ?: 'FAQ';
$sub     = get_sub_field('subheading') ?: 'Common questions from Australian customers.';
$items   = get_sub_field('items') ?: [];
?>
<section class="py-16 md:py-20">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-serif font-semibold text-ink-900 text-center"><?php echo esc_html($heading); ?></h2>
        <p class="mt-2 text-center text-ink-500"><?php echo esc_html($sub); ?></p>
        <div class="mt-10 space-y-3">
            <?php foreach ($items as $i => $f) : ?>
            <details<?php echo $i === 0 ? ' open' : ''; ?> class="group border border-ink-200 rounded-xl bg-white overflow-hidden">
                <summary class="list-none cursor-pointer flex items-center justify-between gap-4 px-5 py-4">
                    <span class="font-medium text-ink-900"><?php echo esc_html($f['q']); ?></span>
                    <span class="text-ink-500 group-open:text-brand-600 group-open:rotate-180 transition-transform"><?php echo armodil_icon('ChevronDown','w-4 h-4'); ?></span>
                </summary>
                <div class="px-5 pb-5 text-sm text-ink-700 leading-relaxed"><?php echo wp_kses_post(wpautop($f['a'])); ?></div>
            </details>
            <?php endforeach; ?>
        </div>
    </div>
</section>
