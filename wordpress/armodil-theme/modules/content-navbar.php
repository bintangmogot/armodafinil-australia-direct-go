<?php if (!defined('ABSPATH')) exit;
/** MODULE: content-navbar.php — matches <Navbar /> */
$brand_name   = get_field('brand_name', 'option')   ?: 'Armodil';
$brand_region = get_field('brand_region', 'option') ?: 'Australia';
$logo         = get_field('brand_logo', 'option');
?>
<header class="sticky top-0 z-40 bg-white/85 backdrop-blur border-b border-ink-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
        <a href="<?php echo esc_url(home_url('/')); ?>" class="flex items-center gap-2 shrink-0">
            <?php if ($logo && !empty($logo['url'])) : ?>
                <img src="<?php echo esc_url($logo['url']); ?>" alt="<?php echo esc_attr($logo['alt'] ?: $brand_name); ?>" class="w-9 h-9 rounded-xl">
            <?php else : ?>
                <span class="w-9 h-9 rounded-xl bg-brand-600 grid place-items-center text-white shadow-soft"><?php echo armodil_icon('Sparkles','w-4 h-4'); ?></span>
            <?php endif; ?>
            <span class="leading-tight">
                <span class="block font-serif text-lg font-semibold text-ink-900"><?php echo armodil_esc($brand_name); ?></span>
                <span class="block text-[10px] uppercase tracking-[0.18em] text-ink-500"><?php echo armodil_esc($brand_region); ?></span>
            </span>
        </a>

        <nav class="hidden lg:flex items-center gap-1 ml-4">
            <?php
            if (has_nav_menu('primary')) {
                wp_nav_menu([
                    'theme_location' => 'primary',
                    'container' => false,
                    'menu_class' => 'flex items-center gap-1',
                    'link_before' => '',
                    'link_after'  => '',
                    'fallback_cb' => false,
                ]);
            } else {
                foreach ([['Products','/product'],['Categories','/categories'],['Conditions','/conditions'],['Blog','/blog'],['FAQ','/faq']] as $n) {
                    printf('<a href="%s" class="px-3 py-2 rounded-md text-sm font-medium text-ink-700 hover:text-brand-700 hover:bg-brand-50/60">%s</a>', esc_url(home_url($n[1])), esc_html($n[0]));
                }
            }
            ?>
        </nav>

        <div class="flex-1"></div>

        <form role="search" method="get" action="<?php echo esc_url(home_url('/')); ?>" class="hidden md:flex items-center bg-ink-100/70 rounded-full px-3 h-10 w-72">
            <?php echo armodil_icon('Search','w-4 h-4 text-ink-500'); ?>
            <input type="search" name="s" placeholder="Search products, strengths, brands..." class="bg-transparent outline-none border-0 text-sm flex-1 mx-2 placeholder:text-ink-500">
            <span class="text-[10px] font-medium text-ink-500 border border-ink-200 rounded px-1.5 py-0.5">Ctrl K</span>
        </form>

        <a href="<?php echo esc_url(home_url('/cart')); ?>" class="relative w-10 h-10 grid place-items-center rounded-full hover:bg-ink-100" aria-label="Cart"><?php echo armodil_icon('ShoppingCart','w-5 h-5 text-ink-700'); ?></a>
        <a href="<?php echo esc_url(home_url('/account')); ?>" class="w-10 h-10 grid place-items-center rounded-full hover:bg-ink-100" aria-label="Account"><?php echo armodil_icon('User2','w-5 h-5 text-ink-700'); ?></a>
        <a href="<?php echo esc_url(home_url('/product')); ?>" class="hidden md:inline-flex items-center h-10 px-4 rounded-full bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 btn-primary">Shop</a>
    </div>
</header>
