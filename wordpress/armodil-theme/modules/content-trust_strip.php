<?php
$trust_items = get_sub_field('trust_items') ?: array(
    array('text' => 'Australian Domestic Dispatch'),
    array('text' => 'Delivery Guarantee'),
    array('text' => 'Encrypted Checkout'),
    array('text' => 'Stealth Packaging'),
);

// Double the items for marquee effect
$marquee_items = array_merge($trust_items, $trust_items);
?>
<div class="border-y border-ink-200 bg-white overflow-hidden">
  <div class="mask-fade-x">
    <div class="flex gap-10 py-4 animate-marquee whitespace-nowrap">
      <?php foreach ($marquee_items as $t): ?>
        <span class="inline-flex items-center gap-2 text-sm font-medium text-ink-700">
          <i data-lucide="shield-check" class="w-4 h-4 text-brand-600"></i> <?php echo esc_html(is_array($t) ? $t['text'] : $t); ?>
        </span>
      <?php endforeach; ?>
    </div>
  </div>
</div>
