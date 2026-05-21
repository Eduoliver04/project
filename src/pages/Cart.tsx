import React from 'react';
import { ShoppingCart } from '../components/ShoppingCart/ShoppingCart';

export const Cart: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <ShoppingCart />
    </div>
  );
};

export default Cart;
