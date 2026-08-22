<?php
$headline = get_sub_field('headline') ?: 'Popular right now';
$description = get_sub_field('description') ?: 'Add to cart, or open a product for full details and dosing notes.';
$view_all_link = get_sub_field('view_all_link') ?: '/product';
?>
<section class="py-16 md:py-20 bg-stone-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-end justify-between gap-4 flex-wrap">
      <div>
        <h2 class="text-3xl md:text-4xl font-serif font-semibold text-ink-900"><?php echo esc_html($headline); ?></h2>
        <p class="mt-2 text-ink-500"><?php echo esc_html($description); ?></p>
      </div>
      <a href="<?php echo esc_url($view_all_link); ?>" class="inline-flex items-center gap-1.5 text-brand-700 font-semibold hover:gap-2 transition-all">
        View all <i data-lucide="arrow-right" class="w-4 h-4"></i>
      </a>
    </div>
    <div class="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      <?php 
      $featured_products = get_sub_field('products');
      if ($featured_products): 
          global $post;
          foreach ($featured_products as $post): 
              setup_postdata($post);
              get_template_part('template-parts/product', 'card');
          endforeach;
          wp_reset_postdata();
      else:
          $products_query = new WP_Query(array('post_type' => 'product', 'posts_per_page' => 4));
          if ($products_query->have_posts()):
              while ($products_query->have_posts()): $products_query->the_post();
                  get_template_part('template-parts/product', 'card');
              endwhile;
              wp_reset_postdata();
          endif;
      endif; 
      ?>
    </div>
  </div>
</section>
