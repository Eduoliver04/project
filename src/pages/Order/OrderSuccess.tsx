import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Common';

export const OrderSuccess: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
        <div className="text-6xl mb-4">✅</div>
        <h1 className="text-3xl font-bold mb-4 text-green-600">Pedido Confirmado!</h1>
        <p className="text-gray-600 mb-6">
          Seu pedido foi realizado com sucesso. Você receberá um email de confirmação em breve.
        </p>
        <p className="text-sm text-gray-500 mb-8">
          Número do pedido: #123456
        </p>
        <Link to="/meus-pedidos">
          <Button variant="primary" fullWidth className="mb-4">
            Acompanhar Pedido
          </Button>
        </Link>
        <Link to="/produtos">
          <Button variant="outlined" fullWidth>
            Continuar Comprando
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
