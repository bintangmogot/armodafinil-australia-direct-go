import React, { useMemo, useState } from 'react';
import { PRODUCTS } from '../mock';
import ProductCard from '../components/ProductCard';
import { Search } from 'lucide-react';

const CATS = ['All', 'Armodafinil', 'Modafinil', 'Wellness'];

export default function Products() {
  const [cat, setCat] = useState('All');
  const [q, setQ] = useState('');
  const [sort, setSort] = useState('featured');

  const items = useMemo(() => {
    let list = PRODUCTS.slice();
    if (cat !== 'All') list = list.filter((p) => p.category === cat);
    if (q) list = list.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()));
    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
    if (sort === 'rating') list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [cat, q, sort]);

  return (
    <div className="section-wash">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center">
          <span className="text-xs uppercase tracking-widest text-brand-700 font-semibold bg-brand-100 rounded-full px-3 py-1.5">Full catalogue</span>
          <h1 className="mt-4 font-serif text-4xl md:text-5xl font-semibold text-ink-900">Our products</h1>
          <p className="mt-3 text-ink-700 max-w-2xl mx-auto">Trusted cognitive-support tablets and select wellness items, shipped discreetly across Australia.</p>
        </div>

        <div className="mt-10 flex flex-col md:flex-row md:items-center gap-4 justify-between">
          <div className="flex flex-wrap gap-2">
            {CATS.map((c) => (
              <button key={c} onClick={() => setCat(c)} className={`text-sm font-medium px-4 h-9 rounded-full border transition-colors ${cat === c ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-ink-700 border-ink-200 hover:border-brand-600'}`}>{c}</button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-white border border-ink-200 rounded-full px-3 h-10 w-full md:w-72">
              <Search className="w-4 h-4 text-ink-500" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search products..." className="bg-transparent outline-none border-0 text-sm flex-1 mx-2" />
            </div>
            <select value={sort} onChange={(e) => setSort(e.target.value)} className="h-10 rounded-full border border-ink-200 bg-white px-3 text-sm">
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
              <option value="rating">Top rated</option>
            </select>
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((p) => <ProductCard key={p.slug} p={p} />)}
        </div>
        {items.length === 0 && <p className="text-center text-ink-500 mt-16">No products match your filters.</p>}
      </div>
    </div>
  );
}
