<?php
$headline = get_sub_field('headline') ?: 'What Australians say';
$description = get_sub_field('description') ?: 'A handful of recent notes from verified buyers.';
?>
<section class="py-16 md:py-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl md:text-4xl font-serif font-semibold text-ink-900 text-center"><?php echo esc_html($headline); ?></h2>
    <p class="mt-2 text-center text-ink-500"><?php echo esc_html($description); ?></p>
    <div class="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      <?php if (have_rows('testimonials')): while (have_rows('testimonials')): the_row(); 
          $title = get_sub_field('title');
          $body = get_sub_field('body');
          $name = get_sub_field('name');
          $city = get_sub_field('city');
      ?>
      <div class="bg-white border border-ink-200 rounded-2xl p-6 hover-lift relative">
        <i data-lucide="quote" class="w-6 h-6 text-brand-300 mb-3"></i>
        <h3 class="font-serif text-lg font-semibold text-ink-900"><?php echo esc_html($title); ?></h3>
        <p class="mt-2 text-sm text-ink-700 leading-relaxed"><?php echo esc_html($body); ?></p>
        <div class="mt-4 pt-4 border-t border-ink-200 text-xs text-ink-500">&mdash; <?php echo esc_html($name); ?>, <?php echo esc_html($city); ?></div>
      </div>
      <?php endwhile; endif; ?>
    </div>
    <div class="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-ink-500">
      <span class="inline-flex items-center gap-1.5"><i data-lucide="user-check" class="w-3.5 h-3.5 text-brand-600"></i> Verified buyers only</span>
      <span class="inline-flex items-center gap-1.5"><i data-lucide="shield-check" class="w-3.5 h-3.5 text-brand-600"></i> Secure review system</span>
      <span class="inline-flex items-center gap-1.5"><i data-lucide="clock" class="w-3.5 h-3.5 text-brand-600"></i> Updated regularly</span>
    </div>
  </div>
</section>
