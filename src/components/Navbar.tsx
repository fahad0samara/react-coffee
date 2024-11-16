import { ShoppingBag, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { cartState, authState } from '../state/atoms';

interface NavbarProps {
  onCartClick: () => void;
}

export function Navbar({ onCartClick }: NavbarProps) {
  const cart = useRecoilValue(cartState);
  const auth = useRecoilValue(authState); // Get auth state
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center p-6">
      <h1 className="text-white text-2xl font-light">coffeeshop</h1>
      <div className="flex space-x-8">
        <a href="#menu" className="text-white/80 hover:text-white transition">Menu</a>
        <a href="#about" className="text-white/80 hover:text-white transition">About</a>
        <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
      </div>
      <div className="flex items-center space-x-4">
        <button 
          onClick={onCartClick}
          className="px-4 py-2 bg-lime-400 text-emerald-900 rounded-full flex items-center space-x-2 hover:bg-lime-500 transition"
        >
          <ShoppingBag size={18} />
          <span>Cart ({itemCount})</span>
        </button>

        {/* Conditional rendering based on authentication state */}
        {auth.isAuthenticated ? (
          <button
            className="text-white"
            onClick={() => navigate('/profile')}
          >
            <User size={24} />
          </button>
        ) : (
          <button
            className="text-white"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
