# Nutra - Frontend TCC 2025

![Nutra Logo](/src/assets/logonutra.png)

Projeto Frontend do TCC, desenvolvido durante a iniciativa **EstartandoDevs**, com foco em alimentação saudável e ODS (Objetivos de Desenvolvimento Sustentável).

## 📝 Sobre o Projeto

Nutra é um aplicativo que auxilia usuários a acompanhar sua alimentação e hábitos saudáveis.  
O frontend foi desenvolvido em **React + TypeScript + Vite**, utilizando **TailwindCSS** para estilização e integração com API para dados dinâmicos.

### Funcionalidades

- Dashboard com registro de metas diárias
- Registro de alimentação, exercícios e hábitos
- Desafios diários com barra de progresso
- Perfil do usuário com conquistas
- Navegação intuitiva com menu inferior e modal lateral
- Listagem de receitas e possibilidade de acessar detalhes

## ⚙️ Tecnologias

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Lucide Icons](https://lucide.dev/)

## 🚀 Como Rodar

1. Clone o repositório:

```bash
git clone https://github.com/estartandodevs-course/Nutra-Frontend-TCC-2025.git
```
2. Instale as dependências:

```bash 
npm install
# ou
yarn install
```

3. Execute o projeto:

```bash 
npm run dev
# ou
yarn dev
```

O aplicativo estará disponível em http://localhost:5173.

## 🗂 Estrutura do Projeto

```bash 
O projeto segue uma arquitetura modular e organizada para facilitar manutenção, escalabilidade e entendimento do código:

├── .github/                 # Workflows e templates de CI / GitHub Actions
├── public/                  # Assets públicos (favicon, imagens, etc)
├── src/                     # Código-fonte principal
│   ├── assets/              # Imagens, logos e demais arquivos estáticos importáveis
│   ├── components/          # Componentes reutilizáveis (UI)
│   ├── context/             # Context API (autenticação, estado global, etc)
│   ├── data/                # Dados locais, listas estáticas e configurações
│   ├── hooks/               # Custom hooks (ex: useAuth, useAPI, useMenuModal)
│   ├── mocks/               # Dados mock para desenvolvimento sem API
│   ├── pages/               # Páginas da aplicação agrupadas por rotas
│   ├── providers/           # Providers globais (tema, sessão, etc)
│   ├── routes/              # Configuração das rotas da aplicação
│   ├── schema/              # Schemas de validação (ex: Zod / formulários)
│   ├── services/            # Serviços de API, axios, chamadas externas
│   ├── types/               # Tipagens TypeScript (interfaces e types)
│   └── main.tsx             # Ponto de entrada do app (React + Router)
│
├── .gitignore
├── buildspec.yml            # Pipeline de build/deploy (ex: AWS CodeBuild)
├── index.html               # Template HTML principal do Vite
├── package.json             # Dependências e scripts do projeto
├── package-lock.json        # Lockfile para instalações determinísticas
├── tsconfig.json            # Configuração TypeScript
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts           # Configuração e plugins do Vite
├── README.md                # (este arquivo)
└── eslint.config.js         # Configuração do ESLint
```

O app é **responsivo** e possui navegação intuitiva com elementos fixos e modais.