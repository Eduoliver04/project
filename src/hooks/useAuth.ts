import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { loginSuccess, logout, setLoading, setError } from '../store/slices/userSlice';
import { authService } from '../services/authService';

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, isAuthenticated, isAdmin, token, loading, error } = useSelector(
    (state: RootState) => state.user
  );

  const handleLogin = async (email: string, password: string) => {
    dispatch(setLoading(true));
    try {
      const response = await authService.login(email, password);
      dispatch(loginSuccess(response.data));
      localStorage.setItem('token', response.data.token);
      return true;
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || 'Erro ao fazer login';
      dispatch(setError(errorMessage));
      return false;
    }
  };

  const handleLogout = async () => {
    try {
      await authService.logout();
      dispatch(logout());
      localStorage.removeItem('token');
    } catch (err) {
      console.error('Erro ao fazer logout', err);
    }
  };

  const handleRegister = async (userData: {
    name: string;
    email: string;
    password: string;
    phone: string;
  }) => {
    dispatch(setLoading(true));
    try {
      const response = await authService.register(userData);
      dispatch(loginSuccess(response.data));
      localStorage.setItem('token', response.data.token);
      return true;
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || 'Erro ao registrar';
      dispatch(setError(errorMessage));
      return false;
    }
  };

  return {
    user,
    isAuthenticated,
    isAdmin,
    token,
    loading,
    error,
    login: handleLogin,
    logout: handleLogout,
    register: handleRegister,
  };
};
