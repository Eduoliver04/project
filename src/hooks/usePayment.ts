import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { paymentService } from '../services/paymentService';
import { setError, setLoading } from '../store/slices/orderSlice';
import toast from 'react-hot-toast';

export const usePayment = () => {
  const dispatch = useDispatch<AppDispatch>();
  const orders = useSelector((state: RootState) => state.orders);

  const processPayment = async (
    orderId: string,
    amount: number,
    paymentMethodId: string,
    method: 'credit_card' | 'debit_card' | 'pix'
  ) => {
    dispatch(setLoading(true));
    try {
      const response = await paymentService.processPayment({
        orderId,
        amount,
        paymentMethodId,
        method,
      });
      toast.success('Pagamento processado com sucesso!');
      return response.data;
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'Erro ao processar pagamento';
      dispatch(setError(errorMessage));
      toast.error(errorMessage);
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  };

  return {
    ...orders,
    processPayment,
  };
};
