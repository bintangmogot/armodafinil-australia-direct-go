<?php
/**
 * Single Product template (rewritten to match React prototype)
 */
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

get_header(); 
while ( have_posts() ) :
    the_post();
    global $product;

    $product_name = $product->get_name();
    $product_image = wp_get_attachment_image_url( $product->get_image_id(), 'full' );
    if ( ! $product_image ) {
        $product_image = wc_placeholder_img_src();
    }
    
    $rating = $product->get_average_rating();
    $review_count = $product->get_review_count();
    $price = $product->get_price();
    // Dummy variants for visual matching if not a variable product
    $variants = [];
    if ( $product->is_type( 'variable' ) ) {
        $available_variations = $product->get_available_variations();
        foreach ( $available_variations as $var ) {
            $var_obj = wc_get_product( $var['variation_id'] );
            $variants[] = [
                'qty' => $var_obj->get_attribute('pa_tablets') ?: '30',
                'price' => $var_obj->get_price()
            ];
        }
    } else {
        $variants = [
            ['qty' => '30', 'price' => 79],
            ['qty' => '60', 'price' => 129],
            ['qty' => '90', 'price' => 169],
            ['qty' => '120', 'price' => 199],
        ];
    }
    $selected_variant = $variants[0];
    $price_per_tablet = number_format((float)$selected_variant['price'] / (float)preg_replace('/[^0-9.]/', '', $selected_variant['qty'] ?: 1), 2);
?>

<div>
  <!-- Breadcrumb -->
  <div class="border-b border-ink-200 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center text-xs text-ink-500 gap-2">
      <a href="<?php echo home_url(); ?>" class="hover:text-brand-700">Home</a>
      <span>/</span>
      <a href="<?php echo get_permalink( wc_get_page_id( 'shop' ) ); ?>" class="hover:text-brand-700">Products</a>
      <span>/</span>
      <span class="text-ink-900 truncate"><?php echo esc_html($product_name); ?></span>
    </div>
  </div>

  <div class="section-wash">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <a href="<?php echo get_permalink( wc_get_page_id( 'shop' ) ); ?>" class="inline-flex items-center gap-1.5 text-sm text-ink-700 hover:text-brand-700">
        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
        All products
      </a>

      <div class="mt-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <!-- Gallery -->
        <div class="bg-white rounded-2xl border border-ink-200 overflow-hidden shadow-soft lg:sticky lg:top-24">
          <div class="aspect-square bg-brand-50">
            <img src="<?php echo esc_url($product_image); ?>" alt="<?php echo esc_attr($product_name); ?>" class="w-full h-full object-cover" />
          </div>
        </div>

        <!-- Info -->
        <div>
          <div class="flex items-center gap-2">
            <span class="text-xs font-semibold text-brand-700 bg-brand-100 rounded-full px-2.5 py-1">Premium</span>
            <span class="inline-flex items-center gap-1 text-xs font-semibold text-brand-700 bg-brand-50 rounded-full px-2.5 py-1">
                <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/></svg>
                In stock
            </span>
          </div>
          <h1 class="mt-3 font-serif text-3xl md:text-4xl font-semibold text-ink-900 leading-tight"><?php echo esc_html($product_name); ?></h1>
          <div class="mt-3 flex items-center gap-2">
            <?php for($i=0; $i<5; $i++): ?>
              <svg class="w-4 h-4 <?php echo $i < floor($rating ?: 5) ? 'fill-amber-500 text-amber-500' : 'text-ink-200'; ?>" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <?php endfor; ?>
            <span class="text-sm text-ink-500"><?php echo number_format((float)($rating ?: 5), 1); ?> · <a href="#reviews" class="hover:text-brand-700 underline decoration-dotted">(<?php echo esc_html($review_count ?: 42); ?> reviews)</a></span>
          </div>

          <div class="mt-5 flex items-baseline gap-3 flex-wrap">
            <span class="text-4xl font-semibold text-ink-900"><?php echo get_woocommerce_currency_symbol(); ?><?php echo number_format((float)($selected_variant['price'] ?: $price), 2); ?></span>
            <span class="text-sm text-ink-500"><?php echo get_woocommerce_currency_symbol(); ?><?php echo esc_html($price_per_tablet); ?> / tablet</span>
          </div>

          <!-- Promo strip -->
          <div class="mt-5 p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-center gap-3 flex-wrap">
            <svg class="w-5 h-5 text-amber-600 shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            <p class="text-sm text-amber-900 flex-1 min-w-[200px]">Free shipping + 10% off on orders above <b>$299</b>. Use code:</p>
            <button class="inline-flex items-center gap-2 h-9 px-3 rounded-lg border border-dashed border-amber-500 bg-white text-amber-800 font-mono font-semibold text-sm hover:bg-amber-100" onclick="navigator.clipboard.writeText('ARMD10'); alert('Copied!');">
                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg> ARMD10
            </button>
          </div>

          <!-- Variants -->
          <div class="mt-6">
            <div class="flex items-center justify-between text-sm">
              <span class="font-semibold text-ink-900">Tablets</span>
              <span class="text-ink-500">Prices vary</span>
            </div>
            <div class="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
              <?php foreach ($variants as $i => $v): ?>
                <button class="p-3 rounded-xl border text-left transition-colors <?php echo $i === 0 ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-ink-900 border-ink-200 hover:border-brand-500'; ?>">
                  <div class="text-lg font-semibold"><?php echo esc_html($v['qty']); ?></div>
                  <div class="text-xs <?php echo $i === 0 ? 'text-white/80' : 'text-ink-500'; ?>">$<?php echo number_format((float)$v['price'], 2); ?></div>
                </button>
              <?php endforeach; ?>
            </div>
          </div>

          <!-- Buy row -->
          <form class="cart mt-6 flex flex-wrap items-center gap-3" action="<?php echo esc_url( apply_filters( 'woocommerce_add_to_cart_form_action', $product->get_permalink() ) ); ?>" method="post" enctype='multipart/form-data'>
            <div class="inline-flex items-center border border-ink-200 rounded-full overflow-hidden bg-white">
              <button type="button" onclick="var q=document.querySelector('.qty'); q.value=Math.max(1,parseInt(q.value)-1);" class="w-10 h-11 grid place-items-center hover:bg-ink-100">
                  <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
              </button>
              <input type="number" name="quantity" value="1" min="1" class="qty w-10 text-center text-sm font-semibold border-0 outline-none p-0 bg-transparent" />
              <button type="button" onclick="var q=document.querySelector('.qty'); q.value=parseInt(q.value)+1;" class="w-10 h-11 grid place-items-center hover:bg-ink-100">
                  <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
              </button>
            </div>
            <button type="submit" name="add-to-cart" value="<?php echo esc_attr( $product->get_id() ); ?>" class="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold btn-primary">
              <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
              Add to Cart
            </button>
            <a href="<?php echo wc_get_checkout_url(); ?>" class="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-ink-900 hover:bg-ink-800 text-white font-semibold btn-primary">
                Buy now 
                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </form>

          <!-- Trust row -->
          <div class="mt-6 grid grid-cols-3 gap-3">
            <div class="p-3 rounded-lg bg-white border border-ink-200 flex items-center gap-2 text-xs font-medium text-ink-700">
                <svg class="w-4 h-4 text-brand-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 17h4V5H2v12h3"/><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5"/><path d="M14 17h1"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>
                AU-wide dispatch
            </div>
            <div class="p-3 rounded-lg bg-white border border-ink-200 flex items-center gap-2 text-xs font-medium text-ink-700">
                <svg class="w-4 h-4 text-brand-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                Encrypted checkout
            </div>
            <div class="p-3 rounded-lg bg-white border border-ink-200 flex items-center gap-2 text-xs font-medium text-ink-700">
                <svg class="w-4 h-4 text-brand-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
                Quality verified
            </div>
          </div>

          <!-- Specs -->
          <div class="mt-6 border border-ink-200 rounded-2xl bg-white overflow-hidden">
            <details class="group" open>
              <summary class="w-full flex items-center justify-between px-5 py-3 cursor-pointer list-none">
                <span class="font-semibold text-ink-900 inline-flex items-center gap-2">
                    <svg class="w-4 h-4 text-brand-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/></svg>
                    Product specs <span class="text-ink-500 font-normal">(4)</span>
                </span>
                <svg class="w-4 h-4 text-ink-500 transition-transform group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </summary>
              <dl class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 px-5 pb-5 text-sm border-t border-ink-200 pt-4">
                <div class="flex justify-between gap-4"><dt class="text-ink-500 capitalize">Active Ingredient</dt><dd class="text-ink-900 font-medium text-right">Armodafinil</dd></div>
                <div class="flex justify-between gap-4"><dt class="text-ink-500 capitalize">Strength</dt><dd class="text-ink-900 font-medium text-right">150mg</dd></div>
                <div class="flex justify-between gap-4"><dt class="text-ink-500 capitalize">Form</dt><dd class="text-ink-900 font-medium text-right">Tablet</dd></div>
                <div class="flex justify-between gap-4"><dt class="text-ink-500 capitalize">Manufacturer</dt><dd class="text-ink-900 font-medium text-right">Sun Pharma</dd></div>
              </dl>
            </details>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Tabs -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="flex gap-1 border-b border-ink-200 overflow-x-auto">
      <button class="shrink-0 px-4 py-3 text-sm font-semibold border-b-2 -mb-px transition-colors text-brand-700 border-brand-600">Description</button>
    </div>
    <div class="py-8 max-w-3xl">
      <div class="space-y-4 text-ink-700 leading-relaxed">
        <h2 class="font-serif text-2xl font-semibold text-ink-900">About <?php echo esc_html($product_name); ?></h2>
        <?php the_content(); ?>
      </div>
    </div>
  </div>

</div>
<?php 
endwhile;
get_footer(); 
?>
