<?php
/**
 * Small helpers for module rendering.
 */
if (!defined('ABSPATH')) exit;

/**
 * Include a module template from the modules/ folder.
 * Passes the current ACF layout row context via $args.
 */
function armodil_module($name, $args = []) {
    $file = ARMODIL_DIR . "/modules/content-{$name}.php";
    if (!file_exists($file)) return;
    // Expose $args to the included file.
    extract($args, EXTR_SKIP);
    include $file;
}

/** Escape helper that trims safely. */
function armodil_esc($v) { return esc_html(trim((string) $v)); }

/** Currency helper. */
function armodil_price($amount) { return 'A$' . number_format((float)$amount, 2); }

/**
 * Render an inline SVG icon by lucide-style name.
 * Ships with a compact subset used by the theme. Add more as needed.
 */
function armodil_icon($name, $class = 'w-5 h-5') {
    $icons = [
        'MapPin' => '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
        'Truck' => '<path d="M5 18H3V6h13v12"/><path d="M16 8h4l3 4v6h-3"/><circle cx="7.5" cy="18.5" r="1.5"/><circle cx="17.5" cy="18.5" r="1.5"/>',
        'Lock' => '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
        'CreditCard' => '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',
        'ShieldCheck' => '<path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3Z"/><path d="m9 12 2 2 4-4" fill="none" stroke="currentColor" stroke-width="2"/>',
        'FlaskConical' => '<path d="M9 2v6L4 20a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2L15 8V2"/><path d="M9 2h6"/>',
        'GraduationCap' => '<path d="M22 10 12 4 2 10l10 6 10-6Z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/>',
        'Briefcase' => '<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
        'Moon' => '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/>',
        'Gamepad2' => '<path d="M6 12h4M8 10v4"/><circle cx="15" cy="12" r="1"/><circle cx="17" cy="14" r="1"/><rect x="2" y="6" width="20" height="12" rx="4"/>',
        'ArrowRight' => '<path d="M5 12h14M13 5l7 7-7 7"/>',
        'Star' => '<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8L2 9.3l6.9-1L12 2Z"/>',
        'ChevronDown' => '<path d="m6 9 6 6 6-6"/>',
        'MessageCircle' => '<path d="M21 12a9 9 0 1 1-3.5-7.1L21 3l-1.1 3.5A8.9 8.9 0 0 1 21 12Z"/>',
        'Send' => '<path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4 20-7Z"/>',
        'ShoppingCart' => '<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M3 3h2l3 12h11l2-8H6"/>',
        'Search' => '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
        'Sparkles' => '<path d="M12 3v4M12 17v4M4.2 4.2l2.8 2.8M17 17l2.8 2.8M3 12h4M17 12h4M4.2 19.8 7 17M17 7l2.8-2.8"/>',
        'CalendarDays' => '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
        'User2' => '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>',
        'Quote' => '<path d="M3 21c0-6 3-9 8-10v3c-3 1-4 3-4 5h4v4H3v-2Zm12 0c0-6 3-9 8-10v3c-3 1-4 3-4 5h4v4h-8v-2Z"/>',
    ];
    $path = isset($icons[$name]) ? $icons[$name] : $icons['Sparkles'];
    return sprintf(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="%s">%s</svg>',
        esc_attr($class), $path
    );
}

/** Star row helper for product cards / reviews. */
function armodil_stars($rating, $class = 'w-3.5 h-3.5') {
    $full = floor((float)$rating);
    $out = '<div class="flex items-center gap-1 text-amber-500">';
    for ($i = 0; $i < 5; $i++) {
        $filled = $i < $full ? 'fill-amber-500' : 'fill-none text-ink-200';
        $out .= '<span class="'.$filled.'">'.armodil_icon('Star', $class).'</span>';
    }
    $out .= '<span class="ml-1 text-xs text-ink-500 font-medium">'.number_format((float)$rating, 1).'</span></div>';
    return $out;
}
