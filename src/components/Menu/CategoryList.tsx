import React from 'react';
import { Coffee, IceCream, Cake } from 'lucide-react';

const categories = [
  { id: 1, name: 'Hot Coffee', icon: Coffee, items: 12 },
  { id: 2, name: 'Cold Drinks', icon: IceCream, items: 8 },
  { id: 3, name: 'Pastries', icon: Cake, items: 15 },
];

export function CategoryList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {categories.map((category) => (
        <div
          key={category.id}
          className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-white hover:bg-white/20 transition cursor-pointer"
        >
          <category.icon size={32} className="mb-4 text-lime-400" />
          <h3 className="text-xl font-light mb-2">{category.name}</h3>
          <p className="text-white/60">{category.items} items</p>
        </div>
      ))}
    </div>
  );
}