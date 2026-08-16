<?php
/**
 * Fallback index.php — renders the default loop.
 * Real pages should use page-modular.php (the ACF Flexible template).
 */
if (!defined('ABSPATH')) exit;
get_header(); ?>

<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
    <h1 class="text-3xl md:text-4xl font-serif font-semibold text-ink-900"><?php the_archive_title(); ?></h1>
    <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
    <?php while (have_posts()) : the_post(); ?>
        <article class="bg-white border border-ink-200 rounded-2xl overflow-hidden hover-lift">
            <?php if (has_post_thumbnail()) : ?>
                <a href="<?php the_permalink(); ?>" class="block aspect-[16/9] bg-brand-50 overflow-hidden"><?php the_post_thumbnail('large', ['class'=>'w-full h-full object-cover']); ?></a>
            <?php endif; ?>
            <div class="p-5">
                <h3 class="font-serif text-lg font-semibold"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                <p class="mt-2 text-sm text-ink-700"><?php echo esc_html(get_the_excerpt()); ?></p>
            </div>
        </article>
    <?php endwhile; ?>
    </div>
</section>

<?php get_footer();
