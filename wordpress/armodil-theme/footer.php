<footer class="mt-24 bg-ink-900 text-ink-100">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
    <div class="col-span-2 lg:col-span-2">
      <div class="font-serif text-2xl font-semibold text-white"><?php echo esc_html(get_field('site_name', 'option') ?: 'Armodafinil Australia Direct'); ?> <span class="text-brand-300"><?php echo esc_html(get_field('site_brandline', 'option') ?: 'Direct'); ?></span></div>
      <p class="mt-3 text-sm text-ink-100/70 max-w-sm"><?php echo esc_html(get_field('footer_description', 'option') ?: 'Steady focus, cleaner clarity, and dependable dispatch — built for Australian customers who take their day seriously.'); ?></p>
      <div class="mt-5 flex items-center gap-3 text-brand-300">
        <?php if (have_rows('social_links', 'option')): while(have_rows('social_links', 'option')): the_row(); ?>
          <a href="<?php echo esc_url(get_sub_field('url')); ?>" aria-label="<?php echo esc_attr(get_sub_field('label')); ?>" class="w-9 h-9 grid place-items-center rounded-full bg-white/5 hover:bg-white/10">
            <i data-lucide="<?php echo esc_attr(get_sub_field('icon')); ?>" class="w-4 h-4"></i>
          </a>
        <?php endwhile; else: ?>
          <a href="#" aria-label="Facebook" class="w-9 h-9 grid place-items-center rounded-full bg-white/5 hover:bg-white/10"><i data-lucide="facebook" class="w-4 h-4"></i></a>
          <a href="#" aria-label="Instagram" class="w-9 h-9 grid place-items-center rounded-full bg-white/5 hover:bg-white/10"><i data-lucide="instagram" class="w-4 h-4"></i></a>
          <a href="#" aria-label="Twitter" class="w-9 h-9 grid place-items-center rounded-full bg-white/5 hover:bg-white/10"><i data-lucide="twitter" class="w-4 h-4"></i></a>
        <?php endif; ?>
      </div>
    </div>

    <div>
      <div class="text-white font-semibold mb-3 text-sm uppercase tracking-widest">Shop</div>
      <?php 
      if (has_nav_menu('footer_shop')) {
          wp_nav_menu(array(
              'theme_location' => 'footer_shop',
              'container' => false,
              'menu_class' => 'space-y-2 text-sm text-ink-100/80',
              'fallback_cb' => false,
              'items_wrap' => '<ul id="%1$s" class="%2$s">%3$s</ul>'
          )); 
      } else {
      ?>
          <ul class="space-y-2 text-sm text-ink-100/80">
            <li><a href="/product" class="hover:text-brand-300">All products</a></li>
            <li><a href="/categories" class="hover:text-brand-300">Categories</a></li>
            <li><a href="/conditions" class="hover:text-brand-300">Condition guides</a></li>
            <li><a href="/blog" class="hover:text-brand-300">Blog</a></li>
          </ul>
      <?php } ?>
    </div>
    <div>
      <div class="text-white font-semibold mb-3 text-sm uppercase tracking-widest">Help</div>
      <?php 
      if (has_nav_menu('footer_help')) {
          wp_nav_menu(array(
              'theme_location' => 'footer_help',
              'container' => false,
              'menu_class' => 'space-y-2 text-sm text-ink-100/80',
              'fallback_cb' => false,
              'items_wrap' => '<ul id="%1$s" class="%2$s">%3$s</ul>'
          )); 
      } else {
      ?>
          <ul class="space-y-2 text-sm text-ink-100/80">
            <li><a href="/how-to-order" class="hover:text-brand-300">How to order</a></li>
            <li><a href="/faq" class="hover:text-brand-300">FAQ</a></li>
            <li><a href="/contact" class="hover:text-brand-300">Contact</a></li>
            <li><a href="/shipping-policy" class="hover:text-brand-300">Shipping policy</a></li>
            <li><a href="/return-policy" class="hover:text-brand-300">Returns & refunds</a></li>
          </ul>
      <?php } ?>
    </div>
    <div>
      <div class="text-white font-semibold mb-3 text-sm uppercase tracking-widest">Company</div>
      <?php 
      if (has_nav_menu('footer_company')) {
          wp_nav_menu(array(
              'theme_location' => 'footer_company',
              'container' => false,
              'menu_class' => 'space-y-2 text-sm text-ink-100/80',
              'fallback_cb' => false,
              'items_wrap' => '<ul id="%1$s" class="%2$s">%3$s</ul>'
          )); 
      } else {
      ?>
          <ul class="space-y-2 text-sm text-ink-100/80">
            <li><a href="/about" class="hover:text-brand-300">About</a></li>
            <li><a href="/privacy-policy" class="hover:text-brand-300">Privacy policy</a></li>
            <li><a href="/terms" class="hover:text-brand-300">Terms of service</a></li>
            <li><a href="/disclaimer" class="hover:text-brand-300">Disclaimer</a></li>
            <li><a href="<?php echo esc_url(get_field('whatsapp_url', 'option') ?: '#'); ?>" class="hover:text-brand-300">WhatsApp support</a></li>
          </ul>
      <?php } ?>
    </div>
  </div>

  <div class="border-t border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row gap-3 items-start md:items-center justify-between text-xs text-ink-100/60">
      <div class="flex flex-wrap items-center gap-4">
        <span class="inline-flex items-center gap-1.5"><i data-lucide="shield" class="w-3.5 h-3.5 text-brand-300"></i> SSL secured</span>
        <span class="inline-flex items-center gap-1.5"><i data-lucide="truck" class="w-3.5 h-3.5 text-brand-300"></i> AU-wide dispatch</span>
        <span class="inline-flex items-center gap-1.5"><i data-lucide="credit-card" class="w-3.5 h-3.5 text-brand-300"></i> Encrypted checkout</span>
        <span class="inline-flex items-center gap-1.5"><i data-lucide="map-pin" class="w-3.5 h-3.5 text-brand-300"></i> Sydney, AU</span>
        <span class="inline-flex items-center gap-1.5"><i data-lucide="mail" class="w-3.5 h-3.5 text-brand-300"></i> <?php echo esc_html(get_field('support_email', 'option') ?: 'support@armodafinilaustralia.com'); ?></span>
        <span class="inline-flex items-center gap-1.5"><i data-lucide="phone" class="w-3.5 h-3.5 text-brand-300"></i> <?php echo esc_html(get_field('support_phone', 'option') ?: '+61 4 8999 5839'); ?></span>
      </div>
      <div>&copy; <?php echo date('Y'); ?> <?php echo esc_html(get_field('site_name', 'option') ?: 'Armodafinil Australia Direct'); ?>. Information only &mdash; not medical advice.</div>
    </div>
  </div>
</footer>
<?php wp_footer(); ?>
<script>
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
</script>
</body>
</html>
