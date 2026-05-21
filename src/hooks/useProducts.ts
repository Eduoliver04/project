import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { RootState, AppDispatch } from '../store/store';
import { fetchProducts } from '../store/slices/productsSlice';

export const useProducts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useSelector((state: RootState) => state.products);
  const [filteredProducts, setFilteredProducts] = useState(items);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    setFilteredProducts(items);
  }, [items]);

  const filterByCategory = (category: string) => {
    const filtered = items.filter(product => product.category === category);
    setFilteredProducts(filtered);
  };

  const searchProducts = (query: string) => {
    const filtered = items.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const resetFilters = () => {
    setFilteredProducts(items);
  };

  return {
    products: filteredProducts || items,
    allProducts: items,
    loading,
    error,
    filterByCategory,
    searchProducts,
    resetFilters,
  };
};
