import React from 'react';
import { useProducts } from '../../hooks/useProducts';
import { ProductCard } from '../ProductCard/ProductCard';
import { CATEGORIES } from '../../utils/constants';
import { Loading } from '../Common';

export const ProductCatalog: React.FC = () => {
  const { products, loading, error, searchProducts, filterByCategory, resetFilters } =
    useProducts();
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('');

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    if (value.trim()) {
      searchProducts(value);
    } else {
      resetFilters();
    }
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    if (category) {
      filterByCategory(category);
    } else {
      resetFilters();
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Erro ao carregar produtos</div>;
  }

  return (
    <div className="product-catalog py-8">
      <div className="container mx-auto px-4">
        
        {/* Filters */}
        <div className="mb-8 space-y-4">
          
          {/* Search */}
          <input
            type="text"
            placeholder="Buscar produtos..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-600"
          />

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleCategoryFilter('')}
              className={`px-4 py-2 rounded transition ${
                selectedCategory === ''
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              Todos
            </button>
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryFilter(category)}
                className={`px-4 py-2 rounded transition ${
                  selectedCategory === category
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {products.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            Nenhum produto encontrado
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
