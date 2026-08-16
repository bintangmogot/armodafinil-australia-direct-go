<?php if (!defined('ABSPATH')) exit;
/** MODULE: content-topbar.php — matches <TopBar /> */
$left   = get_field('topbar_left', 'option')   ?: 'Premium cognitive support · Australia-wide dispatch';
$center = get_field('topbar_center', 'option') ?: '6–12 business days · discreet packaging';
$right  = get_field('topbar_right', 'option')  ?: 'Support';
$right_link = get_field('topbar_right_link', 'option') ?: '#support';
?>
<div class="w-full bg-ink-900 text-white text-xs">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between gap-4">
        <p class="hidden sm:block opacity-90"><?php echo armodil_esc($left); ?></p>
        <p class="opacity-90 hidden md:block"><?php echo armodil_esc($center); ?></p>
        <a href="<?php echo esc_url($right_link); ?>" class="inline-flex items-center gap-1.5 text-brand-300 hover:text-brand-200">
            <?php echo armodil_icon('MessageCircle','w-3.5 h-3.5'); ?> <?php echo armodil_esc($right); ?>
        </a>
    </div>
</div>
