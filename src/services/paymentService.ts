import api from './api';
import { Payment } from '../types/payment';

export const paymentService = {
  createPaymentIntent: async (amount: number, orderId: string) => {
    return api.post('/payments/intent', { amount, orderId });
  },

  processPayment: async (paymentData: {
    orderId: string;
    amount: number;
    paymentMethodId: string;
    method: 'credit_card' | 'debit_card' | 'pix';
  }) => {
    return api.post<Payment>('/payments', paymentData);
  },

  getPaymentStatus: async (paymentId: string) => {
    return api.get(`/payments/${paymentId}`);
  },

  confirmPayment: async (paymentId: string) => {
    return api.post(`/payments/${paymentId}/confirm`, {});
  },
};
