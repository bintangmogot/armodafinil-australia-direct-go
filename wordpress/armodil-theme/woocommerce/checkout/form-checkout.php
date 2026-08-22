<?php
/**
 * Checkout Form
 * Rewritten for Armodafinil Australia Direct using Tailwind React layout.
 */
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

do_action( 'woocommerce_before_checkout_form', $checkout );

// If checkout registration is disabled and not logged in, the user cannot checkout.
if ( ! $checkout->is_registration_enabled() && $checkout->is_registration_required() && ! is_user_logged_in() ) {
    echo esc_html( apply_filters( 'woocommerce_checkout_must_be_logged_in_message', __( 'You must be logged in to checkout.', 'woocommerce' ) ) );
    return;
}
?>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
  <div class="flex items-center justify-between gap-3 mb-2 flex-wrap">
    <h1 class="font-serif text-3xl md:text-4xl font-semibold text-ink-900">Checkout</h1>
    <a href="<?php echo esc_url( wc_get_cart_url() ); ?>" class="inline-flex items-center gap-1.5 text-sm text-ink-700 hover:text-brand-700">
        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        Back to cart
    </a>
  </div>
  <p class="text-ink-500 text-sm mb-8">Secure, encrypted checkout &middot; discreet Australian dispatch</p>
  
  <form name="checkout" method="post" class="checkout woocommerce-checkout grid lg:grid-cols-3 gap-8" action="<?php echo esc_url( wc_get_checkout_url() ); ?>" enctype="multipart/form-data">
    
    <!-- LEFT -->
    <div class="lg:col-span-2 space-y-6">
        <?php if ( $checkout->get_checkout_fields() ) : ?>
            
            <?php do_action( 'woocommerce_checkout_before_customer_details' ); ?>
            
            <section class="bg-white border border-ink-200 rounded-2xl p-6 md:p-8" id="customer_details">
                <h2 class="font-serif text-xl font-semibold text-ink-900 inline-flex items-center gap-2 mb-4">
                    <svg class="w-5 h-5 text-brand-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    Billing details
                </h2>
                <?php do_action( 'woocommerce_checkout_billing' ); ?>
            </section>
            
            <section class="bg-white border border-ink-200 rounded-2xl p-6 md:p-8">
                <h2 class="font-serif text-xl font-semibold text-ink-900 inline-flex items-center gap-2 mb-4">
                    <svg class="w-5 h-5 text-brand-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    Shipping details
                </h2>
                <?php do_action( 'woocommerce_checkout_shipping' ); ?>
            </section>
            
            <?php if(has_action('armo_custom_checkout_medical_conditions')): ?>
            <section class="bg-white border border-ink-200 rounded-2xl p-6 md:p-8">
                <?php do_action( 'armo_custom_checkout_medical_conditions' ); ?>
            </section>
            <?php endif; ?>
            
        <?php endif; ?>
    </div>
    
    <!-- RIGHT: Order Review / Payment -->
    <aside class="bg-white border border-ink-200 rounded-2xl p-6 h-fit lg:sticky lg:top-24">
        <h2 class="font-serif text-xl font-semibold text-ink-900 mb-4">Order summary</h2>
        
        <?php do_action( 'woocommerce_checkout_before_order_review' ); ?>
        
        <div id="order_review" class="woocommerce-checkout-review-order">
            <?php do_action( 'woocommerce_checkout_order_review' ); ?>
        </div>
        
        <?php do_action( 'woocommerce_checkout_after_order_review' ); ?>
        
        <div class="mt-5 pt-4 border-t border-ink-200 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-ink-500">
            <span class="inline-flex items-center gap-1">
                <svg class="w-3 h-3 text-brand-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 12 2 2 4-4"/><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg> 
                SSL secured
            </span>
            <span class="inline-flex items-center gap-1">
                <svg class="w-3 h-3 text-brand-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> 
                Encrypted
            </span>
            <span class="inline-flex items-center gap-1">
                <svg class="w-3 h-3 text-brand-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 17h4V5H2v12h3"/><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5"/><path d="M14 17h1"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>
                Tracked
            </span>
        </div>
    </aside>
    
  </form>
</div>

<?php do_action( 'woocommerce_after_checkout_form', $checkout ); ?>
