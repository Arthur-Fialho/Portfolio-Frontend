# Portfólio Pessoal - Front-end com React

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.x-purple?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.x-cyan?logo=tailwindcss)
![Klever](https://img.shields.io/badge/Klever-Web3-green?logo=blockchain)
![AWS Amplify](https://img.shields.io/badge/AWS%20Amplify-deployed-orange?logo=awsamplify)

> Status: Concluído e implantado na AWS ✅

## 🚀 **[Acesse à versão online aqui!](https://arthurfialho.com.br/)**

![Screenshot do Portfólio](./src/assets/homepage.png)

---

Este projeto é o front-end desenvolvido para consumir a **[API de Portfólio em Java/Spring Boot](https://github.com/Arthur-Fialho/API-Java-Portfolio)**. Ele é responsável por buscar e exibir os dados de projetos, habilidades e outras informações numa interface web moderna, responsiva e dinâmica. 

**Destaque:** Inclui integração Web3 com a blockchain Klever para demonstração de funcionalidades de doações descentralizadas.

## ✨ Funcionalidades Principais

- **Página Única (SPA):** Design moderno de página única com navegação por rolagem suave.
- **Carregamento Dinâmico:** Todos os dados (projetos, habilidades, etc.) são carregados de forma assíncrona a partir da API back-end.
- **Design Responsivo:** A interface adapta-se perfeitamente a ecrãs de desktop, tablets e telemóveis.
- **Tema Dinâmico (Dark/Light Mode):** Um seletor de tema que altera a aparência do site e guarda a preferência do utilizador.
- **Integração Web3:** Sistema de doações descentralizado usando a blockchain Klever com suporte a múltiplos tokens.
- **Animações em CSS:** Efeitos como um fundo dinâmico e animações de hover que criam uma experiência de utilizador mais rica.

## 📑 Seções do Portfólio

### 🏠 Hero Section
Apresentação principal com informações pessoais e profissionais.

### 🛠️ Skills Section
Showcase das habilidades técnicas organizadas por categorias (linguagens, frameworks, ferramentas, etc.).

### 💼 Projects Section
Galeria de projetos desenvolvidos com descrições, tecnologias utilizadas e links para repositórios.

### 🎓 Education Section *(disponível no projeto, mas não exibida atualmente)*
Seção para exibir informações sobre formação acadêmica e cursos.

### 💼 Experience Section *(disponível no projeto, mas não exibida atualmente)*
Seção para mostrar experiência profissional e histórico de trabalho.

### 📞 Contact Section
Seção para adicionar as infomações de contato.

### 📚 Books Section
Acompanhamento da jornada de leitura focada em desenvolvimento de software.

### 💝 Donations Section (Klever Blockchain)
Sistema de doações integrado com a blockchain Klever, demonstrando funcionalidades Web3:
- **Detecção automática** da extensão da Carteira Klever
- **Suporte multi-token:** Aceita KLV (token nativo) e outros tokens KDA (KFI, USDT, BUSD, etc.)
- **Interface intuitiva** para seleção de token e quantidade
- **Histórico de transações** persistente no navegador
- **Feedback em tempo real** com hash de confirmação das transações
- **Design responsivo** otimizado para dispositivos móveis e desktop
- **Testnet:** Funciona na rede de testes da Klever (tokens sem valor real)

> **Finalidade:** Demonstração de integração Web3 + contribuições para compra de livros e mensalidades da faculdade

## 🏗️ Arquitetura de Deploy (AWS)

O front-end está implantado utilizando o **AWS Amplify**, configurado para um fluxo de CI/CD (Integração e Entrega Contínua):
- Cada `push` para a branch `main` no GitHub aciona um novo build e deploy automático.
- O Amplify gere a distribuição global do site através de um CDN, garantindo tempos de carregamento rápidos em todo o mundo.
- As variáveis de ambiente, como o URL da API, são geridas de forma segura no painel do Amplify.

## 🛠️ Tecnologias Utilizadas

| Categoria | Tecnologia |
| :--- | :--- |
| **Core** | React 18, Vite |
| **Estilização** | Tailwind CSS |
| **Comunicação API** | Axios |
| **Blockchain/Web3** | @klever/connect-react, @klever/connect-core |
| **Ícones** | React Icons |
| **Qualidade de Código** | ESLint, Prettier |
| **Deploy** | AWS Amplify, Git & GitHub |

## ⚙️ Como Executar Localmente

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Passos
1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/Arthur-Fialho/API-Java-Portfolio-Frontend.git
    cd API-Java-Portfolio-Frontend
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as variáveis de ambiente:**
    - Crie um ficheiro chamado `.env` na raiz do projeto.
    - Adicione a seguinte variável, apontando para o endereço da sua API back-end (local ou na nuvem):
      ```
      VITE_API_BASE_URL=http://localhost:8080
      ```

4.  **Instale dependências com flag legacy (devido às dependências Klever):**
    ```bash
    npm install --legacy-peer-deps
    ```
    > **Nota:** As dependências `@klever/connect-react` e `@klever/connect-core` requerem React 16-18, mas funcionam perfeitamente com React 19 usando a flag `--legacy-peer-deps`.

5.  **Execute o projeto:**
    ```bash
    npm run dev
    ```
    O servidor de desenvolvimento será iniciado em `http://localhost:5173`.

## 🔗 Integração Web3 (Klever Blockchain)

Este portfólio inclui uma demonstração prática de integração Web3 através da seção de doações Klever:

### Funcionalidades Blockchain:
- **Conexão com carteira:** Integração com a extensão Klever Wallet
- **Transações multi-token:** Suporte para KLV e tokens KDA personalizados
- **Feedback de transações:** Exibição de hash e status das transações
- **Detecção automática:** Verifica se a extensão da carteira está instalada

### Pré-requisitos para Web3:
- **Extensão Klever Wallet:** [Download em klever.io](https://klever.io/)
- **Testnet:** As transações ocorrem na rede de testes (tokens sem valor real)
- **Tokens de teste:** Disponíveis através de faucets da rede Klever

---

## 📜 Scripts Disponíveis

- `npm run dev`: Inicia a aplicação em modo de desenvolvimento.
- `npm run build`: Compila a aplicação para produção na pasta `dist`.
- `npm run preview`: Inicia um servidor local para visualizar a build de produção.

---

## Autor

**Arthur Fialho**
* [GitHub](https://github.com/Arthur-Fialho)
* [LinkedIn](https://www.linkedin.com/in/arthurfialho/)