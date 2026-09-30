# Aqui na Rede Pescados — E-commerce de Peixes Frescos

[![Build](https://github.com/Eduoliver04/project/actions/workflows/build.yml/badge.svg)](https://github.com/Eduoliver04/project/actions/workflows/build.yml)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-4-646CFF?logo=vite&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-1.9-764ABC?logo=redux&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?logo=tailwindcss&logoColor=white)

Front-end de um e-commerce de pescados em Brasília-DF, desenvolvido no **Projeto Integrador I**
do curso de Análise e Desenvolvimento de Sistemas do **UniCEUB**. SPA em React + TypeScript com
catálogo, carrinho, autenticação, checkout, acompanhamento de pedidos e painel administrativo.

Documentação complementar: [guia rápido](QUICKSTART.md) · [documentação técnica](DOCUMENTACAO.md)

## 🚀 Como Começar

### Pré-requisitos
- Node.js 16+
- npm ou yarn

### Instalação

1. Instale as dependências:
```bash
npm install
```

2. Configure as variáveis de ambiente criando um arquivo `.env.local`:
```bash
VITE_API_URL=http://localhost:3001/api
VITE_STRIPE_PUBLIC_KEY=seu_stripe_public_key_aqui
VITE_ENV=development
```

### Desenvolvimento

Para iniciar o servidor de desenvolvimento:
```bash
npm run dev
```

A aplicação será aberta em `http://localhost:3000`

### Build para Produção

Para criar a build otimizada:
```bash
npm run build
```

Para testar a build localmente:
```bash
npm run preview
```

## 📁 Estrutura do Projeto

```
src/
├── components/        # Componentes reutilizáveis
│   ├── Header/       # Cabeçalho
│   ├── Footer/       # Rodapé
│   ├── ProductCard/  # Cartão de produto
│   ├── ProductCatalog/ # Catálogo de produtos
│   ├── ShoppingCart/ # Carrinho de compras
│   ├── PaymentGateway/ # Integração de pagamento
│   ├── AdminPanel/   # Painel administrativo
│   └── Common/       # Componentes comuns (Button, Input, Modal)
├── pages/            # Páginas da aplicação
│   ├── Home.tsx
│   ├── Products.tsx
│   ├── Cart.tsx
│   ├── Checkout.tsx
│   ├── Auth/         # Autenticação (Login, Register)
│   ├── Admin/        # Admin
│   └── Order/        # Pedidos
├── services/         # Serviços de API
├── hooks/            # Custom hooks
├── store/            # Redux store
│   ├── slices/       # Redux slices
│   └── store.ts
├── types/            # TypeScript types
├── utils/            # Funções auxiliares
├── styles/           # Estilos globais CSS
└── App.tsx           # Componente principal

```

## 🎨 Design System

### Cores Principais
- Primary Orange: `#FF6633`
- Secondary Blue: `#001F3F`
- Success Green: `#00D084`
- Warning Orange: `#FFA500`

### Tipografia
- Font: Inter
- H1: 2.5rem (Bold)
- H2: 2rem (Bold)
- Body: 1rem (Regular)

## 🔌 Serviços de API

Os serviços de API estão em `src/services/`:
- `api.ts` - Configuração base do Axios
- `productService.ts` - Gerenciamento de produtos
- `orderService.ts` - Gerenciamento de pedidos
- `paymentService.ts` - Integração de pagamentos
- `authService.ts` - Autenticação

## 🗂️ Redux Store

O estado da aplicação é gerenciado com Redux Toolkit:
- `cartSlice` - Estado do carrinho
- `productsSlice` - Estado dos produtos
- `userSlice` - Estado do usuário
- `orderSlice` - Estado dos pedidos
- `uiSlice` - Estado da UI

## 🪝 Custom Hooks

Hooks personalizados para facilitar a lógica:
- `useCart()` - Gerenciar carrinho
- `useProducts()` - Gerenciar produtos
- `useAuth()` - Gerenciar autenticação
- `usePayment()` - Gerenciar pagamentos
- `useFetch()` - Fetch de dados

## 📦 Dependências Principais

- React 18.2
- React Router 6.14
- Redux Toolkit 1.9
- Axios 1.4
- Tailwind CSS 3.3
- React Hot Toast 2.4
- Framer Motion 10.12
- React Hook Form 7.45

## 🔐 Autenticação

O sistema utiliza token JWT armazenado no localStorage. O interceptor de Axios adiciona o token automaticamente em todas as requisições autenticadas.

## 💳 Pagamento

A integração de pagamento utiliza Stripe com suporte para:
- Cartão de Crédito
- Cartão de Débito
- PIX

## 🧪 Testes

O projeto ainda não tem testes unitários. A cada push, o GitHub Actions confere os tipos
(`npm run type-check`) e gera a build de produção (`npm run build`).

## 🎯 Funcionalidades

- ✅ Catálogo de produtos com filtro e busca
- ✅ Carrinho de compras com persistência local
- ✅ Sistema de autenticação
- ✅ Checkout com múltiplas formas de pagamento
- ✅ Painel administrativo
- ✅ Acompanhamento de pedidos
- ✅ Design responsivo

## 🚀 Deploy

Para fazer deploy, certifique-se de:
1. Configurar as variáveis de ambiente em produção
2. Executar `npm run build`
3. Fazer deploy da pasta `dist/` para seu servidor

## 📝 Checklist de Desenvolvimento

- [x] Projeto criado com Vite
- [x] Dependências instaladas
- [x] Tailwind CSS configurado
- [x] Redux store configurado
- [x] Tipos TypeScript criados
- [x] Serviços de API implementados
- [x] Custom hooks criados
- [x] Componentes implementados
- [x] Páginas implementadas
- [x] Roteamento configurado
- [x] Estilos globais aplicados
- [ ] Testes unitários
- [x] Integração contínua (type-check + build)

## 📄 Licença

Projeto acadêmico desenvolvido para o UniCEUB. Todos os direitos reservados.
