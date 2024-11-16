import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { LogOut, ShoppingBag } from 'lucide-react';
import Cookies from 'js-cookie';
import { authState, ordersState } from '../../state/atoms';

export function ProfilePage() {
  const [auth, setAuth] = useRecoilState(authState);
  const orders = useRecoilValue(ordersState);
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove('user');
    setAuth({
      isAuthenticated: false,
      user: null,
    });
    navigate('/');
  };

  if (!auth.isAuthenticated) {
    navigate('/login');
    return null;
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-white">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-light mb-2">Welcome, {auth.user?.name}</h1>
            <p className="text-white/60">{auth.user?.email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 bg-red-500/20 text-red-300 px-4 py-2 rounded-lg hover:bg-red-500/30 transition"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-light mb-4">Order History</h2>
            {orders.length === 0 ? (
              <div className="text-center py-8">
                <ShoppingBag size={48} className="mx-auto mb-4 text-white/40" />
                <p className="text-white/60">No orders yet</p>
              </div>
            ) : (
              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="bg-white/5 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-sm text-white/60">Order #{order.id}</p>
                        <p className="text-sm">{new Date(order.date).toLocaleDateString()}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        order.status === 'completed' ? 'bg-green-500/20 text-green-300' :
                        order.status === 'pending' ? 'bg-yellow-500/20 text-yellow-300' :
                        'bg-red-500/20 text-red-300'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                    <div className="space-y-2">
                      {order.items.map((item) => (
                        <div key={item.id} className="flex justify-between">
                          <span>{item.name} x{item.quantity}</span>
                          <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-white/10 mt-4 pt-4 flex justify-between">
                      <span>Total</span>
                      <span className="text-lime-400">${order.total.toFixed(2)}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}