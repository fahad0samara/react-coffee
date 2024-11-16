import  { useState } from 'react';
import { MenuItem } from './MenuItem';

const menuItems = [
  {
    id: '1',
    name: 'Classic Espresso',
    description: 'Rich and bold single shot of pure coffee essence',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    category: 'Hot Coffee'
  },
  {
    id: '2',
    name: 'Iced Caramel Macchiato',
    description: 'Smooth espresso with vanilla and caramel, served over ice',
    price: 5.49,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    category: 'Cold Drinks'
  },
  {
    id: '3',
    name: 'Chocolate Croissant',
    description: 'Buttery, flaky pastry filled with rich chocolate',
    price: 4.29,
    image: 'https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    category: 'Pastries'
  }
];

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="mt-20">
      <h2 className="text-4xl text-white font-light mb-8">Our Menu</h2>
      
      <div className="flex space-x-4 mb-8">
        {['all', 'Hot Coffee', 'Cold Drinks', 'Pastries'].map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full transition ${
              activeCategory === category 
                ? 'bg-lime-400 text-emerald-900' 
                : 'bg-white/10 text-white'
            }`}
          >
            {category === 'all' ? 'All' : category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map(item => (
          <MenuItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}