import React from 'react';
import { Link } from 'react-router-dom';
import { ProductCatalog } from '../components/ProductCatalog/ProductCatalog';
import { Button } from '../components/Common';

export const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-400 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Aqui na Rede Pescados</h1>
          <p className="text-xl mb-8">Os melhores peixes frescos de Brasília entregues na sua porta</p>
          <Link to="/produtos">
            <Button variant="secondary" size="lg">
              Ver Produtos
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-bold mb-2">Entrega Rápida</h3>
              <p className="text-gray-600">Peixes frescos em até 24 horas</p>
            </div>
            <div>
              <div className="text-4xl mb-4">❄️</div>
              <h3 className="text-xl font-bold mb-2">Frescos & Gelados</h3>
              <p className="text-gray-600">Embalagem especial com gelo</p>
            </div>
            <div>
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold mb-2">Qualidade Garantida</h3>
              <p className="text-gray-600">Procedência verificada</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Nossos Produtos</h2>
          <ProductCatalog />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para Encomendar?</h2>
          <p className="mb-6 text-lg">Faça seu pedido agora e desfrute dos melhores peixes frescos</p>
          <Link to="/produtos">
            <Button variant="primary" size="lg">
              Fazer Pedido
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
