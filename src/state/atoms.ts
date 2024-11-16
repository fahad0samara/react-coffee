import { atom } from 'recoil';
import Cookies from 'js-cookie';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'completed' | 'cancelled';
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

// Initialize auth state from cookie
const savedUser = Cookies.get('user');
const initialAuthState: AuthState = {
  isAuthenticated: !!savedUser,
  user: savedUser ? JSON.parse(savedUser) : null,
};

export const cartState = atom<CartItem[]>({
  key: 'cartState',
  default: [],
});

export const authState = atom<AuthState>({
  key: 'authState',
  default: initialAuthState,
});

export const ordersState = atom<Order[]>({
  key: 'ordersState',
  default: [],
});