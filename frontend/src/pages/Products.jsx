import React, { useMemo, useState } from 'react';
import { PRODUCTS } from '../mock';
import { CATEGORY_TREE } from '../data/categories';
import ProductCard from '../components/ProductCard';
import { Search, SlidersHorizontal, X } from 'lucide-react';

export default function Products() {
  const [cat, setCat] = useState('all');
  const [q, setQ] = useState('');
  const [sort, setSort] = useState('featured');
  const [openFilter, setOpenFilter] = useState(false);

  const items = useMemo(() => {
    let list = PRODUCTS.slice();
    if (cat !== 'all') list = list.filter((p) => p.category === cat);
    if (q) list = list.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()));
    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
    if (sort === 'rating') list.sort((a, b) => b.rating - a.rating);
    if (sort === 'name') list.sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [cat, q, sort]);

  const cats = [{ slug: 'all', name: 'All categories' }, ...CATEGORY_TREE.map((c) => ({ slug: c.slug, name: c.name }))];

  return (
    <div className="section-wash">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center">
          <span className="text-xs uppercase tracking-widest text-brand-700 font-semibold bg-brand-100 rounded-full px-3 py-1.5">Full catalogue</span>
          <h1 className="mt-4 font-serif text-4xl md:text-5xl font-semibold text-ink-900">Medicine catalog</h1>
          <p className="mt-3 text-ink-700 max-w-2xl mx-auto">Compare prescription and OTC medicines by category, check ratings and prices in AUD, and add to cart in a few taps — shipped discreetly across Australia.</p>
        </div>

        <div className="mt-10 flex flex-col md:flex-row md:items-center gap-4 justify-between">
          <div className="hidden md:flex flex-wrap gap-2">
            {cats.map((c) => (
              <button key={c.slug} onClick={() => setCat(c.slug)} className={`text-sm font-medium px-4 h-9 rounded-full border transition-colors ${cat === c.slug ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-ink-700 border-ink-200 hover:border-brand-600'}`}>{c.name}</button>
            ))}
          </div>
          <button onClick={() => setOpenFilter(true)} className="md:hidden inline-flex items-center gap-2 h-10 px-4 rounded-full border border-ink-200 bg-white text-sm font-semibold text-ink-900 self-start">
            <SlidersHorizontal className="w-4 h-4" /> Filter · {cats.find((c) => c.slug === cat)?.name}
          </button>

          <div className="flex items-center gap-3">
            <div className="flex items-center bg-white border border-ink-200 rounded-full px-3 h-10 w-full md:w-72">
              <Search className="w-4 h-4 text-ink-500" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search products..." className="bg-transparent outline-none border-0 text-sm flex-1 mx-2" />
            </div>
            <select value={sort} onChange={(e) => setSort(e.target.value)} className="h-10 rounded-full border border-ink-200 bg-white px-3 text-sm">
              <option value="featured">Popularity</option>
              <option value="rating">Average rating</option>
              <option value="price-asc">Price: low to high</option>
              <option value="price-desc">Price: high to low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
        </div>

        <p className="mt-6 text-xs text-ink-500">{items.length} of {PRODUCTS.length} products</p>

        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((p) => <ProductCard key={p.slug} p={p} />)}
        </div>
        {items.length === 0 && <p className="text-center text-ink-500 mt-16">No products match your filters.</p>}
      </div>

      {/* Mobile filter drawer */}
      {openFilter && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-ink-900/50" onClick={() => setOpenFilter(false)} />
          <div className="absolute inset-x-0 bottom-0 bg-white rounded-t-3xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif text-lg font-semibold">Filter by category</h3>
              <button onClick={() => setOpenFilter(false)} className="w-9 h-9 grid place-items-center rounded-full hover:bg-ink-100"><X className="w-4 h-4" /></button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {cats.map((c) => (
                <button key={c.slug} onClick={() => { setCat(c.slug); setOpenFilter(false); }} className={`text-sm font-medium px-4 h-10 rounded-full border ${cat === c.slug ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-ink-700 border-ink-200'}`}>{c.name}</button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
