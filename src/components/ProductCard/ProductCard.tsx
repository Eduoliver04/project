import React from 'react';
import { useCart } from '../../hooks/useCart';
import { Product } from '../../types/product';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = React.useState(1);

  const handleAddToCart = () => {
    if (quantity < 1) {
      toast.error('Quantidade inválida');
      return;
    }

    addToCart({
      ...product,
      cartQuantity: quantity,
    });

    toast.success(`${product.name} adicionado ao carrinho!`);
    setQuantity(1);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
      
      {/* Image */}
      <Link to={`/produtos/${product.id}`}>
        <div className="relative overflow-hidden bg-gray-200 h-48">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-110 transition"
          />
          {product.tags?.includes('destaque') && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
              DESTAQUE
            </div>
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="p-4">
        <Link to={`/produtos/${product.id}`}>
          <h3 className="text-lg font-bold text-gray-800 hover:text-orange-600 transition">
            {product.name}
          </h3>
        </Link>

        <p className="text-sm text-gray-600 mt-2">{product.category}</p>

        <p className="text-sm text-gray-500 mt-2 line-clamp-2">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-orange-600">
              R$ {product.price.toFixed(2)}
            </p>
            <p className="text-xs text-gray-500">por {product.weight}</p>
          </div>
        </div>

        {/* Quantity & Add to Cart */}
        <div className="mt-4 flex gap-2">
          <div className="flex items-center border border-gray-300 rounded">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-2 py-1 text-gray-600 hover:bg-gray-100"
            >
              −
            </button>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-12 text-center border-0 outline-none"
              min="1"
            />
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-2 py-1 text-gray-600 hover:bg-gray-100"
            >
              +
            </button>
          </div>
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-orange-600 text-white font-bold py-2 rounded hover:bg-orange-700 transition"
          >
            🛒 Adicionar
          </button>
        </div>
      </div>
    </div>
  );
};
