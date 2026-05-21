import api from './api';
import { User } from '../types/user';

export const authService = {
  login: async (email: string, password: string) => {
    return api.post<{ user: User; token: string }>('/auth/login', {
      email,
      password,
    });
  },

  register: async (userData: {
    name: string;
    email: string;
    password: string;
    phone: string;
  }) => {
    return api.post<{ user: User; token: string }>('/auth/register', userData);
  },

  logout: async () => {
    return api.post('/auth/logout', {});
  },

  verifyToken: async (token: string) => {
    return api.post<User>('/auth/verify', { token });
  },

  refreshToken: async () => {
    return api.post('/auth/refresh', {});
  },
};
