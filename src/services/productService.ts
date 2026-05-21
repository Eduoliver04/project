import api from './api';
import { Product } from '../types/product';

export const productService = {
  getAll: async () => {
    return api.get<Product[]>('/products');
  },

  getById: async (id: string) => {
    return api.get<Product>(`/products/${id}`);
  },

  getByCategory: async (category: string) => {
    return api.get<Product[]>(`/products?category=${category}`);
  },

  search: async (query: string) => {
    return api.get<Product[]>(`/products/search?q=${query}`);
  },

  create: async (product: Omit<Product, 'id'>) => {
    return api.post<Product>('/products', product);
  },

  update: async (id: string, product: Partial<Product>) => {
    return api.put<Product>(`/products/${id}`, product);
  },

  delete: async (id: string) => {
    return api.delete(`/products/${id}`);
  },
};
