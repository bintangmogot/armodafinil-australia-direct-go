<?php if (!defined('ABSPATH')) exit;
/** MODULE: content-shipping-features.php — matches <ShippingFeatures /> */
$heading = get_sub_field('heading') ?: 'Fast, discreet delivery';
$sub     = get_sub_field('subheading');
$items   = get_sub_field('items') ?: [];
?>
<section class="py-16 md:py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-serif font-semibold text-ink-900 text-center"><?php echo esc_html($heading); ?></h2>
        <?php if ($sub) : ?><p class="mt-2 text-center text-ink-500"><?php echo esc_html($sub); ?></p><?php endif; ?>
        <div class="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <?php foreach ($items as $f) : ?>
            <div class="bg-white border border-ink-200 rounded-2xl p-6 hover-lift">
                <div class="w-11 h-11 rounded-xl bg-brand-100 text-brand-700 grid place-items-center mb-4"><?php echo armodil_icon($f['icon'] ?: 'Truck','w-5 h-5'); ?></div>
                <h3 class="font-serif text-lg font-semibold text-ink-900"><?php echo esc_html($f['title']); ?></h3>
                <p class="mt-2 text-sm text-ink-700 leading-relaxed"><?php echo esc_html($f['desc']); ?></p>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
