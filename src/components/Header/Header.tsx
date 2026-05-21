import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import { useAuth } from '../../hooks/useAuth';

export const Header: React.FC = () => {
  const { itemCount } = useCart();
  const { isAuthenticated, isAdmin, user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="bg-orange-600 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold hover:text-orange-100 transition">
          <span>🐟</span>
          <span>Aqui na Rede</span>
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex gap-6">
          <Link to="/produtos" className="hover:text-orange-200 transition">
            Produtos
          </Link>
          <Link to="/sobre" className="hover:text-orange-200 transition">
            Sobre
          </Link>
          <Link to="/contato" className="hover:text-orange-200 transition">
            Contato
          </Link>
          {isAdmin && (
            <Link to="/admin" className="hover:text-orange-200 transition font-bold">
              Admin
            </Link>
          )}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Cart */}
          <Link
            to="/carrinho"
            className="relative bg-blue-900 px-4 py-2 rounded hover:bg-blue-800 transition font-bold"
          >
            🛒 ({itemCount})
          </Link>

          {/* User */}
          {isAuthenticated ? (
            <div className="relative group">
              <button className="px-4 py-2 rounded hover:bg-orange-700 transition font-bold">
                👤 {user?.name}
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow hidden group-hover:block">
                <Link to="/meu-perfil" className="block px-4 py-2 hover:bg-gray-100">
                  Meu Perfil
                </Link>
                <Link to="/meus-pedidos" className="block px-4 py-2 hover:bg-gray-100">
                  Meus Pedidos
                </Link>
                <button
                  onClick={logout}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Sair
                </button>
              </div>
            </div>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 rounded hover:bg-orange-700 transition font-bold"
            >
              Login
            </Link>
          )}

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-orange-700 px-4 py-4 space-y-2">
          <Link to="/produtos" className="block py-2 hover:text-orange-200">Produtos</Link>
          <Link to="/sobre" className="block py-2 hover:text-orange-200">Sobre</Link>
          <Link to="/contato" className="block py-2 hover:text-orange-200">Contato</Link>
          {isAdmin && <Link to="/admin" className="block py-2 font-bold hover:text-orange-200">Admin</Link>}
        </nav>
      )}
    </header>
  );
};
