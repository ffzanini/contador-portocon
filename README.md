# Protocon

**Site institucional** de navegação para a **Protocon Contabilidade**.

[Sobre](#-sobre-o-projeto) &nbsp;&nbsp;•&nbsp;&nbsp; [Funcionalidades](#-funcionalidades) &nbsp;&nbsp;•&nbsp;&nbsp; [Tecnologias](#-tecnologias) &nbsp;&nbsp;•&nbsp;&nbsp; [Como executar](#-como-executar) &nbsp;&nbsp;•&nbsp;&nbsp; [Deploy](#-deploy) &nbsp;&nbsp;•&nbsp;&nbsp; [Contato](#-contato)

---

## 📋 Sobre o projeto

Este repositório contém o **site institucional** da **Protocon Contabilidade**, pensado como vitrine dos serviços, diferenciais e formas de contato da empresa. O foco é **usabilidade** e **clareza**: navegação intuitiva, páginas dedicadas (abrir empresa, mudar de contador, escritório, sobre), tema claro/escuro e integração com WhatsApp.

O projeto foi desenvolvido com **Next.js**, **TypeScript** e **Tailwind CSS**, priorizando performance, SEO (sitemap, metadados) e boa experiência em dispositivos móveis e desktop.

---

## ✨ Funcionalidades

- **Páginas:** Home, Sobre, Abrir empresa, Mudar de contador, Escritório, Política de privacidade e Termos de uso
- **Tema:** Alternância entre modo claro e escuro (next-themes)
- **SEO:** Sitemap e metadados configurados para indexação
- **Analytics:** Integração com Vercel Analytics e Speed Insights
- **Contato:** Botão flutuante de WhatsApp e seção de contato humano
- **Layout responsivo:** Pensado para leitura em qualquer dispositivo

---

## 🛠 Tecnologias

### Principais

| Tecnologia                                    | Uso                              |
| --------------------------------------------- | -------------------------------- |
| [Next.js](https://nextjs.org/)                | Framework React, App Router, SSR |
| [TypeScript](https://www.typescriptlang.org/) | Tipagem estática                 |
| [Tailwind CSS](https://tailwindcss.com/)      | Estilização e design system      |
| [React](https://react.dev/)                   | Interface e componentes          |
| [Vercel](https://vercel.com/)                 | Hospedagem e deploy              |

### Complementares

| Tecnologia                                                                                           | Uso                        |
| ---------------------------------------------------------------------------------------------------- | -------------------------- |
| [React Icons](https://react-icons.github.io/react-icons/)                                            | Ícones                     |
| [next-themes](https://github.com/pacocoursey/next-themes)                                            | Tema claro/escuro          |
| [next-sitemap](https://github.com/iamvishnusankar/next-sitemap)                                      | Geração de sitemap         |
| [react-hot-toast](https://react-hot-toast.com/)                                                      | Notificações (toast)       |
| [tailwind-merge](https://github.com/dcastil/tailwind-merge) + [clsx](https://github.com/lukeed/clsx) | Utilitários de classe (cn) |

---

## 🚀 Como executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) (recomendado: LTS)
- npm ou yarn

### Passos

**1. Clonar o repositório**

```bash
git clone https://github.com/ffzanini/contador-protocon.git
cd contador-protocon
```

**2. Instalar dependências**

```bash
npm install
```

**3. Rodar em desenvolvimento**

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

**4. Build para produção**

```bash
npm run build
npm start
```

O comando `build` executa automaticamente o `next-sitemap` (postbuild) para gerar o sitemap.

---

## 📦 Deploy

O projeto está preparado para deploy na **Vercel**: basta conectar o repositório e usar os comandos padrão (`npm run build` e `npm start`). Não há variáveis de ambiente obrigatórias para o funcionamento básico do site.

Para Analytics e Speed Insights, as integrações são feitas via pacotes `@vercel/analytics` e `@vercel/speed-insights` já configurados no código.

---

## 👋 Contato

Dúvidas sobre o projeto ou sobre os serviços da Protocon Contabilidade:

- **Site:** [protocon.com.br](https://www.protocon.com.br) (ou URL de produção do projeto)
- **LinkedIn:** [linkedin.com/company/protocon](https://www.linkedin.com/company/protocon/)
- **Instagram:** [@protocon](https://www.instagram.com/protocon/)

---

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).

---

Feito com 💙 por Felipe Frantz Zanini
