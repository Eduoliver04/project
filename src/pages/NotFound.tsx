import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Common';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-orange-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-4">Página não encontrada</h2>
        <p className="text-gray-600 mb-8 text-lg">
          Desculpe, a página que você procura não existe.
        </p>
        <Link to="/">
          <Button variant="primary" size="lg">
            Voltar à Página Inicial
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
