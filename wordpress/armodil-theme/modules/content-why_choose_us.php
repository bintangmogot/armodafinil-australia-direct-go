<?php
$headline = get_sub_field('headline') ?: 'Why high-achievers choose us';
?>
<section class="py-16 md:py-20 bg-stone-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl md:text-4xl font-serif font-semibold text-ink-900 text-center"><?php echo esc_html($headline); ?></h2>
    <div class="mt-10 grid md:grid-cols-3 gap-5">
      <?php if (have_rows('reasons')): while (have_rows('reasons')): the_row(); 
          $icon = get_sub_field('icon') ?: 'shield-check';
          $title = get_sub_field('title');
          $desc = get_sub_field('description');
          $tag = get_sub_field('tag');
      ?>
      <div class="bg-white border border-ink-200 rounded-2xl p-7 hover-lift text-center">
        <div class="mx-auto w-14 h-14 rounded-2xl bg-brand-100 text-brand-700 grid place-items-center">
          <i data-lucide="<?php echo esc_attr($icon); ?>" class="w-6 h-6"></i>
        </div>
        <h3 class="mt-5 font-serif text-xl font-semibold text-ink-900"><?php echo esc_html($title); ?></h3>
        <p class="mt-2 text-sm text-ink-700 leading-relaxed"><?php echo esc_html($desc); ?></p>
        <?php if ($tag): ?>
        <span class="mt-4 inline-block text-[11px] uppercase tracking-widest font-semibold text-brand-700 bg-brand-100 rounded-full px-3 py-1"><?php echo esc_html($tag); ?></span>
        <?php endif; ?>
      </div>
      <?php endwhile; endif; ?>
    </div>
  </div>
</section>