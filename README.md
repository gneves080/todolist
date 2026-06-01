# 📝 Todo List Avançado com React

Aplicação de lista de tarefas (Todo List) desenvolvida com React, com foco no uso de recursos avançados como Hooks, Context API, Hooks Customizados e técnicas de otimização de performance.

---

## 🚀 Tecnologias utilizadas

* React (Vite)
* JavaScript (ES6+)
* Context API
* Hooks (useState, useEffect, useContext, useMemo)
* React.memo
* CSS3 (Mobile First)

---

## 📌 Funcionalidades

* ✅ Adicionar novas tarefas
* ✅ Marcar tarefas como concluídas
* ✅ Remover tarefas
* ✅ Filtrar tarefas:

  * Todas
  * Concluídas
  * Pendentes
* ✅ Persistência de dados com localStorage
* ✅ Interface responsiva (Mobile First)

---

## 🧠 Conceitos aplicados

### 🔹 Hooks

* `useState` para gerenciamento de estado
* `useEffect` para persistência no localStorage
* `useMemo` para otimização de renderização

### 🔹 Context API

* Gerenciamento global do estado da aplicação
* Compartilhamento de dados entre componentes sem prop drilling

### 🔹 Hook Customizado

* `useLocalStorage` para encapsular lógica de persistência

### 🔹 Memoization

* `React.memo` para evitar re-renderizações desnecessárias
* `useMemo` para otimizar filtros da lista

---

## 📂 Estrutura do projeto

```
src/
 ├── components/
 │    ├── TodoForm.jsx
 │    ├── TodoItem.jsx
 │    ├── TodoList.jsx
 │    └── TodoFilters.jsx
 │
 ├── context/
 │    └── TodoContext.jsx
 │
 ├── hooks/
 │    └── useLocalStorage.js
 │
 ├── pages/
 │    └── Home.jsx
 │
 ├── styles/
 │    └── global.css
 │
 ├── App.jsx
 └── main.jsx
```

---

## ⚙️ Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/todo-react-avancado.git
```

### 2. Acesse a pasta

```bash
cd todo-react-avancado
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute o projeto

```bash
npm run dev
```

### 5. Acesse no navegador

```
http://localhost:5173
```

---

## 🎯 Objetivo do projeto

Este projeto foi desenvolvido com o objetivo de praticar e demonstrar habilidades em React moderno, com foco em:

* Organização de código
* Separação de responsabilidades
* Reutilização de lógica
* Otimização de performance

---

## 📱 Responsividade

A aplicação foi desenvolvida utilizando a abordagem **Mobile First**, garantindo boa experiência em dispositivos móveis e desktops.

---

## 📈 Melhorias futuras

* 🌙 Dark Mode
* 📊 Contador de tarefas
* 💫 Animações
* 🧪 Testes automatizados

---

## 👨‍💻 Autor

Gabriel Neves
Estudante de Tecnologia da Informação

---

