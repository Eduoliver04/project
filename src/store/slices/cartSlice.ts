import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from '../../types/cart';

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}

const initialState: CartState = {
  items: [],
  total: 0,
  itemCount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        existingItem.cartQuantity += action.payload.cartQuantity;
      } else {
        state.items.push(action.payload);
      }
      
      state.itemCount = state.items.reduce((acc, item) => acc + item.cartQuantity, 0);
      state.total = state.items.reduce((acc, item) => acc + (item.price * item.cartQuantity), 0);
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      state.itemCount = state.items.reduce((acc, item) => acc + item.cartQuantity, 0);
      state.total = state.items.reduce((acc, item) => acc + (item.price * item.cartQuantity), 0);
    },

    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const item = state.items.find(item => item.id === action.payload.id);
      
      if (item) {
        if (action.payload.quantity <= 0) {
          state.items = state.items.filter(i => i.id !== action.payload.id);
        } else {
          item.cartQuantity = action.payload.quantity;
        }
      }
      
      state.itemCount = state.items.reduce((acc, item) => acc + item.cartQuantity, 0);
      state.total = state.items.reduce((acc, item) => acc + (item.price * item.cartQuantity), 0);
    },

    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      state.itemCount = 0;
    },

    loadCartFromStorage: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload;
      state.itemCount = action.payload.reduce((acc, item) => acc + item.cartQuantity, 0);
      state.total = action.payload.reduce((acc, item) => acc + (item.price * item.cartQuantity), 0);
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart, loadCartFromStorage } = cartSlice.actions;
export default cartSlice.reducer;
