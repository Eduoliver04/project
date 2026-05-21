import { CartItem } from './cart';

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    cep: string;
  };
  paymentMethod: 'credit_card' | 'debit_card' | 'pix';
  createdAt: string;
  updatedAt: string;
}
