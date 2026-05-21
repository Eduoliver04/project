import React from 'react';
import { ProductCatalog } from '../components/ProductCatalog/ProductCatalog';

export const Products: React.FC = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Catálogo de Produtos</h1>
        <ProductCatalog />
      </div>
    </div>
  );
};

export default Products;
