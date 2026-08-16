<?php if (!defined('ABSPATH')) exit;
/** MODULE: content-conditions.php — matches <ConditionsGrid /> */
$heading = get_sub_field('heading') ?: 'Explore by condition';
$sub     = get_sub_field('subheading');
$items   = get_sub_field('items') ?: [];
?>
<section class="py-16 md:py-20 bg-stone-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-end justify-between gap-4 flex-wrap">
            <div>
                <h2 class="text-3xl md:text-4xl font-serif font-semibold text-ink-900"><?php echo esc_html($heading); ?></h2>
                <?php if ($sub) : ?><p class="mt-2 text-ink-500"><?php echo esc_html($sub); ?></p><?php endif; ?>
            </div>
            <a href="<?php echo esc_url(home_url('/conditions')); ?>" class="inline-flex items-center gap-1.5 text-brand-700 font-semibold">All guides <?php echo armodil_icon('ArrowRight','w-4 h-4'); ?></a>
        </div>
        <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <?php foreach ($items as $c) : $cid = $c->ID; ?>
            <a href="<?php echo esc_url(get_permalink($cid)); ?>" class="group bg-white border border-ink-200 rounded-2xl overflow-hidden hover-lift block">
                <div class="aspect-[16/9] bg-brand-50"><?php echo get_the_post_thumbnail($cid,'large',['class'=>'w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]']); ?></div>
                <div class="p-5">
                    <div class="text-[11px] uppercase tracking-widest text-brand-700 font-semibold">Guide</div>
                    <h3 class="mt-1 font-serif text-lg font-semibold text-ink-900"><?php echo esc_html($c->post_title); ?></h3>
                    <p class="mt-2 text-sm text-ink-700 leading-relaxed line-clamp-2"><?php echo esc_html(get_the_excerpt($cid)); ?></p>
                    <span class="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">Read guide <?php echo armodil_icon('ArrowRight','w-4 h-4'); ?></span>
                </div>
            </a>
            <?php endforeach; ?>
        </div>
    </div>
</section>
