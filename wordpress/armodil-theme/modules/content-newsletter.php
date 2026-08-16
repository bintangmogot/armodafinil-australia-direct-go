<?php if (!defined('ABSPATH')) exit;
/** MODULE: content-newsletter.php — matches <NewsletterCTA /> */
$heading = get_sub_field('heading') ?: 'Stay in the loop';
$sub     = get_sub_field('subheading') ?: 'Focus tips, dosage explainers, and exclusive Australian-only offers — straight to your inbox. Unsubscribe anytime.';
$btn     = get_sub_field('button_label') ?: 'Subscribe';
?>
<section class="py-16 md:py-20">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="rounded-3xl bg-ink-900 text-white p-8 md:p-12 relative overflow-hidden">
            <div class="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-brand-600/30 blur-3xl"></div>
            <div class="relative">
                <h2 class="font-serif text-3xl md:text-4xl font-semibold"><?php echo esc_html($heading); ?></h2>
                <p class="mt-2 text-ink-100/70 max-w-xl"><?php echo esc_html($sub); ?></p>
                <form action="<?php echo esc_url(admin_url('admin-post.php')); ?>" method="post" class="mt-6 flex flex-col sm:flex-row gap-3 max-w-lg">
                    <input type="hidden" name="action" value="armodil_subscribe">
                    <?php wp_nonce_field('armodil_subscribe','armodil_nonce'); ?>
                    <input type="email" required name="email" placeholder="your@email.com" class="flex-1 h-12 rounded-full bg-white/10 border border-white/20 px-5 text-white placeholder:text-white/50 outline-none focus:border-brand-300">
                    <button class="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-brand-600 hover:bg-brand-700 font-semibold btn-primary"><?php echo esc_html($btn); ?> <?php echo armodil_icon('Send','w-4 h-4'); ?></button>
                </form>
                <p class="mt-4 text-xs text-white/50">Protected by reCAPTCHA. No spam, ever.</p>
            </div>
        </div>
    </div>
</section>
