<?php if (!defined('ABSPATH')) exit;
/** MODULE: content-trust-strip.php — matches <TrustStrip /> */
$pills = get_sub_field('pills') ?: [];
if (!$pills) return;
$loop = array_merge($pills, $pills);
?>
<div class="border-y border-ink-200 bg-white overflow-hidden">
    <div class="mask-fade-x">
        <div class="flex gap-10 py-4 animate-marquee whitespace-nowrap">
            <?php foreach ($loop as $p) : ?>
                <span class="inline-flex items-center gap-2 text-sm font-medium text-ink-700"><?php echo armodil_icon('ShieldCheck','w-4 h-4 text-brand-600'); ?> <?php echo esc_html($p['label']); ?></span>
            <?php endforeach; ?>
        </div>
    </div>
</div>
