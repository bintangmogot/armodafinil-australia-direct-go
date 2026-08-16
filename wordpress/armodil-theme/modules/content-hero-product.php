<?php if (!defined('ABSPATH')) exit;
/** MODULE: content-hero-product.php — matches <HeroSection /> */
$eyebrow  = get_sub_field('eyebrow');
$title    = get_sub_field('title');
$subtitle = get_sub_field('subtitle');
$cta_lbl  = get_sub_field('cta_label') ?: 'Shop Now';
$cta_url  = get_sub_field('cta_url')   ?: home_url('/product');
$note     = get_sub_field('note');
$image    = get_sub_field('image');
$product  = get_sub_field('featured_product');
$img_url  = $image['url'] ?? ($product ? get_the_post_thumbnail_url($product->ID, 'large') : '');
?>
<section class="section-wash">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
            <?php if ($eyebrow) : ?>
            <span class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700 bg-brand-100 px-3 py-1.5 rounded-full">
                <?php echo armodil_icon('Sparkles','w-3.5 h-3.5'); ?> <?php echo armodil_esc($eyebrow); ?>
            </span>
            <?php endif; ?>
            <h1 class="mt-5 font-serif text-4xl md:text-6xl leading-[1.05] font-semibold text-ink-900"><?php echo armodil_esc($title); ?></h1>
            <?php if ($subtitle) : ?><p class="mt-5 text-lg text-ink-700 leading-relaxed max-w-xl"><?php echo esc_html($subtitle); ?></p><?php endif; ?>
            <div class="mt-8 flex flex-wrap gap-3">
                <a href="<?php echo esc_url($cta_url); ?>" class="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold btn-primary"><?php echo armodil_esc($cta_lbl); ?> <?php echo armodil_icon('ArrowRight','w-4 h-4'); ?></a>
                <a href="<?php echo esc_url(home_url('/conditions')); ?>" class="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-ink-200 hover:border-brand-600 text-ink-900 font-semibold">Explore guides</a>
            </div>
        </div>
        <div class="bg-white rounded-2xl border border-ink-200 shadow-card overflow-hidden">
            <?php if ($img_url) : ?><div class="aspect-[16/9] bg-brand-50"><img src="<?php echo esc_url($img_url); ?>" alt="<?php echo esc_attr($product ? $product->post_title : $title); ?>" class="w-full h-full object-cover"></div><?php endif; ?>
            <div class="p-6">
                <h3 class="font-serif text-xl font-semibold text-ink-900"><?php echo esc_html($product ? $product->post_title : $title); ?></h3>
                <?php if ($note) : ?><div class="mt-4 p-3 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900"><?php echo esc_html($note); ?></div><?php endif; ?>
                <?php if ($product) : $price = get_field('price', $product->ID); ?>
                    <div class="mt-4 flex items-center justify-between">
                        <div class="text-2xl font-semibold"><?php echo armodil_price($price); ?></div>
                        <a href="<?php echo esc_url(get_permalink($product->ID)); ?>" class="inline-flex items-center gap-2 h-10 px-4 rounded-full bg-ink-900 hover:bg-ink-800 text-white text-sm font-semibold btn-primary"><?php echo armodil_icon('ShoppingCart','w-4 h-4'); ?> Add</a>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </div>
</section>
