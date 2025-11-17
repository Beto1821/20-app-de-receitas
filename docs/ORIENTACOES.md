# 📋 Orientações de Desenvolvimento

Este documento contém as orientações completas para o desenvolvimento do projeto App de Receitas.

## 📑 Índice

- [Antes de Começar](#antes-de-começar)
- [Durante o Desenvolvimento](#durante-o-desenvolvimento)
- [Depois de Terminar](#depois-de-terminar)
- [Code Review](#code-review)
- [Linter e Stylelint](#linter-e-stylelint)
- [Ferramentas](#ferramentas)
- [Testes](#testes)
- [Desenvolvimento](#desenvolvimento)

---

## Antes de Começar

### 1. Clone o repositório

```bash
git clone git@github.com:tryber/sd-023-b-project-recipes-app.git
cd sd-023-b-project-recipes-app
git checkout main-group-XX && git pull  # onde XX é o número do seu grupo
```

### 2. Instale as dependências e inicialize o projeto

```bash
npm install
npm start  # uma nova página deve abrir no navegador
```

### 3. Crie branches para cada demanda

```bash
# Verifique que está na branch correta
git branch

# Se não estiver, mude para a branch main-group-XX
git checkout main-group-XX && git pull

# Crie uma branch para a demanda
git checkout -b main-group-XX-cria-campo-de-busca
```

### 4. Faça commits das alterações

```bash
git status  # verificar mudanças
git add .   # adicionar ao stage
git commit -m 'cria componente de busca'
git status  # verificar commit
```

### 5. Envie para o repositório remoto

```bash
git push -u origin main-group-XX-cria-campo-de-busca
```

### 6. Crie um Pull Request

1. Acesse [Pull Requests do repositório](https://github.com/tryber/sd-023-b-project-recipes-app/pulls)
2. Clique em "New pull request"
3. Escolha sua branch no "Compare"
4. Título: `[GRUPO XX] Cria tela de busca`
5. Adicione descrição
6. Clique em "Create pull request"

### 7. Merge do Pull Request

Após aprovação de pelo menos uma pessoa do grupo e Linter OK, faça o merge.

---

## Durante o Desenvolvimento

⚠️ **IMPORTANTE:** Crie todos os arquivos dentro da estrutura adequada do projeto

### Comandos mais utilizados

```bash
git status     # verificar status
git add        # adicionar ao stage
git commit     # criar commit
git push -u origin nome-da-branch  # primeira vez
git push       # demais vezes
```

---

## Depois de Terminar (opcional)

Para sinalizar que está pronto para Code Review:

1. Adicione label `code-review`
2. Em "Assignees" escolha seu usuário
3. Em "Reviewers" digite `students` e selecione `tryber/students-sd-023-b`

📹 [Video explicativo](https://vimeo.com/362189205)

---

## Code Review

Use o conteúdo sobre [Code Review](https://app.betrybe.com/course/real-life-engineer/code-review) para revisar Pull Requests.

---

## Linter e Stylelint

Para garantir qualidade e legibilidade do código:

```bash
npm run lint
npm run lint:styles
```

⚠️ **PULL REQUESTS COM ERROS DE LINTER NÃO SERÃO AVALIADAS**

### Plugin VSCode

Instale o [plugin ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) no VSCode.

---

## Ferramentas

### Trello como ferramenta Kanban

Organize as atividades usando [este board pré-configurado](https://trello.com/b/RojqC6yx/app-de-receitas).

**Como duplicar:**
1. Acesse o link
2. Menu superior direito
3. "Copiar quadros"
4. Defina o time e título
5. Clique em "criar"

---

## Testes

### Testes de Requisito 🏗️

Valida se os requisitos funcionais estão funcionando:

```bash
npm run cy        # executa testes
npm run cy:open   # resultado visual
```

⚠️ Sua aplicação deve estar rodando para o Cypress testar.

#### Executar teste específico

```bash
npm run cy -- --spec cypress/integration/login_spec.js
```

#### Executar apenas um teste

Use `.only` após o `describe`:

```javascript
describe.only('Meu teste', () => {
  // ...
});
```

### Testes de Cobertura ☂️

Valida a cobertura de testes:

```bash
npm run test-coverage

# Para página específica
npm run test-coverage -- --collectCoverageFrom=src/pages/Login.js
```

---

## Desenvolvimento

### Como Desenvolver 👨‍💻

- Sempre crie branches a partir de `main-group-XX`
- Para Code Review, aponte PR para `main-group-XX`
- Atenção aos conflitos de merge
- ⚠️ **CUIDADO PARA NÃO COMMITAR NA BRANCH DE OUTRO GRUPO**

### APIs 🔧

🚨 **Use apenas `fetch`!** Outras bibliotecas (Axios) podem causar problemas.

#### TheMealDB API

Banco de dados de receitas de comidas.

📚 [Ver documentação completa](https://www.themealdb.com/api.php)

**Endpoints principais:**

```
Busca geral: https://www.themealdb.com/api/json/v1/1/search.php?s=
Por ID: https://www.themealdb.com/api/json/v1/1/lookup.php?i={id}
Categorias: https://www.themealdb.com/api/json/v1/1/list.php?c=list
Nacionalidades: https://www.themealdb.com/api/json/v1/1/list.php?a=list
Ingredientes: https://www.themealdb.com/api/json/v1/1/list.php?i=list
Por categoria: https://www.themealdb.com/api/json/v1/1/filter.php?c={categoria}
Por ingrediente: https://www.themealdb.com/api/json/v1/1/filter.php?i={ingrediente}
Primeira letra: https://www.themealdb.com/api/json/v1/1/search.php?f={letra}
```

**Imagens de ingredientes:**
```
https://www.themealdb.com/images/ingredients/{nome}-Small.png
```

#### TheCocktailDB API

Banco de dados de bebidas.

📚 [Ver documentação completa](https://www.thecocktaildb.com/api.php)

**Endpoints principais:**

```
Busca geral: https://www.thecocktaildb.com/api/json/v1/1/search.php?s=
Por ID: https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i={id}
Categorias: https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list
Por categoria: https://www.thecocktaildb.com/api/json/v1/1/filter.php?c={categoria}
Por ingrediente: https://www.thecocktaildb.com/api/json/v1/1/filter.php?i={ingrediente}
Primeira letra: https://www.thecocktaildb.com/api/json/v1/1/search.php?f={letra}
```

### Observações Técnicas ℹ️

#### Rotas

```
/                                    - Login
/meals                               - Lista de comidas
/drinks                              - Lista de bebidas
/meals/{id}                         - Detalhes da comida
/drinks/{id}                        - Detalhes da bebida
/meals/{id}/in-progress            - Comida em progresso
/drinks/{id}/in-progress           - Bebida em progresso
/profile                            - Perfil
/done-recipes                       - Receitas feitas
/favorite-recipes                   - Receitas favoritas
```

#### LocalStorage

Use `localStorage` para persistência de dados:

**user:**
```javascript
{
  email: "email-da-pessoa"
}
```

**mealsToken / drinksToken:**
```javascript
1
```

**doneRecipes:**
```javascript
[{
  id: "id-da-receita",
  type: "meal-ou-drink",
  nationality: "nacionalidade-ou-vazio",
  category: "categoria-ou-vazio",
  alcoholicOrNot: "alcoholic-ou-non-alcoholic-ou-vazio",
  name: "nome-da-receita",
  image: "imagem-da-receita",
  doneDate: "data-de-conclusão",
  tags: ["tag1", "tag2"]
}]
```

**favoriteRecipes:**
```javascript
[{
  id: "id-da-receita",
  type: "meal-ou-drink",
  nationality: "nacionalidade-ou-vazio",
  category: "categoria-ou-vazio",
  alcoholicOrNot: "alcoholic-ou-non-alcoholic-ou-vazio",
  name: "nome-da-receita",
  image: "imagem-da-receita"
}]
```

**inProgressRecipes:**
```javascript
{
  drinks: {
    "id-da-bebida": [1, 3, 5],  // ingredientes usados
  },
  meals: {
    "id-da-comida": [2, 4],
  }
}
```

#### Ícones

Disponíveis em `src/images/`:

- `profileIcon.svg`
- `searchIcon.svg`
- `drinkIcon.svg`
- `mealIcon.svg`
- `shareIcon.svg`
- `whiteHeartIcon.svg`
- `blackHeartIcon.svg`

⚠️ Não renomeie os ícones! São usados pelos testes.

#### Bibliotecas

**clipboard-copy** (já instalada)

```javascript
import copy from 'clipboard-copy';

copy('texto a copiar');
```

📚 [Documentação](https://www.npmjs.com/package/clipboard-copy)

**Bootstrap** (opcional)

```javascript
import Button from 'react-bootstrap/Button';

const Componente = () => (
  <Button variant="success">Botão Verde</Button>
);
```

📚 [Documentação React Bootstrap](https://react-bootstrap.github.io/)

---

## Requisitos do Projeto

Os requisitos são organizados por telas. Use a resolução **360x640** para desenvolvimento.

💡 Recomenda-se usar [este plugin do Chrome](https://chrome.google.com/webstore/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh?hl=en) para facilitar.

⚠️ **Respeite os atributos `data-testid`** - são usados na correção!

---

## Protótipo e Recursos

### Figma

[Protótipo do projeto](https://www.figma.com/file/9WXNFMewKRBC5ZawU1EXYG/%5BProjeto%5D%5BFrontend%5D-Recipes-App?node-id=0%3A1)

⚠️ Estilização não é avaliada. O protótipo é apenas sugestão.

### Feedbacks

[Formulário de avaliação do projeto](https://be-trybe.typeform.com/to/ZTeR4IbH)

---

📌 **Dica importante:** Componentize muito bem seu código React para evitar problemas de lógica e complexidade!
