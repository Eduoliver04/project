import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';

export const ShoppingCart: React.FC = () => {
  const { items, total, removeFromCart, updateQuantity, clearCart, isEmpty } =
    useCart();

  if (isEmpty) {
    return (
      <div className="empty-cart text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Carrinho Vazio</h2>
        <p className="text-gray-600 mb-6">Adicione alguns produtos para começar!</p>
        <Link
          to="/produtos"
          className="inline-block bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition"
        >
          Continuar Comprando
        </Link>
      </div>
    );
  }

  return (
    <div className="shopping-cart py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Carrinho de Compras</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex gap-4 bg-white p-4 rounded-lg shadow">
                
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />

                {/* Details */}
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{item.name}</h3>
                  <p className="text-gray-600">R$ {item.price.toFixed(2)}</p>

                  {/* Quantity */}
                  <div className="mt-2 flex items-center gap-2">
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          Math.max(1, item.cartQuantity - 1)
                        )
                      }
                      className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-100 transition"
                    >
                      −
                    </button>
                    <span className="w-8 text-center font-semibold">{item.cartQuantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.cartQuantity + 1)
                      }
                      className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-100 transition"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Price & Remove */}
                <div className="text-right">
                  <p className="font-bold text-lg">
                    R$ {(item.price * item.cartQuantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 text-sm mt-2 transition"
                  >
                    Remover
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-white p-6 rounded-lg shadow h-fit sticky top-24">
            <h2 className="text-xl font-bold mb-4">Resumo</h2>

            <div className="space-y-2 mb-4 border-b pb-4">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>R$ {total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Frete:</span>
                <span>R$ 0,00</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-2">
                <span>Total:</span>
                <span>R$ {total.toFixed(2)}</span>
              </div>
            </div>

            <Link
              to="/checkout"
              className="block w-full bg-orange-600 text-white text-center py-3 rounded font-bold hover:bg-orange-700 transition mb-2"
            >
              Ir para Checkout
            </Link>

            <Link
              to="/produtos"
              className="block w-full bg-gray-200 text-center py-3 rounded font-bold hover:bg-gray-300 transition"
            >
              Continuar Comprando
            </Link>

            <button
              onClick={clearCart}
              className="w-full text-red-500 hover:text-red-700 mt-4 text-sm transition"
            >
              Limpar Carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
