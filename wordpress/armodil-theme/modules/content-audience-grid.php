<?php if (!defined('ABSPATH')) exit;
/** MODULE: content-audience-grid.php — matches <AudienceGrid /> */
$heading = get_sub_field('heading') ?: 'Built for your goals';
$sub     = get_sub_field('subheading');
$items   = get_sub_field('items') ?: [];
?>
<section class="py-16 md:py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-serif font-semibold text-ink-900 text-center"><?php echo esc_html($heading); ?></h2>
        <?php if ($sub) : ?><p class="mt-2 text-center text-ink-500"><?php echo esc_html($sub); ?></p><?php endif; ?>
        <div class="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <?php foreach ($items as $a) : ?>
            <div class="group bg-white border border-ink-200 rounded-2xl p-6 hover-lift flex flex-col">
                <div class="w-11 h-11 rounded-xl bg-brand-100 text-brand-700 grid place-items-center mb-4"><?php echo armodil_icon($a['icon'] ?: 'GraduationCap','w-5 h-5'); ?></div>
                <h3 class="font-serif text-lg font-semibold text-ink-900"><?php echo esc_html($a['title']); ?></h3>
                <p class="mt-2 text-sm text-ink-700 leading-relaxed"><?php echo esc_html($a['desc']); ?></p>
                <?php if (!empty($a['badge'])) : ?><div class="mt-4 text-xs font-semibold text-brand-700 bg-brand-50 rounded-full px-3 py-1.5 self-start"><?php echo esc_html($a['badge']); ?></div><?php endif; ?>
                <a href="<?php echo esc_url($a['url'] ?: home_url('/product')); ?>" class="mt-5 text-sm font-semibold text-ink-900 inline-flex items-center gap-1.5 group-hover:text-brand-700"><?php echo esc_html($a['cta']); ?> <?php echo armodil_icon('ArrowRight','w-4 h-4'); ?></a>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
