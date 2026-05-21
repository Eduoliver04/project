@echo off
REM Script para iniciar o projeto Aqui na Rede Pescados no Windows

echo ================================
echo Aqui na Rede Pescados - E-commerce
echo ================================
echo.

REM Verificar se node_modules existe
if not exist "node_modules" (
    echo Instalando dependencias...
    call npm install
    echo Dependencias instaladas!
    echo.
)

REM Verificar se .env.local existe
if not exist ".env.local" (
    echo Criando arquivo .env.local...
    (
        echo VITE_API_URL=http://localhost:3001/api
        echo VITE_STRIPE_PUBLIC_KEY=pk_test_sua_chave_publica_aqui
        echo VITE_ENV=development
    ) > .env.local
    echo Arquivo .env.local criado!
    echo.
)

echo Iniciando servidor de desenvolvimento...
echo.
call npm run dev
