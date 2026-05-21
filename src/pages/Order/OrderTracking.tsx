import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Common';

export const OrderTracking: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-3xl font-bold mb-8">Acompanhamento de Pedido</h1>

        {/* Order Status */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-2xl font-bold mb-4">Pedido #123456</h2>

          {/* Timeline */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="flex-1 relative">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <h3 className="ml-4 font-bold">Pedido Confirmado</h3>
                </div>
                <p className="text-sm text-gray-500 ml-12">27/05/2026 às 14:30</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex-1 relative">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <h3 className="ml-4 font-bold">Pagamento Aprovado</h3>
                </div>
                <p className="text-sm text-gray-500 ml-12">27/05/2026 às 14:35</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex-1 relative">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
                    📦
                  </div>
                  <h3 className="ml-4 font-bold">Preparando Envio</h3>
                </div>
                <p className="text-sm text-gray-500 ml-12">Em processamento...</p>
              </div>
            </div>

            <div className="flex items-center opacity-50">
              <div className="flex-1 relative">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold">
                    🚚
                  </div>
                  <h3 className="ml-4 font-bold">Enviado</h3>
                </div>
                <p className="text-sm text-gray-500 ml-12">Aguardando...</p>
              </div>
            </div>

            <div className="flex items-center opacity-50">
              <div className="flex-1 relative">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <h3 className="ml-4 font-bold">Entregue</h3>
                </div>
                <p className="text-sm text-gray-500 ml-12">Aguardando...</p>
              </div>
            </div>
          </div>
        </div>

        {/* Order Details */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-4">Detalhes do Pedido</h3>

          <div className="space-y-4 border-b pb-4 mb-4">
            <div className="flex justify-between">
              <span>Salmão Fresco (2kg)</span>
              <span>R$ 120,00</span>
            </div>
            <div className="flex justify-between">
              <span>Camarão Rosa (1kg)</span>
              <span>R$ 85,00</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>R$ 205,00</span>
            </div>
            <div className="flex justify-between">
              <span>Frete:</span>
              <span>Grátis</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t pt-2">
              <span>Total:</span>
              <span>R$ 205,00</span>
            </div>
          </div>
        </div>

        <Link to="/" className="mt-8 block">
          <Button variant="outlined" fullWidth>
            Voltar à Página Inicial
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default OrderTracking;
