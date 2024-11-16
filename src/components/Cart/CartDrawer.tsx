
import { useRecoilState } from 'recoil';
import { X } from 'lucide-react';
import { cartState } from '../../state/atoms';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const [cart, setCart] = useRecoilState(cartState);

  const removeItem = (id: string) => {
    setCart(cart.filter(item => item.id !== id));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50">
      <div className="absolute right-0 top-0 h-full w-96 bg-white p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-light">Your Cart</h2>
          <button onClick={onClose}>
            <X size={24} />
          </button>
        </div>
        
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center space-x-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-gray-500">${item.price.toFixed(2)} x {item.quantity}</p>
                </div>
                <button onClick={() => removeItem(item.id)} className="text-red-500">
                  <X size={20} />
                </button>
              </div>
            ))}
            <div className="border-t pt-4">
              <div className="flex justify-between text-lg font-medium">
                <span>Total</span>
                <span>${cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}</span>
              </div>
              <button className="w-full bg-emerald-600 text-white py-2 rounded-lg mt-4">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}