<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&display=swap" rel="stylesheet">
    <?php wp_head(); ?>
    <style>
        body { font-family: 'Inter', sans-serif; background-color: #F4F9F8; }
        h1, h2, h3, h4, h5, h6, .font-serif { font-family: 'Playfair Display', serif; }
        .text-teal-600 { color: #0d9488; }
        .bg-teal-600 { background-color: #0d9488; }
        .hover\:bg-teal-700:hover { background-color: #0f766e; }
    </style>
</head>
<body <?php body_class('text-slate-900 antialiased flex flex-col min-h-screen'); ?>>
<?php wp_body_open(); ?>

<!-- Top Announcement Bar -->
<div class="bg-[#0B132B] text-slate-300 text-xs py-2 px-4 hidden md:block">
    <div class="container mx-auto max-w-7xl flex justify-between items-center">
        <div class="flex gap-4">
            <span>Premium cognitive support · Australia-wide dispatch</span>
        </div>
        <div class="text-center text-slate-400">
            <span>6–12 business days · discreet packaging</span>
        </div>
        <div class="flex gap-2 items-center text-teal-400">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
            <a href="/faq" class="hover:text-white">Support</a>
        </div>
    </div>
</div>

<!-- Main Header -->
<header class="bg-white border-b border-slate-100 sticky top-0 z-50 shadow-sm">
    <div class="container mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <!-- Logo -->
        <a href="/" class="flex items-center gap-3">
            <div class="bg-teal-600 p-2 rounded-xl text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            </div>
            <div>
                <div class="font-serif font-bold text-xl leading-none text-slate-900 tracking-tight">Armodafinil</div>
                <div class="text-[9px] uppercase tracking-[0.2em] text-teal-600 font-bold mt-1">Australia Direct</div>
            </div>
        </a>

        <!-- Desktop Nav -->
        <nav class="hidden lg:flex items-center gap-8">
            <a href="/shop" class="font-medium text-slate-700 hover:text-teal-600 transition-colors text-sm">Products</a>
            <a href="/categories" class="font-medium text-slate-700 hover:text-teal-600 transition-colors text-sm">Categories</a>
            <a href="/conditions" class="font-medium text-slate-700 hover:text-teal-600 transition-colors text-sm">Conditions</a>
            <a href="/blog" class="font-medium text-slate-700 hover:text-teal-600 transition-colors text-sm">Blog</a>
            <a href="/faq" class="font-medium text-slate-700 hover:text-teal-600 transition-colors text-sm">FAQ</a>
        </nav>

        <!-- Actions -->
        <div class="flex items-center gap-5">
            <!-- Search -->
            <div class="hidden xl:flex items-center bg-slate-50 px-3 py-2 rounded-full text-sm text-slate-400 w-64 border border-slate-100">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mr-2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                Search products...
                <span class="ml-auto bg-white rounded shadow-sm px-1.5 py-0.5 text-[10px] font-medium text-slate-400">Ctrl K</span>
            </div>
            
            <!-- Cart -->
            <a href="/cart" class="text-slate-600 hover:text-teal-600 relative transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                <span class="absolute -top-1.5 -right-1.5 bg-teal-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </a>
            
            <!-- User -->
            <a href="/my-account" class="text-slate-600 hover:text-teal-600 hidden sm:block transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </a>

            <!-- CTA -->
            <a href="/shop" class="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-full font-medium text-sm transition-colors hidden sm:block shadow-sm">Shop</a>
        </div>
    </div>
</header>
<main class="flex-1 w-full relative">
