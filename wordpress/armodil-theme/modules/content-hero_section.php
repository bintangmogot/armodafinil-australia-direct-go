<?php
$eyebrow = get_sub_field('eyebrow');
$headline = get_sub_field('headline');
$description = get_sub_field('description');
$button = get_sub_field('button');
?>
<section class="bg-[#F4F9F8] py-16 md:py-24 overflow-hidden">
    <div class="container mx-auto max-w-7xl px-4">
        <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <!-- Left Text Content -->
            <div class="w-full lg:w-1/2" data-aos="fade-up">
                <?php if ($eyebrow): ?>
                <div class="inline-flex items-center gap-2 bg-teal-100/50 text-teal-700 px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                    <?php echo esc_html($eyebrow); ?>
                </div>
                <?php endif; ?>
                
                <h1 class="text-5xl lg:text-7xl font-serif font-bold text-slate-900 leading-[1.1] mb-6">
                    <?php echo wp_kses_post($headline ?: 'Reach Your Sharpest Mental Edge'); ?>
                </h1>
                
                <p class="text-lg lg:text-xl text-slate-600 leading-relaxed mb-8 max-w-lg">
                    <?php echo wp_kses_post($description ?: 'Steady focus, cleaner thinking, and dependable energy for the moments that matter.'); ?>
                </p>
                
                <div class="flex flex-wrap items-center gap-4">
                    <?php if ($button): ?>
                    <a href="<?php echo esc_url($button['url']); ?>" class="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3.5 rounded-full font-semibold transition-colors flex items-center gap-2 shadow-sm">
                        <?php echo esc_html($button['title']); ?>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </a>
                    <?php else: ?>
                    <a href="/shop" class="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3.5 rounded-full font-semibold transition-colors flex items-center gap-2 shadow-sm">
                        Shop Now
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </a>
                    <?php endif; ?>
                    
                    <a href="/faq" class="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-3.5 rounded-full font-semibold transition-colors shadow-sm">
                        Explore guides
                    </a>
                </div>
            </div>
            
            <!-- Right Mock Product Card -->
            <div class="w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="100">
                <div class="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
                    <!-- Banner -->
                    <div class="bg-orange-100 p-8 flex items-center justify-center relative overflow-hidden h-64">
                        <div class="absolute inset-0 bg-gradient-to-r from-orange-200/50 to-transparent"></div>
                        <img src="https://via.placeholder.com/400x200?text=Product+Image" alt="Artvigil Box" class="relative z-10 w-full h-full object-contain transform hover:scale-105 transition-transform duration-500">
                        <div class="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full px-3 py-1 font-bold text-orange-600 text-sm shadow-sm border border-orange-100">10% OFF</div>
                    </div>
                    
                    <!-- Trust Strip mini -->
                    <div class="flex items-center justify-between px-6 py-3 border-b border-slate-100 bg-slate-50/50 text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                        <div class="flex items-center gap-1.5 text-orange-600">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                            Trusted Store
                        </div>
                        <div class="flex items-center gap-1.5 text-orange-600">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                            Quality You Can Trust
                        </div>
                    </div>
                    
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-4">
                            <h3 class="font-serif text-2xl font-bold text-slate-900 leading-tight">Armodafinil 250mg — Artvigil 250mg</h3>
                            <span class="bg-teal-50 text-teal-700 text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap">In stock</span>
                        </div>
                        
                        <div class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Tablets</div>
                        
                        <!-- Pills QTY -->
                        <div class="flex flex-wrap gap-2 mb-6">
                            <div class="bg-teal-600 text-white border border-teal-600 px-3 py-1.5 rounded-md text-sm font-semibold cursor-pointer">1000</div>
                            <div class="bg-white text-slate-600 border border-slate-200 px-3 py-1.5 rounded-md text-sm font-semibold hover:border-teal-600 cursor-pointer">800</div>
                            <div class="bg-white text-slate-600 border border-slate-200 px-3 py-1.5 rounded-md text-sm font-semibold hover:border-teal-600 cursor-pointer">500</div>
                        </div>
                        
                        <div class="bg-orange-50 border border-orange-100 rounded-lg p-3 text-sm text-orange-800 flex items-center gap-3 mb-6">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                            Free shipping + 10% off over A$299. Use code ARMD10
                        </div>
                        
                        <div class="flex items-end justify-between mt-auto">
                            <div>
                                <div class="text-3xl font-bold text-slate-900">A$1935.00</div>
                                <div class="text-sm text-slate-500">250mg</div>
                            </div>
                            <div class="flex gap-3">
                                <div class="flex items-center border border-slate-200 rounded-full bg-white">
                                    <button class="px-3 py-2 text-slate-400 hover:text-slate-700">-</button>
                                    <input type="text" value="1" class="w-8 text-center text-sm font-semibold bg-transparent border-none p-0 focus:ring-0">
                                    <button class="px-3 py-2 text-slate-400 hover:text-slate-700">+</button>
                                </div>
                                <a href="/shop" class="bg-[#0B132B] hover:bg-slate-800 text-white px-6 py-2.5 rounded-full font-semibold flex items-center gap-2 transition-colors">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                                    Add
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
