<?php
/**
 * Shop Archive template (rewritten to match React prototype Products.jsx)
 */
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

get_header(); ?>

<div class="section-wash">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
    <div class="text-center">
      <span class="text-xs uppercase tracking-widest text-brand-700 font-semibold bg-brand-100 rounded-full px-3 py-1.5">Full catalogue</span>
      <h1 class="mt-4 font-serif text-4xl md:text-5xl font-semibold text-ink-900">Medicine catalog</h1>
      <p class="mt-3 text-ink-700 max-w-2xl mx-auto">Compare prescription and OTC medicines by category, check ratings and prices in AUD, and add to cart in a few taps — shipped discreetly across Australia.</p>
    </div>

    <!-- For simplicity in WP, we rely on standard WooCommerce loops without JS filtering here -->
    <div class="mt-10 flex flex-col md:flex-row md:items-center gap-4 justify-between">
      <div class="hidden md:flex flex-wrap gap-2">
        <a href="<?php echo get_permalink( wc_get_page_id( 'shop' ) ); ?>" class="text-sm font-medium px-4 h-9 rounded-full border transition-colors inline-flex items-center <?php echo is_shop() ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-ink-700 border-ink-200 hover:border-brand-600'; ?>">All categories</a>
        <?php
        $categories = get_terms( 'product_cat', ['hide_empty' => true] );
        foreach ( $categories as $cat ) {
            $is_current = is_product_category($cat->term_id);
            echo '<a href="' . esc_url( get_term_link( $cat ) ) . '" class="text-sm font-medium px-4 h-9 rounded-full border transition-colors inline-flex items-center ' . ($is_current ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-ink-700 border-ink-200 hover:border-brand-600') . '">' . esc_html( $cat->name ) . '</a>';
        }
        ?>
      </div>
      
      <div class="flex items-center gap-3">
        <?php
        // Standard ordering form (visual representation)
        // Normally WC outputs a form here, but we will style it statically for the prototype feel
        ?>
        <form class="woocommerce-ordering" method="get">
            <select name="orderby" class="h-10 rounded-full border border-ink-200 bg-white px-3 text-sm" aria-label="<?php esc_attr_e( 'Shop order', 'woocommerce' ); ?>" onchange="this.form.submit()">
                <?php foreach ( apply_filters( 'woocommerce_catalog_orderby', [
                    'menu_order' => 'Popularity',
                    'rating'     => 'Average rating',
                    'price'      => 'Price: low to high',
                    'price-desc' => 'Price: high to low',
                    'title'      => 'Name: A to Z'
                ] ) as $id => $name ) : ?>
                    <option value="<?php echo esc_attr( $id ); ?>" <?php selected( isset($_GET['orderby']) ? $_GET['orderby'] : 'menu_order', $id ); ?>><?php echo esc_html( $name ); ?></option>
                <?php endforeach; ?>
            </select>
            <input type="hidden" name="paged" value="1" />
        </form>
      </div>
    </div>

    <?php if ( woocommerce_product_loop() ) : ?>
      <p class="mt-6 text-xs text-ink-500">
        <?php
        $total = wc_get_loop_prop( 'total' );
        printf( _n( '%d product', '%d products', $total, 'woocommerce' ), $total );
        ?>
      </p>

      <div class="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <?php
        woocommerce_product_loop_start( false );
        while ( have_posts() ) : the_post(); 
            global $product;
            $rating = $product->get_average_rating();
            $image = wp_get_attachment_image_url( $product->get_image_id(), 'medium' );
            if (!$image) $image = wc_placeholder_img_src();
            ?>
            <a href="<?php the_permalink(); ?>" class="group bg-white border border-ink-200 rounded-2xl p-4 transition-all hover:shadow-soft hover:border-brand-300 flex flex-col relative h-full">
              <div class="absolute top-4 left-4 z-10">
                <span class="text-[10px] uppercase tracking-wider font-semibold text-brand-700 bg-brand-100/90 backdrop-blur-sm rounded-full px-2 py-1">Best seller</span>
              </div>
              <div class="aspect-square rounded-xl overflow-hidden bg-brand-50 mb-4 p-4 flex items-center justify-center mix-blend-multiply">
                <img src="<?php echo esc_url($image); ?>" alt="<?php the_title_attribute(); ?>" class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div class="flex-1 flex flex-col">
                <h3 class="font-serif text-lg font-semibold text-ink-900 leading-tight group-hover:text-brand-700 transition-colors line-clamp-2"><?php the_title(); ?></h3>
                <div class="mt-2 flex items-center gap-1.5 text-xs text-ink-500">
                  <div class="flex">
                    <?php for($i=0; $i<5; $i++): ?>
                      <svg class="w-3.5 h-3.5 <?php echo $i < floor($rating ?: 5) ? 'fill-amber-500 text-amber-500' : 'text-ink-200'; ?>" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <?php endfor; ?>
                  </div>
                  <?php echo number_format((float)($rating ?: 5), 1); ?>
                </div>
                <div class="mt-auto pt-4 flex items-end justify-between gap-2">
                  <div>
                    <div class="text-[10px] text-ink-500 uppercase font-semibold">From</div>
                    <div class="font-semibold text-ink-900 leading-none mt-1">
                      <?php echo $product->get_price_html(); ?>
                    </div>
                  </div>
                  <div class="w-8 h-8 rounded-full bg-brand-50 text-brand-600 grid place-items-center group-hover:bg-brand-600 group-hover:text-white transition-colors shrink-0">
                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </div>
                </div>
              </div>
            </a>
            <?php
        endwhile;
        woocommerce_product_loop_end( false );
        ?>
      </div>
      
      <div class="mt-12 flex justify-center">
        <?php
        echo paginate_links( [
            'base'      => esc_url_raw( str_replace( 999999999, '%#%', remove_query_arg( 'add-to-cart', get_pagenum_link( 999999999, false ) ) ) ),
            'format'    => '',
            'add_args'  => false,
            'current'   => max( 1, get_query_var( 'paged' ) ),
            'total'     => wc_get_loop_prop( 'total_pages' ),
            'prev_text' => '&larr;',
            'next_text' => '&rarr;',
            'type'      => 'list',
            'end_size'  => 3,
            'mid_size'  => 3,
        ] );
        ?>
      </div>

    <?php else : ?>
      <p class="text-center text-ink-500 mt-16">No products match your filters.</p>
    <?php endif; ?>
  </div>
</div>

<?php 
get_footer(); 
?>
