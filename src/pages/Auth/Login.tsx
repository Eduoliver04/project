import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Button, Input } from '../../components/Common';
import toast from 'react-hot-toast';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login, loading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({ email: '', password: '' });

    if (!email) {
      setErrors((prev) => ({ ...prev, email: 'Email é obrigatório' }));
      return;
    }

    if (!password) {
      setErrors((prev) => ({ ...prev, password: 'Senha é obrigatória' }));
      return;
    }

    const success = await login(email, password);
    if (success) {
      toast.success('Login realizado com sucesso!');
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Email"
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
            fullWidth
          />

          <Input
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
            fullWidth
          />

          <Button
            type="submit"
            disabled={loading}
            variant="primary"
            fullWidth
            loading={loading}
          >
            Entrar
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600 mb-4">Não tem conta?</p>
          <a href="/register" className="text-orange-600 hover:text-orange-700 font-bold">
            Criar nova conta
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
