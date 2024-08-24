# MyChat Application

## Descrição

MyChat é uma aplicação de chat que permite que usuários possam se comunicar através de diferentes canais de maneira fluida. Esta aplicação é composta por um back-end e um front-end que funcionam de forma integrada.

## Estrutura do Projeto

O projeto está dividido em duas partes principais:

- **backend/**: Contém a aplicação do servidor, onde a lógica de negócios e a manipulação de dados acontecem.
- **client/**: Contém a aplicação do cliente, responsável pela interface web com o usuário.

### Estrutura dos Componentes

- **backend/**
  - **controllers/**: Controladores responsáveis por lidar com as requisições.
  - **middlewares/**: Middlewares para manipulação de requisições/respostas.
  - **models/**: Modelos do banco de dados mongoDB.
  - **routes/**: Definição das rotas da API.
  - **socket.js**: Configurações e eventos do Socket.io para comunicação em tempo real.
  - **index.js**: Arquivo de entrada do servidor.

- **client/**
  - **public/**: Arquivos públicos (HTML, ícones, etc.).
  - **src/**: Código fonte da aplicação React.
  - **index.html**: Página HTML principal.

## Pré-requisitos

Certifique-se de ter o seguinte instalado na sua máquina:

- **Node.js** (versão 20.17.0 ou superior)
- **NPM** (versão 10.8.2 ou superior)

## Configuração do Ambiente

### 1. Clonando o Repositório

```bash
git clone https://github.com/seu-usuario/MyChat.git
cd MyChat
```

### 2. Configuração do Backend

```bash
cd backend
npm install
npm run dev
```

O servidor será iniciado localmente na porta 4001

### 3. Configuração do Client

```bash
cd client
npm install
npm run dev
```

O servidor será iniciado localmente na porta padrão 5173, acesse: `localhost:5173`

1. Registre seu novo usuário na aba "Signup"
2. Logue com seu usuário na aba "Login"
3. Você será redirecionado para a área protegida de chat

## Tecnologias utilizadas

- Backend: Node.js, Express, MongoDB, JWT, Socket.io
- Frontend: React, Vite, TailwindCSS

## Funcionalidades

- Autenticação/Registro de Usuário: Login e cadastro com verificação de validade do CEP.
- [WIP] Chat Omnichannel: Comunicação em tempo real através de um chat.

## Questões e diagramas
Respostas para as questões se encontram no arquivo `/questions.md`. Quanto aos diagramas C4, podem ser encontrados no diretório `/c4-diagrams/`, contendo os seguintes diagramas:

- System context diagram: contendo visão mais geral sobre a solução, ideal para o público menos técnico.
- Container diagram: apresenta formato da solução em alto nível e enfatiza as responsabilidades presentes dentro da arquitetura de software.
- Component diagram: decompõe a arquitetura ainda mais em relação ao _container diagram_. Mostra como os _containers_ são compostos de _components_, mostrando o papel e as interações de cada um deles.