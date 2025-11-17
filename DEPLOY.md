# 🚀 Deploy no Vercel - App de Receitas

Este projeto está configurado para deploy no Vercel!

## 📋 Pré-requisitos

1. Conta no [Vercel](https://vercel.com)
2. Node.js 18 ou superior instalado

## 🔧 Configuração

### 1. Clonar e instalar dependências

```bash
npm install
```

### 2. Configurar variáveis de ambiente

Copie o arquivo `.env.example` para `.env`:

```bash
cp .env.example .env
```

Para **desenvolvimento local**, deixe:
```env
REACT_APP_BASE_URL=http://localhost:3000
```

### 3. Testar localmente

```bash
npm start
```

## 🌐 Deploy no Vercel

### Opção 1: Via Vercel CLI (Recomendado)

1. Instale a Vercel CLI:
```bash
npm i -g vercel
```

2. Faça login:
```bash
vercel login
```

3. Deploy:
```bash
npm run build
vercel --prod
```

4. Configure a variável de ambiente no Vercel:
   - Vá para o dashboard do projeto no Vercel
   - Settings → Environment Variables
   - Adicione: `REACT_APP_BASE_URL` = `https://seu-app.vercel.app`
   - Redeploy o projeto

### Opção 2: Via GitHub (Mais Fácil)

1. Faça push do código para o GitHub:
```bash
git add .
git commit -m "Configurar deploy para Vercel"
git push origin main
```

2. No [Vercel Dashboard](https://vercel.com/dashboard):
   - Clique em "Add New Project"
   - Importe seu repositório do GitHub
   - Configure a variável de ambiente:
     - `REACT_APP_BASE_URL` = `https://seu-app.vercel.app` (atualize após o primeiro deploy)
   - Clique em "Deploy"

3. Após o primeiro deploy:
   - Copie a URL gerada (ex: `https://seu-app.vercel.app`)
   - Vá em Settings → Environment Variables
   - Atualize o valor de `REACT_APP_BASE_URL` com a URL real
   - Em Deployments, faça um redeploy

## 📝 Arquivos de Configuração

### `vercel.json`
Configurado para SPA React com rewrites.

### `.env.example`
Template de variáveis de ambiente.

## ⚡ Scripts Disponíveis

- `npm start` - Desenvolvimento local
- `npm run build` - Build de produção
- `npm test` - Executar testes
- `npm run cy:open` - Abrir Cypress

## 🎯 Funcionalidades

- ✅ Receitas de comidas e bebidas
- ✅ Busca e filtros por categorias
- ✅ Favoritar receitas (localStorage)
- ✅ Marcar receitas como concluídas
- ✅ Compartilhar receitas
- ✅ Modo responsivo (mobile-first)

## 📱 Importante

Este app foi desenvolvido com foco em dispositivos móveis (360x640px). Recomenda-se testar em modo responsivo do navegador.

## 🔒 Dados Persistentes

Os dados de usuário são salvos no `localStorage` do navegador:
- Receitas favoritas
- Receitas concluídas
- Receitas em progresso
- Email do usuário

**Nota**: Se precisar de persistência entre dispositivos, considere adicionar um backend.

## 🆘 Problemas Comuns

### Erro ao compartilhar receitas
Certifique-se de que `REACT_APP_BASE_URL` está configurado corretamente no Vercel.

### Build falha
Verifique se todas as dependências foram instaladas: `npm install`

## 📚 APIs Utilizadas

- [TheMealDB](https://www.themealdb.com/api.php) - API de comidas
- [TheCocktailDB](https://www.thecocktaildb.com/api.php) - API de drinks

---

Desenvolvido com ❤️ usando React
