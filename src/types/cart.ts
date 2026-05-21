import { Product } from './product';

export interface CartItem extends Omit<Product, 'description'> {
  cartQuantity: number;
}
