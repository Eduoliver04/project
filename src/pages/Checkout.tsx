import React, { useState } from 'react';
import { useCart } from '../hooks/useCart';
import { useAuth } from '../hooks/useAuth';
import { orderService } from '../services/orderService';
import { PaymentForm } from '../components/PaymentGateway/PaymentForm';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Button } from '../components/Common';

export const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { items, total, clearCart } = useCart();
  const { user, isAuthenticated } = useAuth();
  const [loading, setLoading] = useState(false);
  const [createdOrderId, setCreatedOrderId] = useState<string | null>(null);

  const [customerInfo, setCustomerInfo] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '',
    address: '',
    city: 'Brasília',
    cep: '',
  });

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    if (items.length === 0) {
      navigate('/carrinho');
      return;
    }
  }, [isAuthenticated, items, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateOrder = async () => {
    if (!customerInfo.phone || !customerInfo.address || !customerInfo.cep) {
      toast.error('Preencha todos os dados de entrega');
      return;
    }

    setLoading(true);

    try {
      const response = await orderService.create({
        userId: user!.id,
        items: items,
        total: total,
        status: 'pending',
        customerInfo: customerInfo,
        paymentMethod: 'credit_card',
      });

      setCreatedOrderId(response.data.id);
      toast.success('Pedido criado! Prossiga com o pagamento');
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Erro ao criar pedido');
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated || items.length === 0) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Order Summary */}
        <div className="lg:col-span-1 order-2 lg:order-1">
          <div className="bg-white p-6 rounded-lg shadow sticky top-24">
            <h2 className="text-2xl font-bold mb-4">Resumo do Pedido</h2>

            <div className="space-y-2 mb-4 border-b pb-4">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>{item.name} x {item.cartQuantity}</span>
                  <span>R$ {(item.price * item.cartQuantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="space-y-2 mb-4 border-b pb-4">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>R$ {total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Frete:</span>
                <span>Grátis</span>
              </div>
            </div>

            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>R$ {total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Checkout Form */}
        <div className="lg:col-span-2 order-1 lg:order-2">
          <div className="space-y-6">
            
            {/* Delivery Information */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-4">Dados de Entrega</h2>

              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Nome Completo"
                  value={customerInfo.name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-orange-600"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={customerInfo.email}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-orange-600"
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Telefone (61) 9XXXX-XXXX"
                  value={customerInfo.phone}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-orange-600"
                  required
                />

                <input
                  type="text"
                  name="address"
                  placeholder="Endereço completo"
                  value={customerInfo.address}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-orange-600"
                  required
                />

                <input
                  type="text"
                  name="cep"
                  placeholder="CEP"
                  value={customerInfo.cep}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-orange-600"
                  required
                />
              </div>

              <Button
                onClick={handleCreateOrder}
                disabled={loading}
                variant="secondary"
                fullWidth
                loading={loading}
                className="mt-4"
              >
                Continuar para Pagamento
              </Button>
            </div>

            {/* Payment */}
            {createdOrderId && (
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-bold mb-4">Pagamento</h2>
                <PaymentForm
                  orderId={createdOrderId}
                  onSuccess={() => {
                    clearCart();
                    navigate('/ordem-confirmada');
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
