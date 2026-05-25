# Portfólio Pessoal - Front-end

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.x-purple?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.x-cyan?logo=tailwindcss)
![Docker](https://img.shields.io/badge/Docker-ready-blue?logo=docker)
![Nginx](https://img.shields.io/badge/Nginx-serving-green?logo=nginx)

> Status: Concluído & Containerizado 🐳

Este é o front-end do meu portfólio pessoal, desenvolvido com **React 19**, **Vite** e **Tailwind CSS**. A interface é projetada com uma estética moderna baseada em **glassmorphism**, transições suaves de tema (Dark/Light mode), animações fluidas e otimização total de recursos para rodar de forma leve e rápida em servidores VPS.

---

## 🎨 Design & Funcionalidades Principais

* **Estética Premium (Glassmorphism):** Cartões e barras de navegação flutuantes com desfoque de fundo (`backdrop-blur-md`), bordas semi-transparentes e sombras suaves.
* **Gradients Customizados:** Identidade visual unificada utilizando uma paleta de verdes floresta e esmeralda (`#0D2818` $\rightarrow$ `#04471C` $\rightarrow$ `#058C42`).
* **Animações Fluidas:** Efeito de flutuação no avatar, grades animadas em segundo plano e transições dinâmicas ao pairar (hover) sobre habilidades e cartões.
* **Tema Dinâmico (Dark/Light Mode):** Seletor de tema integrado de forma nativa ao cabeçalho da página, persistindo a preferência no armazenamento local do navegador.
* **Projetos com Imagens e Links:** Visualização rica dos projetos com imagens reais de mockup, resumo de stacks tecnológicas e botões integrados para código no GitHub e acesso à produção.
* **Carregamento Instantâneo:** Projetos estruturados localmente em formato JSON, eliminando requisições assíncronas custosas e garantindo um First Contentful Paint (FCP) de alto nível.
* **100% Responsivo:** Adaptável a qualquer formato de tela (telemóveis, tablets e computadores).

---

## 📑 Estrutura de Seções

1. **Início (Hero Section):** Apresentação profissional com avatar animado, clock widget monospaçado e ações rápidas (redes sociais e redirecionamento).
2. **Habilidades (Skills Section):** Cards categorizados (Linguagens, Frameworks & Libs, Web3 & Blockchain, Bancos & Infraestrutura) com animações dinâmicas de elevação.
3. **Projetos (Projects Section):** Galeria visual com imagens de mockups e conexões seguras aos repositórios correspondentes.
4. **Contato (Contact Section):** Módulos uniformes para envio de email, GitHub e LinkedIn.

---

## 🛠️ Tecnologias Utilizadas

| Categoria | Tecnologia |
| :--- | :--- |
| **Core** | React 19, Vite 7 |
| **Estilização** | Tailwind CSS 3.x, Autoprefixer |
| **Componentes / Ícones** | React Icons |
| **Servidor de Produção** | Nginx Alpine, Docker |

---

## ⚙️ Como Executar Localmente

### Pré-requisitos
* Node.js (versão 18 ou superior)
* npm (versão 9 ou superior)

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Arthur-Fialho/API-Java-Portfolio-Frontend.git
   cd API-Java-Portfolio-Frontend
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   A aplicação estará disponível em `http://localhost:5173`.

---

## 🐳 Containerização com Docker

A pasta raiz do projeto está configurada com um `Dockerfile` multi-stage altamente otimizado para produção:

1. **Estágio 1 (Build):** Compila o código fonte em React utilizando uma imagem Node para gerar o pacote estático final na pasta `/dist`.
2. **Estágio 2 (Serve):** Monta um servidor **Nginx (Alpine)** para servir os arquivos estáticos na porta `80` com cabeçalhos de cache configurados para arquivos de mídia/JS/CSS e fallback para o `index.html` (preservando o roteamento dinâmico).

### Rodando o Container:
```bash
# Construir a imagem Docker
docker build -t portfolio-frontend .

# Executar o container na porta 8080 do host
docker run -d -p 8080:80 --name portfolio-frontend portfolio-frontend
```

---

## 📁 Estrutura de Dados dos Projetos

Para alterar ou adicionar novos projetos, basta editar o arquivo [projects.json](file:///home/arthur-fialho/Documents/programacao/projects/portfolio-arthur/API-Java-Portfolio-Frontend/src/data/projects.json) em `src/data/projects.json`:

```json
{
  "id": 2,
  "title": "Nome do Projeto",
  "description": "Breve descrição sobre o projeto...",
  "technologies": ["React", "TypeScript", "Tailwind"],
  "imageUrl": "/images/mockup.png",
  "repositoryUrl": "https://github.com/...",
  "productionUrl": "https://..."
}
```
As imagens do projeto devem ser adicionadas na pasta `public/images/`.

---

## Autor

**Arthur Fialho**
* [GitHub](https://github.com/Arthur-Fialho)
* [LinkedIn](https://www.linkedin.com/in/arthurfialho/)