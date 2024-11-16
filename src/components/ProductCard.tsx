import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function ProductCard() {
  return (
    <div className="space-y-8">
      <div className="flex space-x-4">
        <button className="p-2 bg-emerald-800/50 rounded-full text-white">
          <ChevronLeft size={24} />
        </button>
        <button className="p-2 bg-emerald-800/50 rounded-full text-white">
          <ChevronRight size={24} />
        </button>
        <span className="text-lime-400 self-center">What's new?</span>
      </div>
      
      <h2 className="text-white text-7xl font-light leading-tight">
        Delicious<br />Deals
      </h2>
      
      <p className="text-white/80 text-xl">
        Only the highest quality<br />of our coffee drinks
      </p>
      
      <button className="text-lime-400 flex items-center space-x-2 group">
        <span>How we do it?</span>
        <ChevronRight className="group-hover:translate-x-1 transition" />
      </button>
    </div>
  );
}