import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../../mock';
import ProductCard from '../ProductCard';

export default function PopularProducts() {
  return (
    <section className="py-16 md:py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-ink-900">Popular right now</h2>
            <p className="mt-2 text-ink-500">Add to cart, or open a product for full details and dosing notes.</p>
          </div>
          <Link to="/product" className="inline-flex items-center gap-1.5 text-brand-700 font-semibold hover:gap-2 transition-all">
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRODUCTS.map((p) => <ProductCard key={p.slug} p={p} />)}
        </div>
      </div>
    </section>
  );
}
