<?php
$headline = get_sub_field('headline') ?: 'Built for your goals';
$description = get_sub_field('description') ?: 'Choose the profile that fits your day — we’ll guide the rest.';
?>
<section class="py-16 md:py-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl md:text-4xl font-serif font-semibold text-ink-900 text-center"><?php echo esc_html($headline); ?></h2>
    <p class="mt-2 text-center text-ink-500"><?php echo esc_html($description); ?></p>
    <div class="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      <?php if (have_rows('audiences')): while (have_rows('audiences')): the_row(); 
          $icon = get_sub_field('icon') ?: 'user';
          $title = get_sub_field('title');
          $desc = get_sub_field('description');
          $badge = get_sub_field('badge');
          $cta = get_sub_field('cta_text') ?: 'See recommendation';
          $link = get_sub_field('link') ?: '/product';
      ?>
      <div class="group bg-white border border-ink-200 rounded-2xl p-6 hover-lift flex flex-col">
        <div class="w-11 h-11 rounded-xl bg-brand-100 text-brand-700 grid place-items-center mb-4">
          <i data-lucide="<?php echo esc_attr($icon); ?>" class="w-5 h-5"></i>
        </div>
        <h3 class="font-serif text-lg font-semibold text-ink-900"><?php echo esc_html($title); ?></h3>
        <p class="mt-2 text-sm text-ink-700 leading-relaxed"><?php echo esc_html($desc); ?></p>
        <?php if ($badge): ?>
        <div class="mt-4 text-xs font-semibold text-brand-700 bg-brand-50 rounded-full px-3 py-1.5 self-start"><?php echo esc_html($badge); ?></div>
        <?php endif; ?>
        <a href="<?php echo esc_url($link); ?>" class="mt-5 text-sm font-semibold text-ink-900 inline-flex items-center gap-1.5 group-hover:text-brand-700">
          <?php echo esc_html($cta); ?> <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </a>
      </div>
      <?php endwhile; endif; ?>
    </div>
  </div>
</section>
