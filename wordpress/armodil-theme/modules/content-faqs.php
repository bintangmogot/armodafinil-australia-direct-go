<?php
$headline = get_sub_field('headline') ?: 'FAQ';
$description = get_sub_field('description') ?: 'Common questions from Australian customers.';
?>
<section class="py-16 md:py-20">
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl md:text-4xl font-serif font-semibold text-ink-900 text-center"><?php echo esc_html($headline); ?></h2>
    <p class="mt-2 text-center text-ink-500"><?php echo esc_html($description); ?></p>
    <div class="mt-10 space-y-3 faq-accordion">
      <?php if (have_rows('faqs')): while (have_rows('faqs')): the_row(); 
          $q = get_sub_field('question');
          $a = get_sub_field('answer');
      ?>
      <div class="faq-item border border-ink-200 rounded-xl bg-white overflow-hidden">
        <button type="button" class="faq-button w-full flex items-center justify-between gap-4 px-5 py-4 text-left" aria-expanded="false">
          <span class="font-medium text-ink-900"><?php echo esc_html($q); ?></span>
          <i data-lucide="chevron-down" class="faq-icon w-4 h-4 text-ink-500 transition-transform"></i>
        </button>
        <div class="faq-content px-5 pb-5 text-sm text-ink-700 leading-relaxed hidden">
          <?php echo wp_kses_post($a); ?>
        </div>
      </div>
      <?php endwhile; endif; ?>
    </div>
  </div>
</section>
<script>
document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.faq-button');
    buttons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var expanded = this.getAttribute('aria-expanded') === 'true' || false;
            buttons.forEach(function(b) {
                b.setAttribute('aria-expanded', 'false');
                b.nextElementSibling.classList.add('hidden');
                var icon = b.querySelector('.faq-icon');
                if(icon) { icon.classList.remove('rotate-180', 'text-brand-600'); }
            });
            if (!expanded) {
                this.setAttribute('aria-expanded', 'true');
                this.nextElementSibling.classList.remove('hidden');
                var icon = this.querySelector('.faq-icon');
                if(icon) { icon.classList.add('rotate-180', 'text-brand-600'); }
            }
        });
    });
});
</script>
