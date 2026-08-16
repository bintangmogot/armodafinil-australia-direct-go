<?php if (!defined('ABSPATH')) exit;
/** MODULE: content-testimonials.php — matches <Testimonials /> */
$heading = get_sub_field('heading') ?: 'What Australians say';
$sub     = get_sub_field('subheading');
$items   = get_sub_field('items') ?: [];
?>
<section class="py-16 md:py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-serif font-semibold text-ink-900 text-center"><?php echo esc_html($heading); ?></h2>
        <?php if ($sub) : ?><p class="mt-2 text-center text-ink-500"><?php echo esc_html($sub); ?></p><?php endif; ?>
        <div class="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <?php foreach ($items as $t) : ?>
            <div class="bg-white border border-ink-200 rounded-2xl p-6 hover-lift">
                <div class="text-brand-300 mb-3"><?php echo armodil_icon('Quote','w-6 h-6'); ?></div>
                <h3 class="font-serif text-lg font-semibold text-ink-900"><?php echo esc_html($t['title']); ?></h3>
                <p class="mt-2 text-sm text-ink-700 leading-relaxed"><?php echo esc_html($t['body']); ?></p>
                <div class="mt-4 pt-4 border-t border-ink-200 text-xs text-ink-500">— <?php echo esc_html($t['name']); ?>, <?php echo esc_html($t['city']); ?></div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
