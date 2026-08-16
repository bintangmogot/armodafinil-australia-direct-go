import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X, Sparkles } from 'lucide-react';
import { NAV, SITE } from '../mock';
import { useCart } from '../cart/CartContext';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();
  return (
    <header className="sticky top-0 z-40 bg-white/85 backdrop-blur border-b border-ink-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="w-9 h-9 rounded-xl bg-brand-600 grid place-items-center text-white shadow-soft">
            <Sparkles className="w-4 h-4" />
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-lg font-semibold text-ink-900">{SITE.name}</span>
            <span className="block text-[10px] uppercase tracking-[0.18em] text-ink-500">{SITE.region}</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 ml-4">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-brand-700 bg-brand-50' : 'text-ink-700 hover:text-brand-700 hover:bg-brand-50/60'}`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex-1" />

        <div className="hidden md:flex items-center bg-ink-100/70 rounded-full px-3 h-10 w-72">
          <Search className="w-4 h-4 text-ink-500" />
          <input
            aria-label="Search"
            placeholder="Search products, strengths, brands..."
            className="bg-transparent outline-none border-0 text-sm flex-1 mx-2 placeholder:text-ink-500"
          />
          <span className="text-[10px] font-medium text-ink-500 border border-ink-200 rounded px-1.5 py-0.5">Ctrl K</span>
        </div>

        <Link to="/cart" className="relative w-10 h-10 grid place-items-center rounded-full hover:bg-ink-100" aria-label="Cart">
          <ShoppingCart className="w-5 h-5 text-ink-700" />
          {count > 0 && (
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 grid place-items-center text-[10px] font-semibold text-white bg-brand-600 rounded-full">{count}</span>
          )}
        </Link>
        <Link to="/account" className="w-10 h-10 grid place-items-center rounded-full hover:bg-ink-100" aria-label="Account">
          <User className="w-5 h-5 text-ink-700" />
        </Link>

        <Link
          to="/product"
          className="hidden md:inline-flex items-center h-10 px-4 rounded-full bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 btn-primary"
        >
          Shop
        </Link>

        <button className="lg:hidden w-10 h-10 grid place-items-center rounded-full hover:bg-ink-100" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-ink-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-brand-700 bg-brand-50' : 'text-ink-700 hover:bg-ink-100'}`}
              >
                {n.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
