import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Aqui na Rede Pescados</h3>
            <p className="text-gray-300 text-sm">
              Os melhores peixes frescos de Brasília entregues na sua porta.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/produtos" className="hover:text-white transition">Produtos</Link></li>
              <li><Link to="/sobre" className="hover:text-white transition">Sobre Nós</Link></li>
              <li><Link to="/contato" className="hover:text-white transition">Contato</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-bold mb-4">Atendimento</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>📧 contato@aquinaredepescados.com.br</li>
              <li>📱 (61) 98765-4321</li>
              <li>📍 Brasília - DF</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-bold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-orange-500 transition">Facebook</a>
              <a href="#" className="hover:text-orange-500 transition">Instagram</a>
              <a href="#" className="hover:text-orange-500 transition">WhatsApp</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2026 Aqui na Rede Pescados. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
