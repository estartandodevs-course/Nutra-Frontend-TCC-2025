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

O projeto segue uma arquitetura modular e organizada para facilitar manutenção, escalabilidade e entendimento do código:

├── public/ # Arquivos públicos: ícones, imagens, favicon, assets estáticos
├── src/
│ ├── components/ # Componentes reutilizáveis e compartilháveis em toda a aplicação
│ ├── hooks/ # Custom hooks para lógica compartilhada (ex: useAuth, useApi)
│ ├── mocks/ # Dados mock para testes e desenvolvimento sem backend
│ ├── pages/ # Páginas do aplicativo, agrupando componentes por tela
│ ├── styles/ # Arquivos de estilo globais ou específicos (Tailwind + CSS)
│ ├── types/ # Tipagens TypeScript para objetos, props e respostas de API
│ ├── utils/ # Funções utilitárias e helpers
│ └── main.tsx # Ponto de entrada do aplicativo (renderização React)
├── package.json # Dependências, scripts e configurações do projeto
├── tsconfig.json # Configuração do TypeScript
└── vite.config.ts # Configuração do Vite e plugins

O app é **responsivo** e possui navegação intuitiva com elementos fixos e modais:

- **Menu inferior fixo:** Navegação rápida entre dashboard, perfil, horta e desafios  
- **Modal lateral:** Acesso ao menu completo e opções do usuário  
- **Componentes responsivos:** Adaptáveis para desktop, tablet e mobile  