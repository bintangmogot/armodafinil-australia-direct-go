import React, { useMemo, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PRODUCTS } from '../mock';
import { CATEGORY_TREE } from '../data/categories';
import ProductCard from '../components/ProductCard';
import OrderCTA from '../components/OrderCTA';
import { ArrowLeft, Search } from 'lucide-react';

export default function CategoryDetail() {
  const { catSlug, subSlug } = useParams();
  const cat = CATEGORY_TREE.find((c) => c.slug === catSlug);
  const [sort, setSort] = useState('featured');
  const [q, setQ] = useState('');

  const list = useMemo(() => {
    let items = PRODUCTS.filter((p) => p.category === catSlug);
    if (subSlug) items = items.filter((p) => p.sub === subSlug);
    if (q) items = items.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()));
    if (sort === 'price-asc') items.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') items.sort((a, b) => b.price - a.price);
    if (sort === 'rating') items.sort((a, b) => b.rating - a.rating);
    if (sort === 'name') items.sort((a, b) => a.name.localeCompare(b.name));
    return items;
  }, [catSlug, subSlug, sort, q]);

  if (!cat) return <Navigate to="/categories" replace />;
  const sub = subSlug ? cat.subs.find((s) => s.slug === subSlug) : null;

  return (
    <div>
      <div className="border-b border-ink-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center text-xs text-ink-500 gap-2">
          <Link to="/" className="hover:text-brand-700">Home</Link>
          <span>/</span>
          <Link to="/categories" className="hover:text-brand-700">Categories</Link>
          <span>/</span>
          {sub ? <><Link to={`/category/${cat.slug}`} className="hover:text-brand-700">{cat.name}</Link><span>/</span><span className="text-ink-900">{sub.name}</span></> : <span className="text-ink-900">{cat.name}</span>}
        </div>
      </div>

      <div className="section-wash">
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
          <Link to="/categories" className="inline-flex items-center gap-1.5 text-sm text-ink-700 hover:text-brand-700"><ArrowLeft className="w-4 h-4" /> All categories</Link>
          <div className="mt-6 flex items-start gap-6 flex-wrap">
            <div className="w-24 h-24 rounded-2xl overflow-hidden bg-brand-50 border border-ink-200 shrink-0">
              <img src={(sub || cat).image} alt={(sub || cat).name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-[240px]">
              <div className="text-[11px] uppercase tracking-widest text-brand-700 font-semibold">Category</div>
              <h1 className="mt-1 font-serif text-4xl md:text-5xl font-semibold text-ink-900">{sub ? sub.name : cat.name}</h1>
              <p className="mt-3 text-ink-700 max-w-2xl leading-relaxed">{sub ? `${sub.name} products in the ${cat.name} category — shipped tracked across Australia in neutral outer packaging.` : cat.desc}</p>
            </div>
          </div>

          {!sub && cat.subs.length > 0 && (
            <div className="mt-8">
              <div className="text-xs uppercase tracking-widest text-ink-500 font-semibold mb-3">Subcategories</div>
              <div className="flex flex-wrap gap-2">
                {cat.subs.map((s) => (
                  <Link key={s.slug} to={`/category/${cat.slug}/${s.slug}`} className="inline-flex items-center gap-2 h-9 px-4 rounded-full border border-ink-200 hover:border-brand-500 bg-white text-sm font-medium text-ink-700 hover:text-brand-700">{s.name}</Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center gap-3 flex-wrap justify-between">
          <p className="text-sm text-ink-500">{list.length} products</p>
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-white border border-ink-200 rounded-full px-3 h-10 w-full md:w-72">
              <Search className="w-4 h-4 text-ink-500" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search in this category" className="bg-transparent outline-none border-0 text-sm flex-1 mx-2" />
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

        {list.length === 0 ? (
          <div className="py-24 text-center text-ink-500">
            <p>No products listed in this category yet.</p>
            <Link to="/product" className="mt-4 inline-block text-brand-700 font-semibold">Browse the full catalogue →</Link>
          </div>
        ) : (
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {list.map((p) => <ProductCard key={p.slug} p={p} />)}
          </div>
        )}
      </div>

      <OrderCTA />
    </div>
  );
}
