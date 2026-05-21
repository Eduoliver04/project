import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import AdminPanel from '../../components/AdminPanel/AdminPanel';

export const AdminPanelPage: React.FC = () => {
  const { isAdmin } = useAuth();

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-2xl font-bold text-red-500">Acesso negado</p>
      </div>
    );
  }

  return <AdminPanel />;
};

export default AdminPanelPage;
