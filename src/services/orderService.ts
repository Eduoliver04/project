import api from './api';
import { Order } from '../types/order';

export const orderService = {
  create: async (order: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>) => {
    return api.post<Order>('/orders', order);
  },

  getById: async (id: string) => {
    return api.get<Order>(`/orders/${id}`);
  },

  getByUser: async (userId: string) => {
    return api.get<Order[]>(`/orders/user/${userId}`);
  },

  getAll: async () => {
    return api.get<Order[]>('/orders');
  },

  update: async (id: string, updates: Partial<Order>) => {
    return api.put<Order>(`/orders/${id}`, updates);
  },

  updateStatus: async (id: string, status: Order['status']) => {
    return api.patch(`/orders/${id}/status`, { status });
  },
};
