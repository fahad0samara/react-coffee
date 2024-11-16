
import { Plus, Star } from 'lucide-react';
import { useSetRecoilState } from 'recoil';
import { toast } from 'react-hot-toast';
import { cartState,  } from '../../state/atoms';

interface MenuItemProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  category: string;
}

export function MenuItem({ id, name, description, price, image, rating, category }: MenuItemProps) {
  const setCart = useSetRecoilState(cartState);

  const addToCart = () => {
    setCart((currentCart) => {
      const existingItem = currentCart.find(item => item.id === id);
      if (existingItem) {
        toast.success(`Added another ${name} to cart`);
        return currentCart.map(item =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      toast.success(`${name} added to cart`);
      return [...currentCart, { id, name, price, quantity: 1, image }];
    });
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl text-white font-light">{name}</h3>
            <p className="text-white/60 text-sm">{category}</p>
          </div>
          <div className="flex items-center text-yellow-400">
            <Star size={16} fill="currentColor" />
            <span className="ml-1 text-sm">{rating}</span>
          </div>
        </div>
        <p className="text-white/80 text-sm mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl text-lime-400">${price.toFixed(2)}</span>
          <button 
            onClick={addToCart}
            className="bg-lime-400 text-emerald-900 p-2 rounded-full hover:bg-lime-500 transition"
          >
            <Plus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}