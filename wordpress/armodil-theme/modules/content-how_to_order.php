<?php
$headline = get_sub_field('headline') ?: 'How it works';
$description = get_sub_field('description') ?: 'A gentle, predictable curve across your day.';
?>
<section class="py-16 md:py-20 bg-stone-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl md:text-4xl font-serif font-semibold text-ink-900 text-center"><?php echo esc_html($headline); ?></h2>
    <p class="mt-2 text-center text-ink-500"><?php echo esc_html($description); ?></p>
    <div class="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      <?php if (have_rows('steps')): while (have_rows('steps')): the_row(); 
          $step = get_sub_field('step_number');
          $time = get_sub_field('time');
          $title = get_sub_field('title');
          $desc = get_sub_field('description');
      ?>
      <div class="bg-white border border-ink-200 rounded-2xl p-6 hover-lift relative">
        <div class="w-10 h-10 rounded-full bg-brand-600 text-white grid place-items-center font-semibold"><?php echo esc_html($step); ?></div>
        <div class="mt-4 text-[11px] uppercase tracking-widest font-semibold text-ink-500"><?php echo esc_html($time); ?></div>
        <h3 class="mt-1 font-serif text-lg font-semibold text-ink-900"><?php echo esc_html($title); ?></h3>
        <p class="mt-2 text-sm text-ink-700 leading-relaxed"><?php echo esc_html($desc); ?></p>
      </div>
      <?php endwhile; endif; ?>
    </div>
  </div>
</section>
