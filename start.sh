#!/bin/bash
# Script para iniciar o projeto Aqui na Rede Pescados

echo "================================"
echo "Aqui na Rede Pescados - E-commerce"
echo "================================"
echo ""

# Verificar se node_modules existe
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependências..."
    npm install
    echo "✅ Dependências instaladas!"
    echo ""
fi

# Verificar se .env.local existe
if [ ! -f ".env.local" ]; then
    echo "⚙️  Criando arquivo .env.local..."
    cat > .env.local << EOF
VITE_API_URL=http://localhost:3001/api
VITE_STRIPE_PUBLIC_KEY=pk_test_sua_chave_publica_aqui
VITE_ENV=development
EOF
    echo "✅ Arquivo .env.local criado!"
    echo ""
fi

echo "🚀 Iniciando servidor de desenvolvimento..."
echo ""
npm run dev
