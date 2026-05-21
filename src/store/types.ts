import { Product } from '../types/product';
import { CartItem } from '../types/cart';
import { Order } from '../types/order';
import { User } from '../types/user';

export interface RootState {
  cart: {
    items: CartItem[];
    total: number;
    itemCount: number;
  };
  products: {
    items: Product[];
    loading: boolean;
    error: string | null;
    selectedProduct: Product | null;
  };
  user: {
    user: User | null;
    isAuthenticated: boolean;
    isAdmin: boolean;
    token: string | null;
    loading: boolean;
    error: string | null;
  };
  orders: {
    items: Order[];
    loading: boolean;
    error: string | null;
  };
  ui: {
    isLoading: boolean;
    notification: string | null;
  };
}
