<?php if (!defined('ABSPATH')) exit;
/** MODULE: content-whatsapp-fab.php — matches <WhatsAppFab /> */
$url = get_field('whatsapp_url', 'option') ?: 'https://wa.me/61489995839';
?>
<a href="<?php echo esc_url($url); ?>" target="_blank" rel="noopener" aria-label="Chat on WhatsApp"
   class="fixed bottom-5 right-5 z-50 w-14 h-14 grid place-items-center rounded-full bg-brand-600 text-white shadow-card hover:bg-brand-700 btn-primary">
    <?php echo armodil_icon('MessageCircle','w-6 h-6'); ?>
    <span class="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-amber-500 border-2 border-white"></span>
</a>
