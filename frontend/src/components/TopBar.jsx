import React from 'react';
import { Headphones } from 'lucide-react';
import { TOP_BAR } from '../mock';

export default function TopBar() {
  return (
    <div className="w-full bg-ink-900 text-white text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between gap-4">
        <p className="hidden sm:block opacity-90">{TOP_BAR.left}</p>
        <p className="opacity-90 hidden md:block">{TOP_BAR.center}</p>
        <a href="#support" className="inline-flex items-center gap-1.5 text-brand-300 hover:text-brand-200">
          <Headphones className="w-3.5 h-3.5" /> {TOP_BAR.right}
        </a>
      </div>
    </div>
  );
}
