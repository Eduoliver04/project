import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { productService } from '../../services/productService';
import { orderService } from '../../services/orderService';
import { useProducts } from '../../hooks/useProducts';
import toast from 'react-hot-toast';
import { Button, Loading } from '../Common';
import { Product } from '../../types/product';

export const AdminPanel: React.FC = () => {
  const navigate = useNavigate();
  const { isAdmin } = useAuth();
  const { products } = useProducts();
  const { register, handleSubmit, reset } = useForm();
  const [activeTab, setActiveTab] = useState<'products' | 'orders'>('products');
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState<any[]>([]);
  const [allProducts] = useState<Product[]>(products);

  React.useEffect(() => {
    if (!isAdmin) {
      navigate('/');
      return;
    }

    fetchOrders();
  }, [isAdmin, navigate]);

  const fetchOrders = async () => {
    try {
      const response = await orderService.getAll();
      setOrders(response.data);
    } catch (error) {
      toast.error('Erro ao carregar pedidos');
    }
  };

  const onSubmitProduct = async (data: any) => {
    setLoading(true);
    try {
      await productService.create(data);
      toast.success('Produto cadastrado com sucesso!');
      reset();
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Erro ao cadastrar produto');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateOrderStatus = async (orderId: string, newStatus: string) => {
    try {
      await orderService.updateStatus(orderId, newStatus as any);
      toast.success('Status atualizado!');
      fetchOrders();
    } catch (error) {
      toast.error('Erro ao atualizar status');
    }
  };

  if (!isAdmin) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8">Painel Administrativo</h1>

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab('products')}
            className={`px-6 py-2 rounded font-bold transition ${
              activeTab === 'products'
                ? 'bg-orange-600 text-white'
                : 'bg-white hover:bg-gray-50'
            }`}
          >
            Produtos
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-6 py-2 rounded font-bold transition ${
              activeTab === 'orders'
                ? 'bg-orange-600 text-white'
                : 'bg-white hover:bg-gray-50'
            }`}
          >
            Pedidos
          </button>
        </div>

        {/* Products Tab */}
        {activeTab === 'products' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Form */}
            <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-4">Adicionar Produto</h2>

              <form onSubmit={handleSubmit(onSubmitProduct)} className="space-y-4">
                <input
                  {...register('name', { required: true })}
                  placeholder="Nome do Produto"
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-orange-600"
                />

                <input
                  {...register('price', { required: true, valueAsNumber: true })}
                  type="number"
                  step="0.01"
                  placeholder="Preço (R$)"
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-orange-600"
                />

                <input
                  {...register('category')}
                  placeholder="Categoria"
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-orange-600"
                />

                <input
                  {...register('weight')}
                  placeholder="Peso/Medida (ex: kg)"
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-orange-600"
                />

                <textarea
                  {...register('description')}
                  placeholder="Descrição"
                  className="w-full border border-gray-300 p-2 rounded h-24 focus:outline-none focus:border-orange-600"
                />

                <input
                  {...register('image')}
                  placeholder="URL da Imagem"
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-orange-600"
                />

                <Button
                  type="submit"
                  disabled={loading}
                  variant="primary"
                  fullWidth
                  loading={loading}
                >
                  Cadastrar
                </Button>
              </form>
            </div>

            {/* Products List */}
            <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-4">Produtos Cadastrados</h2>

              <div className="space-y-4 max-h-96 overflow-y-auto">
                {allProducts.length === 0 ? (
                  <p className="text-gray-500">Nenhum produto cadastrado</p>
                ) : (
                  allProducts.map((product) => (
                    <div
                      key={product.id}
                      className="flex gap-4 p-4 border border-gray-200 rounded"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-bold">{product.name}</h3>
                        <p className="text-sm text-gray-600">R$ {product.price.toFixed(2)}</p>
                      </div>
                      <button className="text-red-500 hover:text-red-700 transition">
                        Deletar
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Pedidos</h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100 border-b">
                  <tr>
                    <th className="p-3 text-left">ID</th>
                    <th className="p-3 text-left">Cliente</th>
                    <th className="p-3 text-left">Total</th>
                    <th className="p-3 text-left">Status</th>
                    <th className="p-3 text-left">Ação</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id} className="border-b hover:bg-gray-50">
                      <td className="p-3">{order.id.slice(0, 8)}</td>
                      <td className="p-3">{order.customerInfo.name}</td>
                      <td className="p-3">R$ {order.total.toFixed(2)}</td>
                      <td className="p-3">
                        <select
                          value={order.status}
                          onChange={(e) =>
                            handleUpdateOrderStatus(order.id, e.target.value)
                          }
                          className="border border-gray-300 p-1 rounded focus:outline-none focus:border-orange-600"
                        >
                          <option value="pending">Pendente</option>
                          <option value="confirmed">Confirmado</option>
                          <option value="shipped">Enviado</option>
                          <option value="delivered">Entregue</option>
                        </select>
                      </td>
                      <td className="p-3">
                        <button className="text-blue-600 hover:text-blue-800 transition">
                          Ver Detalhes
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
