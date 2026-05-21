import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Button, Input } from '../../components/Common';
import toast from 'react-hot-toast';

export const Register: React.FC = () => {
  const navigate = useNavigate();
  const { register, loading } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  });
  const [errors, setErrors] = useState({ name: '', email: '', password: '', phone: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({ name: '', email: '', password: '', phone: '' });

    if (!formData.name) {
      setErrors((prev) => ({ ...prev, name: 'Nome é obrigatório' }));
      return;
    }

    if (!formData.email) {
      setErrors((prev) => ({ ...prev, email: 'Email é obrigatório' }));
      return;
    }

    if (!formData.password || formData.password.length < 6) {
      setErrors((prev) => ({ ...prev, password: 'Senha deve ter pelo menos 6 caracteres' }));
      return;
    }

    if (!formData.phone) {
      setErrors((prev) => ({ ...prev, phone: 'Telefone é obrigatório' }));
      return;
    }

    const success = await register(formData);
    if (success) {
      toast.success('Conta criada com sucesso!');
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Criar Conta</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Nome Completo"
            type="text"
            placeholder="Seu nome"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            fullWidth
          />

          <Input
            label="Email"
            type="email"
            placeholder="seu@email.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            fullWidth
          />

          <Input
            label="Telefone"
            type="tel"
            placeholder="(61) 9XXXX-XXXX"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            fullWidth
          />

          <Input
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
            name="password"
            value={formData.password}
            onChange={handleChange}
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
            Criar Conta
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600 mb-4">Já tem conta?</p>
          <a href="/login" className="text-orange-600 hover:text-orange-700 font-bold">
            Fazer login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
