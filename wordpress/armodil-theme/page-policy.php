<?php
/**
 * Template Name: Policy / Legal
 * Renders a numbered-section policy page from ACF Repeater fields.
 * Used by: /privacy-policy, /terms, /return-policy, /shipping-policy, /disclaimer.
 */
if (!defined('ABSPATH')) exit;
get_header();

$eyebrow = get_field('eyebrow')  ?: 'Legal';
$intro   = get_field('intro');
$updated = get_field('updated')  ?: 'August 2026';
$cta_lbl = get_field('cta_label');
$cta_url = get_field('cta_url');
$sections = get_field('sections') ?: [];
$show_trust = get_field('show_trust');
$show_cta   = get_field('show_cta');
?>

<?php get_template_part('parts/breadcrumb', null, ['crumbs' => [['label' => get_the_title()]]]); ?>

<div class="section-wash">
    <div class="max-w-4xl mx-auto px-4 py-14 md:py-20">
        <a href="<?php echo esc_url(home_url('/')); ?>" class="inline-flex items-center gap-1.5 text-sm text-ink-700 hover:text-brand-700">
            <?php echo armodil_icon('ArrowLeft','w-4 h-4'); ?> Back to home
        </a>
        <div class="mt-6 text-[11px] uppercase tracking-widest text-brand-700 font-semibold bg-brand-100 rounded-full px-3 py-1.5 inline-block"><?php echo esc_html($eyebrow); ?></div>
        <h1 class="mt-4 font-serif text-4xl md:text-5xl font-semibold text-ink-900 leading-tight"><?php the_title(); ?></h1>
        <?php if ($intro) : ?><p class="mt-4 text-lg text-ink-700 leading-relaxed max-w-3xl"><?php echo esc_html($intro); ?></p><?php endif; ?>
        <p class="mt-5 text-xs text-ink-500">Last updated <?php echo esc_html($updated); ?></p>
        <?php if ($cta_lbl && $cta_url) : ?>
            <div class="mt-6"><a href="<?php echo esc_url($cta_url); ?>" class="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold btn-primary"><?php echo esc_html($cta_lbl); ?> <?php echo armodil_icon('ArrowRight','w-4 h-4'); ?></a></div>
        <?php endif; ?>
    </div>
</div>

<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid lg:grid-cols-[260px_1fr] gap-10">
    <?php get_template_part('parts/policy-toc', null, ['sections' => $sections]); ?>

    <div class="space-y-10">
        <?php foreach ($sections as $i => $s) : ?>
            <section id="<?php echo esc_attr($s['anchor']); ?>" class="scroll-mt-24">
                <div class="text-[11px] uppercase tracking-widest text-ink-400 font-semibold tabular-nums"><?php echo str_pad($i + 1, 2, '0', STR_PAD_LEFT); ?></div>
                <h2 class="mt-1 font-serif text-2xl md:text-3xl font-semibold text-ink-900"><?php echo esc_html($s['title']); ?></h2>
                <div class="mt-4 space-y-4 text-ink-700 leading-relaxed">
                <?php foreach (($s['blocks'] ?? []) as $b) : $kind = $b['kind'] ?? 'p'; ?>
                    <?php if ($kind === 'p') : ?>
                        <p><?php echo esc_html($b['p'] ?? ''); ?></p>
                    <?php elseif ($kind === 'subh') : ?>
                        <div>
                            <h3 class="font-serif text-lg font-semibold text-ink-900 mt-4 mb-2"><?php echo esc_html($b['subh'] ?? ''); ?></h3>
                            <p><?php echo esc_html($b['p'] ?? ''); ?></p>
                        </div>
                    <?php elseif ($kind === 'list') : ?>
                        <ul class="list-disc pl-6 space-y-1.5">
                            <?php foreach (($b['items'] ?? []) as $it) : ?>
                                <li><?php echo esc_html($it['text']); ?></li>
                            <?php endforeach; ?>
                        </ul>
                    <?php elseif ($kind === 'note') : ?>
                        <div class="p-4 rounded-xl bg-brand-50 border border-brand-100 text-sm">
                            <div class="text-xs uppercase tracking-widest font-semibold text-brand-700 mb-1">Note</div>
                            <p class="text-ink-700"><?php echo esc_html($b['note'] ?? ''); ?></p>
                        </div>
                    <?php elseif ($kind === 'warn') : ?>
                        <div class="p-4 rounded-xl bg-amber-50 border border-amber-200 text-sm">
                            <div class="text-xs uppercase tracking-widest font-semibold text-amber-800 mb-1">Important</div>
                            <p class="text-amber-900"><?php echo esc_html($b['warn'] ?? ''); ?></p>
                        </div>
                    <?php endif; ?>
                <?php endforeach; ?>
                </div>
            </section>
        <?php endforeach; ?>

        <?php if ($show_trust) : ?>
        <div class="pt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-ink-500 border-t border-ink-200">
            <span class="inline-flex items-center gap-1.5"><?php echo armodil_icon('ShieldCheck','w-3.5 h-3.5 text-brand-600'); ?> Verified pharmacy</span>
            <span class="inline-flex items-center gap-1.5"><?php echo armodil_icon('Lock','w-3.5 h-3.5 text-brand-600'); ?> Secure checkout</span>
            <span class="inline-flex items-center gap-1.5"><?php echo armodil_icon('Truck','w-3.5 h-3.5 text-brand-600'); ?> AU-wide delivery</span>
        </div>
        <?php endif; ?>
    </div>
</div>

<?php if ($show_cta) armodil_module('order-cta'); ?>

<?php get_footer();
