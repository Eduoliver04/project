# 🚀 QUICKSTART - Aqui na Rede Pescados

## ⚡ Iniciar em 3 passos

### 1. Instalar Dependências (primeira vez apenas)
```bash
npm install
```

### 2. Configurar Variáveis de Ambiente
Crie um arquivo `.env.local` na raiz do projeto:
```bash
VITE_API_URL=http://localhost:3001/api
VITE_STRIPE_PUBLIC_KEY=seu_stripe_public_key
VITE_ENV=development
```

### 3. Iniciar o Servidor
```bash
npm run dev
```

Pronto! A aplicação abrirá em `http://localhost:3000` 🎉

---

## 🎯 Comandos Úteis

### Desenvolvimento
```bash
npm run dev          # Inicia servidor com hot reload
```

### Build
```bash
npm run build        # Build otimizado para produção
npm run preview      # Visualiza o build localmente
```

### Testes
```bash
npm run test         # Executa testes
npm run test:watch   # Modo watch
```

### Lint
```bash
npm run lint         # Verifica style do código
npm run type-check   # Verifica tipos TypeScript
```

---

## 📱 Estrutura de Rotas

| Rota | Descrição |
|------|-----------|
| `/` | Página inicial |
| `/produtos` | Catálogo de produtos |
| `/carrinho` | Carrinho de compras |
| `/checkout` | Checkout e pagamento |
| `/login` | Página de login |
| `/register` | Criar nova conta |
| `/admin` | Painel administrativo |
| `/meus-pedidos` | Acompanhar pedidos |
| `/ordem-confirmada` | Confirmação de pedido |

---

## 🔑 Funcionalidades Principais

### 1. Catálogo de Produtos
- Busca por nome
- Filtro por categoria
- Card com preço e descrição
- Botão "Adicionar ao Carrinho"

### 2. Carrinho de Compras
- Adicionar/remover produtos
- Aumentar/diminuir quantidade
- Total automático
- Persistência em localStorage

### 3. Checkout
- Dados de entrega
- Múltiplas formas de pagamento:
  - Cartão de Crédito
  - Cartão de Débito
  - PIX

### 4. Autenticação
- Login com email e senha
- Registro de novo usuário
- JWT token storage
- Logout com limpeza de dados

### 5. Painel Admin
- Cadastrar novos produtos
- Listar produtos
- Gerenciar pedidos
- Atualizar status de pedidos

---

## 🎨 Customização

### Cores
Edite `tailwind.config.js`:
```javascript
colors: {
  'primary-orange': '#FF6633',
  'primary-blue': '#001F3F',
}
```

### Fonts
Edite `src/styles/variables.css`:
```css
--font-primary: 'Inter', sans-serif;
```

### API URL
Edite `.env.local`:
```bash
VITE_API_URL=sua_api_url
```

---

## 🐛 Troubleshooting

### Porta 3000 em uso?
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID [PID] /F

# Linux/Mac
lsof -i :3000
kill -9 [PID]
```

### Limpar cache
```bash
npm run build --clean
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors
```bash
npm run type-check
```

---

## 📚 Estrutura de Componentes

### Header
- Logo
- Navegação
- Carrinho
- Autenticação

### ProductCard
- Imagem
- Nome
- Preço
- Categoria
- Quantidade
- Botão adicionar

### ShoppingCart
- Lista de itens
- Resumo do pedido
- Total
- Botão checkout

### Checkout
- Dados de entrega
- Resumo de pedido
- Formulário de pagamento

---

## 🔒 Segurança

- ✅ Token JWT no localStorage
- ✅ Interceptador de erro 401
- ✅ Validação de email/CEP/CPF
- ✅ Proteção de rotas admin

---

## 🚀 Deploy

### Vercel
```bash
npm run build
```
Upload a pasta `dist/`

### Netlify
```bash
npm run build
```
Conecte o repositório

### Docker
```dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

---

## 📞 Support

**Email:** contato@aquinaredepescados.com.br
**Telefone:** (61) 98765-4321
**Localização:** Brasília - DF

---

## 📄 Documentação

- `README.md` - Documentação completa
- `IMPLEMENTACAO.md` - Resumo da implementação
- `package.json` - Dependências e scripts

---

## ✨ Dicas

1. Use React DevTools para debugar componentes
2. Use Redux DevTools para debugar state
3. Verifique o console do browser para erros
4. Teste responsividade com Chrome DevTools
5. Use Postman para testar API endpoints

---

**Pronto para começar? Execute `npm run dev` e divirta-se! 🎉**
