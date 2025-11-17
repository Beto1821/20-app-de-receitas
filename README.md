# 🍳 App de Receitas

<div align="center">
  
![React](https://img.shields.io/badge/React-17.0.2-61DAFB?style=for-the-badge&logo=react)
![Node](https://img.shields.io/badge/Node.js-18.x-339933?style=for-the-badge&logo=node.js)
![Context API](https://img.shields.io/badge/Context_API-State_Management-61DAFB?style=for-the-badge&logo=react)
![Bootstrap](https://img.shields.io/badge/Bootstrap-4.6-7952B3?style=for-the-badge&logo=bootstrap)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel)

Aplicação React mobile-first para buscar, visualizar, filtrar, favoritar e acompanhar o progresso de preparação de receitas de comidas e bebidas.

[Demo](https://20-app-de-receitas.vercel.app/) • [Documentação](#-documentação) • [Instalação](#-instalação) • [Deploy](#-deploy)

</div>

---

## 📋 Sobre o Projeto

Aplicação desenvolvida com React utilizando **Hooks** e **Context API** para gerenciamento de estado. O app consome duas APIs distintas (TheMealDB e TheCocktailDB) e oferece uma experiência completa de busca e gerenciamento de receitas.

### ✨ Funcionalidades

- 🔍 **Busca avançada** de receitas por nome, ingrediente ou primeira letra
- 📱 **Interface responsiva** com design mobile-first (360x640px)
- 🍽️ **Categorização** de comidas e bebidas
- ⭐ **Favoritar receitas** com persistência local
- ✅ **Acompanhamento** de receitas em progresso
- 📊 **Histórico** de receitas concluídas
- 🔗 **Compartilhamento** de receitas via clipboard
- 🎯 **Filtros** por categorias e tipos
- 👤 **Perfil de usuário** com gerenciamento de dados

---

## 🚀 Tecnologias

### Core

- **React** 17.0.2 - Biblioteca JavaScript para interfaces
- **React Router DOM** 5.3.3 - Roteamento da aplicação
- **Context API** - Gerenciamento de estado global
- **Hooks** - useState, useEffect, useContext, custom hooks

### UI/UX

- **React Bootstrap** 2.4.0 - Componentes estilizados
- **Bootstrap** 4.6.2 - Framework CSS
- **React Toastify** 9.0.7 - Notificações elegantes
- **CSS3** - Estilização customizada

### Utilities

- **Clipboard Copy** 4.0.1 - Funcionalidade de copiar para área de transferência
- **PropTypes** 15.7.2 - Validação de tipos

### Testing

- **React Testing Library** 12.1.5 - Testes de componentes
- **Cypress** 9.7.0 - Testes E2E
- **Jest** - Test runner

### Quality & Linting

- **ESLint** 7.32.0 - Análise estática de código
- **Stylelint** 14.9.1 - Linting de CSS

---

## 🎨 Layout

O design foi pensado para **dispositivos móveis** com resolução 360x640px.

📐 [Protótipo no Figma](https://www.figma.com/file/9WXNFMewKRBC5ZawU1EXYG/%5BProjeto%5D%5BFrontend%5D-Recipes-App?node-id=0%3A1)

---

## 📦 Instalação

### Pré-requisitos

- Node.js 18.x ou superior
- npm 10.x ou superior

### Passos

```bash
# Clone o repositório
git clone https://github.com/Beto1821/20-app-de-receitas.git

# Entre no diretório
cd 20-app-de-receitas

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env

# Inicie o servidor de desenvolvimento
npm start
```

O app estará disponível em `http://localhost:3000`

---

## 🌐 Deploy

### Vercel (Recomendado)

O projeto está configurado para deploy automático no Vercel.

```bash
# Instale a Vercel CLI
npm i -g vercel

# Faça login
vercel login

# Deploy
vercel --prod
```

📖 [Guia completo de deploy](./DEPLOY.md)

### Configuração de Variáveis de Ambiente

No Vercel Dashboard, adicione:

```env
REACT_APP_BASE_URL=https://seu-app.vercel.app
```

---

## 🗂️ Estrutura do Projeto

```
src/
├── components/         # Componentes reutilizáveis
│   ├── Header.js
│   ├── Footer.jsx
│   ├── SearchBar.js
│   ├── CategoryFilters.js
│   └── ...
├── pages/             # Páginas da aplicação
│   ├── Login.js
│   ├── Recipes.js
│   ├── RecipeDetails.js
│   ├── RecipeInProgress.js
│   ├── DoneRecipes.js
│   ├── FavoriteRecipes.js
│   └── Profile.js
├── context/           # Context API
│   └── RecipeContext.js
├── services/          # Serviços e APIs
│   ├── FetchApi.js
│   ├── localStorage.js
│   └── RecipeDetailsFunctions.js
├── images/            # Assets estáticos
└── tests/             # Testes unitários

cypress/
├── integration/       # Testes E2E
└── mocks/            # Mocks para testes
```

---

## 🔌 APIs Utilizadas

### TheMealDB

API de receitas de comidas

- 🌐 [Documentação oficial](https://www.themealdb.com/api.php)
- 📡 Base URL: `https://www.themealdb.com/api/json/v1/1/`

### TheCocktailDB

API de receitas de bebidas

- 🌐 [Documentação oficial](https://www.thecocktaildb.com/api.php)
- 📡 Base URL: `https://www.thecocktaildb.com/api/json/v1/1/`

---

## 🧪 Testes

### Testes Unitários

```bash
npm test                    # Executa testes
npm run test-coverage       # Cobertura de testes
```

### Testes E2E (Cypress)

```bash
npm run cy                  # Executa Cypress
npm run cy:open             # Interface gráfica
```

### Linting

```bash
npm run lint                # ESLint
npm run lint:styles         # Stylelint
```

---

## 📚 Documentação

- 📖 [Orientações de Desenvolvimento](./docs/ORIENTACOES.md) - Guia completo para desenvolvedores
- 🚀 [Guia de Deploy no Vercel](./DEPLOY.md) - Instruções de deploy
- 🎯 [Requisitos do Projeto](./docs/ORIENTACOES.md#requisitos-do-projeto) - Lista completa de requisitos

---

## 🎯 Rotas da Aplicação

| Rota | Descrição |
|------|-----------|
| `/` | Tela de login |
| `/meals` | Lista de comidas |
| `/drinks` | Lista de bebidas |
| `/meals/:id` | Detalhes da comida |
| `/drinks/:id` | Detalhes da bebida |
| `/meals/:id/in-progress` | Receita de comida em progresso |
| `/drinks/:id/in-progress` | Receita de bebida em progresso |
| `/profile` | Perfil do usuário |
| `/done-recipes` | Receitas concluídas |
| `/favorite-recipes` | Receitas favoritas |

---

## 💾 Armazenamento Local

A aplicação utiliza `localStorage` para persistir:

- ✉️ Email do usuário
- 🔑 Tokens de acesso (meals e drinks)
- ⭐ Receitas favoritas
- ✅ Receitas concluídas  
- 🔄 Progresso de receitas em andamento

---

## 📝 Scripts Disponíveis

```bash
npm start              # Inicia servidor de desenvolvimento
npm test               # Executa testes
npm run test-coverage  # Cobertura de testes
npm run build          # Build para produção
npm run lint           # Verifica código com ESLint
npm run lint:styles    # Verifica CSS com Stylelint
npm run cy             # Executa testes Cypress
npm run cy:open        # Abre interface do Cypress
```

---

## 📄 Licença

Este projeto foi desenvolvido como parte do curso da [Trybe](https://www.betrybe.com/).

---

## 👥 Autores

Este projeto foi desenvolvido em grupo durante o curso da Trybe:

### **Gabriel Augusto** - [@gabe-ao](https://github.com/gabe-ao)
[![GitHub](https://img.shields.io/badge/GitHub-gabe--ao-181717?style=for-the-badge&logo=github)](https://github.com/gabe-ao)

### **Luiz Felipe** - [@LuizFelipe406](https://github.com/LuizFelipe406)
[![GitHub](https://img.shields.io/badge/GitHub-LuizFelipe406-181717?style=for-the-badge&logo=github)](https://github.com/LuizFelipe406)

### **Lucas Manoel Duarte** - [@LucasManoelDuarte](https://github.com/LucasManoelDuarte)
[![GitHub](https://img.shields.io/badge/GitHub-LucasManoelDuarte-181717?style=for-the-badge&logo=github)](https://github.com/LucasManoelDuarte)

### **Adalberto Ribeiro** - [@Beto1821](https://github.com/Beto1821)
[![GitHub](https://img.shields.io/badge/GitHub-Beto1821-181717?style=for-the-badge&logo=github)](https://github.com/Beto1821)

