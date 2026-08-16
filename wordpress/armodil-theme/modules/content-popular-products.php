<?php if (!defined('ABSPATH')) exit;
/** MODULE: content-popular-products.php — matches <PopularProducts /> */
$heading = get_sub_field('heading') ?: 'Popular right now';
$sub     = get_sub_field('subheading');
$products = get_sub_field('products') ?: [];
?>
<section class="py-16 md:py-20 bg-stone-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-end justify-between gap-4 flex-wrap">
            <div>
                <h2 class="text-3xl md:text-4xl font-serif font-semibold text-ink-900"><?php echo esc_html($heading); ?></h2>
                <?php if ($sub) : ?><p class="mt-2 text-ink-500"><?php echo esc_html($sub); ?></p><?php endif; ?>
            </div>
            <a href="<?php echo esc_url(home_url('/product')); ?>" class="inline-flex items-center gap-1.5 text-brand-700 font-semibold">View all <?php echo armodil_icon('ArrowRight','w-4 h-4'); ?></a>
        </div>
        <div class="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <?php foreach ($products as $p) : $pid = $p->ID; $price = get_field('price', $pid); $rating = get_field('rating', $pid) ?: 4.5; ?>
            <div class="group bg-white border border-ink-200 rounded-2xl overflow-hidden hover-lift flex flex-col">
                <a href="<?php echo esc_url(get_permalink($pid)); ?>" class="block aspect-[4/3] bg-brand-50 overflow-hidden"><?php echo get_the_post_thumbnail($pid,'medium_large',['class'=>'w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]']); ?></a>
                <div class="p-5 flex flex-col gap-3 flex-1">
                    <?php echo armodil_stars($rating); ?>
                    <a href="<?php echo esc_url(get_permalink($pid)); ?>" class="font-serif text-lg font-semibold text-ink-900 leading-snug hover:text-brand-700 line-clamp-2"><?php echo esc_html($p->post_title); ?></a>
                    <div class="text-xl font-semibold text-ink-900"><?php echo armodil_price($price); ?></div>
                    <a href="<?php echo esc_url(get_permalink($pid)); ?>?add-to-cart=<?php echo $pid; ?>" class="mt-auto inline-flex justify-center items-center gap-2 h-10 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold btn-primary"><?php echo armodil_icon('ShoppingCart','w-4 h-4'); ?> Add to Cart</a>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
