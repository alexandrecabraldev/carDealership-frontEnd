This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Avaliador Verzel

Decidi manter o frontend e o backend em projetos diferentes, pois como passei a maior parte do tempo no backend, ele pode ser testado sozinho, já o front como depende do back não pode, além do mais o frontend ficou muito feio pois faltou tempo para acrescentar mais funcionalidades e para melhorar a estética, peço perdão por isso. 

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Visão Geral do Projeto

Este frontend se comunica com um backend desenvolvido em Flask e PostgreSQL para listar, criar e gerenciar informações de carros. Inclui autenticação de usuários e permite a criação de novos usuários e carros.

## Funcionalidades

- Listagem de carros com todas as informações disponíveis
- Autenticação de usuários (login e criação de contas)
- Adição de novos carros ao sistema

## Rotas Principais

### `/`

- **Descrição:** Página inicial onde todos os carros são listados com todas as suas informações obtidas do backend.
- **Componentes:** Carros, Informações detalhadas

### `/login`

- **Descrição:** Página de login onde o usuário deve fornecer seu e-mail e senha para acessar o sistema.
- **Componentes:** Formulário de login
- **Funcionalidades:** Link para a criação de uma nova conta, redirecionando para `/account`.

### `/account`

- **Descrição:** Página para criar uma nova conta de usuário.
- **Componentes:** Formulário de criação de conta
- **Navegação:** Acessível a partir da página de login

### `/register`

- **Descrição:** Página para criar um novo automóvel no banco de dados.
- **Componentes:** Formulário de registro de automóvel

## Configuração e Instalação

### Pré-requisitos

Certifique-se de ter o Node.js e o npm instalados em seu sistema.

### Passos para Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/alexandrecabraldev/carDealership-frontEnd.git
  

### Observação

Esse app foi desenvolvido para funcionar em conjunto com seu respectivo backend, ele sozinho não contém qualquer funcionalidade, pois depende quase inteiramente de informações vindas da API.

Pra quem usa o vscode pode ser necessário instalar a extenção postcss.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
