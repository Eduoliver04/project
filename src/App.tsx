import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import { store, AppDispatch } from './store/store';
import { Toaster } from 'react-hot-toast';

// Components
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import AdminPanel from './pages/Admin/AdminPanel';
import OrderSuccess from './pages/Order/OrderSuccess';
import OrderTracking from './pages/Order/OrderTracking';
import NotFound from './pages/NotFound';

// Styles
import './styles/globals.css';
import './styles/variables.css';

function AppContent() {
  const dispatch = useDispatch<AppDispatch>();

  // Verificar autenticação ao carregar
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Validar token com backend
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Products />} />
            <Route path="/carrinho" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/ordem-confirmada" element={<OrderSuccess />} />
            <Route path="/meus-pedidos" element={<OrderTracking />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
      <Toaster position="top-right" />
    </Provider>
  );
}

export default App;
