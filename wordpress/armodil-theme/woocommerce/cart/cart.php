<?php
/**
 * Cart Page
 * Rewritten for Armodafinil Australia Direct using Tailwind React layout.
 */
defined( 'ABSPATH' ) || exit;

do_action( 'woocommerce_before_cart' ); ?>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
  <h1 class="font-serif text-3xl md:text-4xl font-semibold text-ink-900">Your cart</h1>
  
  <form class="woocommerce-cart-form mt-8 grid lg:grid-cols-3 gap-8" action="<?php echo esc_url( wc_get_cart_url() ); ?>" method="post">
    
    <!-- Left Column: Cart Items -->
    <div class="lg:col-span-2 space-y-4">
        <?php do_action( 'woocommerce_before_cart_table' ); ?>
        
        <?php
        foreach ( WC()->cart->get_cart() as $cart_item_key => $cart_item ) {
            $_product   = apply_filters( 'woocommerce_cart_item_product', $cart_item['data'], $cart_item, $cart_item_key );
            $product_id = apply_filters( 'woocommerce_cart_item_product_id', $cart_item['product_id'], $cart_item, $cart_item_key );

            if ( $_product && $_product->exists() && $cart_item['quantity'] > 0 && apply_filters( 'woocommerce_cart_item_visible', true, $cart_item, $cart_item_key ) ) {
                $product_permalink = apply_filters( 'woocommerce_cart_item_permalink', $_product->is_visible() ? $_product->get_permalink( $cart_item ) : '', $cart_item, $cart_item_key );
                ?>
                <div class="woocommerce-cart-form__cart-item <?php echo esc_attr( apply_filters( 'woocommerce_cart_item_class', 'cart_item', $cart_item, $cart_item_key ) ); ?> flex gap-4 bg-white border border-ink-200 rounded-2xl p-4">
                    
                    <div class="w-24 h-24 rounded-lg overflow-hidden bg-brand-50 shrink-0 flex items-center justify-center">
                        <?php
                        $thumbnail = apply_filters( 'woocommerce_cart_item_thumbnail', $_product->get_image('woocommerce_thumbnail', array('class' => 'w-full h-full object-cover')), $cart_item, $cart_item_key );
                        if ( ! $product_permalink ) {
                            echo $thumbnail;
                        } else {
                            printf( '<a href="%s">%s</a>', esc_url( $product_permalink ), $thumbnail );
                        }
                        ?>
                    </div>
                    
                    <div class="flex-1 min-w-0">
                        <div class="font-serif text-lg font-semibold text-ink-900 line-clamp-1">
                            <?php
                            if ( ! $product_permalink ) {
                                echo wp_kses_post( apply_filters( 'woocommerce_cart_item_name', $_product->get_name(), $cart_item, $cart_item_key ) . '&nbsp;' );
                            } else {
                                echo wp_kses_post( apply_filters( 'woocommerce_cart_item_name', sprintf( '<a href="%s" class="hover:text-brand-700">%s</a>', esc_url( $product_permalink ), $_product->get_name() ), $cart_item, $cart_item_key ) );
                            }
                            ?>
                        </div>
                        
                        <div class="text-sm text-ink-500 mt-1">
                            <?php echo apply_filters( 'woocommerce_cart_item_price', WC()->cart->get_product_price( $_product ), $cart_item, $cart_item_key ); ?> each
                        </div>
                        <?php echo wc_get_formatted_cart_item_data( $cart_item ); ?>
                        
                        <div class="mt-3 flex items-center justify-between gap-3">
                            <div class="inline-flex items-center border border-ink-200 rounded-full overflow-hidden">
                                <?php
                                if ( $_product->is_sold_individually() ) {
                                    $min_quantity = 1;
                                    $max_quantity = 1;
                                } else {
                                    $min_quantity = 0;
                                    $max_quantity = $_product->get_max_purchase_quantity();
                                }

                                $product_quantity = woocommerce_quantity_input(
                                    array(
                                        'input_name'   => "cart[{$cart_item_key}][qty]",
                                        'input_value'  => $cart_item['quantity'],
                                        'max_value'    => $max_quantity,
                                        'min_value'    => $min_quantity,
                                        'product_name' => $_product->get_name(),
                                        'classes'      => apply_filters( 'woocommerce_quantity_input_classes', array( 'w-10', 'text-center', 'text-sm', 'font-semibold', 'border-0', 'outline-none', 'bg-transparent', 'p-0', 'qty' ), $_product ),
                                    ),
                                    $_product,
                                    false
                                );

                                echo apply_filters( 'woocommerce_cart_item_quantity', $product_quantity, $cart_item_key, $cart_item ); // WPCS: XSS ok.
                                ?>
                            </div>
                            
                            <div class="font-semibold text-ink-900">
                                <?php echo apply_filters( 'woocommerce_cart_item_subtotal', WC()->cart->get_product_subtotal( $_product, $cart_item['quantity'] ), $cart_item, $cart_item_key ); ?>
                            </div>
                            
                            <?php
                            echo apply_filters(
                                'woocommerce_cart_item_remove_link',
                                sprintf(
                                    '<a href="%s" class="text-ink-500 hover:text-red-600 remove" aria-label="%s" data-product_id="%s" data-product_sku="%s"><svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg></a>',
                                    esc_url( wc_get_cart_remove_url( $cart_item_key ) ),
                                    esc_attr( sprintf( __( 'Remove %s from cart', 'woocommerce' ), wp_strip_all_tags( $_product->get_name() ) ) ),
                                    esc_attr( $product_id ),
                                    esc_attr( $_product->get_sku() )
                                ),
                                $cart_item_key
                            );
                            ?>
                        </div>
                    </div>
                </div>
                <?php
            }
        }
        ?>
        
        <?php do_action( 'woocommerce_cart_contents' ); ?>
        
        <div class="hidden">
            <button type="submit" class="button" name="update_cart" value="<?php esc_attr_e( 'Update cart', 'woocommerce' ); ?>"><?php esc_html_e( 'Update cart', 'woocommerce' ); ?></button>
            <?php do_action( 'woocommerce_cart_actions' ); ?>
            <?php wp_nonce_field( 'woocommerce-cart', 'woocommerce-cart-nonce' ); ?>
        </div>
        
        <?php do_action( 'woocommerce_after_cart_contents' ); ?>
        <?php do_action( 'woocommerce_after_cart_table' ); ?>
    </div>
    
    <!-- Right Column: Cart Totals -->
    <aside class="bg-white border border-ink-200 rounded-2xl p-6 h-fit lg:sticky lg:top-24 cart-collaterals">
        <h2 class="font-serif text-xl font-semibold text-ink-900 mb-4">Order summary</h2>
        <?php
        remove_action( 'woocommerce_cart_collaterals', 'woocommerce_cross_sell_display' );
        do_action( 'woocommerce_cart_collaterals' );
        ?>
    </aside>
    
  </form>
</div>

<?php do_action( 'woocommerce_after_cart' ); ?>
