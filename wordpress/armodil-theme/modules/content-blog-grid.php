<?php if (!defined('ABSPATH')) exit;
/** MODULE: content-blog-grid.php — matches <BlogGrid /> */
$heading = get_sub_field('heading') ?: 'Latest from the blog';
$sub     = get_sub_field('subheading');
$count   = (int) (get_sub_field('count') ?: 3);

$q = new WP_Query([
    'post_type' => 'post',
    'posts_per_page' => $count,
    'ignore_sticky_posts' => true,
]);
?>
<section class="py-16 md:py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-end justify-between gap-4 flex-wrap">
            <div>
                <h2 class="text-3xl md:text-4xl font-serif font-semibold text-ink-900"><?php echo esc_html($heading); ?></h2>
                <?php if ($sub) : ?><p class="mt-2 text-ink-500"><?php echo esc_html($sub); ?></p><?php endif; ?>
            </div>
            <a href="<?php echo esc_url(home_url('/blog')); ?>" class="inline-flex items-center gap-1.5 text-brand-700 font-semibold">All articles <?php echo armodil_icon('ArrowRight','w-4 h-4'); ?></a>
        </div>
        <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <?php while ($q->have_posts()) : $q->the_post(); $cat = get_the_category(); ?>
            <a href="<?php the_permalink(); ?>" class="group bg-white border border-ink-200 rounded-2xl overflow-hidden hover-lift block">
                <div class="aspect-[16/9] bg-brand-50"><?php the_post_thumbnail('large',['class'=>'w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]']); ?></div>
                <div class="p-5">
                    <?php if (!empty($cat[0])) : ?><div class="text-[11px] uppercase tracking-widest text-brand-700 font-semibold"><?php echo esc_html($cat[0]->name); ?></div><?php endif; ?>
                    <h3 class="mt-1 font-serif text-lg font-semibold text-ink-900 line-clamp-2"><?php the_title(); ?></h3>
                    <p class="mt-2 text-sm text-ink-700 leading-relaxed line-clamp-2"><?php echo esc_html(get_the_excerpt()); ?></p>
                    <div class="mt-4 flex items-center gap-4 text-xs text-ink-500">
                        <span class="inline-flex items-center gap-1.5"><?php echo armodil_icon('CalendarDays','w-3.5 h-3.5'); ?> <?php echo esc_html(get_the_date()); ?></span>
                        <span class="inline-flex items-center gap-1.5"><?php echo armodil_icon('User2','w-3.5 h-3.5'); ?> <?php the_author(); ?></span>
                    </div>
                </div>
            </a>
            <?php endwhile; wp_reset_postdata(); ?>
        </div>
    </div>
</section>
