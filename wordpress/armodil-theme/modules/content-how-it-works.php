<?php if (!defined('ABSPATH')) exit;
/** MODULE: content-how-it-works.php — matches <HowItWorks /> */
$heading = get_sub_field('heading') ?: 'How it works';
$sub     = get_sub_field('subheading');
$items   = get_sub_field('items') ?: [];
?>
<section class="py-16 md:py-20 bg-stone-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-serif font-semibold text-ink-900 text-center"><?php echo esc_html($heading); ?></h2>
        <?php if ($sub) : ?><p class="mt-2 text-center text-ink-500"><?php echo esc_html($sub); ?></p><?php endif; ?>
        <div class="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <?php $step = 1; foreach ($items as $h) : ?>
            <div class="bg-white border border-ink-200 rounded-2xl p-6 hover-lift">
                <div class="w-10 h-10 rounded-full bg-brand-600 text-white grid place-items-center font-semibold"><?php echo $step++; ?></div>
                <div class="mt-4 text-[11px] uppercase tracking-widest font-semibold text-ink-500"><?php echo esc_html($h['time']); ?></div>
                <h3 class="mt-1 font-serif text-lg font-semibold text-ink-900"><?php echo esc_html($h['title']); ?></h3>
                <p class="mt-2 text-sm text-ink-700 leading-relaxed"><?php echo esc_html($h['desc']); ?></p>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
