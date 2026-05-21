import React, { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import { paymentService } from '../../services/paymentService';
import toast from 'react-hot-toast';
import { Button } from '../Common';

interface PaymentFormProps {
  orderId: string;
  onSuccess: () => void;
}

export const PaymentForm: React.FC<PaymentFormProps> = ({ orderId, onSuccess }) => {
  const { total } = useCart();
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'credit_card' | 'debit_card' | 'pix'>('credit_card');
  const [cardData, setCardData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      if (paymentMethod === 'pix') {
        // PIX payment logic
        await paymentService.processPayment({
          orderId,
          amount: total,
          paymentMethodId: 'pix',
          method: 'pix',
        });
        toast.success('QR Code PIX gerado!');
        onSuccess();
      } else if (paymentMethod === 'credit_card' || paymentMethod === 'debit_card') {
        // Card payment logic (mock)
        if (!cardData.cardNumber || !cardData.cardName || !cardData.expiryDate || !cardData.cvv) {
          toast.error('Preencha todos os dados do cartão');
          setLoading(false);
          return;
        }

        await paymentService.processPayment({
          orderId,
          amount: total,
          paymentMethodId: cardData.cardNumber,
          method: paymentMethod,
        });

        toast.success('Pagamento processado com sucesso!');
        onSuccess();
      }
    } catch (error: any) {
      toast.error(
        error.response?.data?.message || 'Erro ao processar pagamento'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      
      {/* Payment Method Selection */}
      <div className="space-y-2">
        <label className="block text-sm font-bold mb-2">Método de Pagamento</label>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              value="credit_card"
              checked={paymentMethod === 'credit_card'}
              onChange={(e) => setPaymentMethod(e.target.value as 'credit_card')}
              className="mr-2"
            />
            Cartão de Crédito
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="debit_card"
              checked={paymentMethod === 'debit_card'}
              onChange={(e) => setPaymentMethod(e.target.value as 'debit_card')}
              className="mr-2"
            />
            Cartão de Débito
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="pix"
              checked={paymentMethod === 'pix'}
              onChange={(e) => setPaymentMethod(e.target.value as 'pix')}
              className="mr-2"
            />
            PIX
          </label>
        </div>
      </div>

      {/* Card Input */}
      {(paymentMethod === 'credit_card' || paymentMethod === 'debit_card') && (
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Número do Cartão"
            value={cardData.cardNumber}
            onChange={(e) => setCardData({ ...cardData, cardNumber: e.target.value })}
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-orange-600"
            maxLength={19}
          />
          <input
            type="text"
            placeholder="Nome do Titular"
            value={cardData.cardName}
            onChange={(e) => setCardData({ ...cardData, cardName: e.target.value })}
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-orange-600"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="MM/AA"
              value={cardData.expiryDate}
              onChange={(e) => setCardData({ ...cardData, expiryDate: e.target.value })}
              className="border border-gray-300 p-3 rounded focus:outline-none focus:border-orange-600"
              maxLength={5}
            />
            <input
              type="text"
              placeholder="CVV"
              value={cardData.cvv}
              onChange={(e) => setCardData({ ...cardData, cvv: e.target.value })}
              className="border border-gray-300 p-3 rounded focus:outline-none focus:border-orange-600"
              maxLength={3}
            />
          </div>
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={loading}
        variant="primary"
        fullWidth
        loading={loading}
      >
        Pagar R$ {total.toFixed(2)}
      </Button>
    </form>
  );
};
