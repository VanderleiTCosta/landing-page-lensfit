# Landing Page Base - React + Tailwind CSS 3.4

Esta é uma landing page base estruturada, responsiva (mobile-first) e pronta para uso.

## Tecnologias Utilizadas

- **React 18**
- **Vite** (Build tool ultra-rápida)
- **Tailwind CSS 3.4** (Estilização utilitária)

## Estrutura de Pastas

```text
src/
  components/
    Header.jsx    # Menu de navegação responsivo com mobile menu
    Hero.jsx      # Seção principal de destaque
    Features.jsx  # Seção de recursos/funcionalidades
    CTA.jsx       # Chamada para ação (Call to Action)
    Footer.jsx    # Rodapé completo
  App.jsx         # Componente principal que monta a página
  index.css       # Configurações globais do Tailwind
```

## Como Rodar o Projeto

1. Extraia o arquivo ZIP.
2. Abra o terminal na pasta do projeto.
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
5. Acesse o link exibido no terminal (geralmente `http://localhost:5173`).

## Funcionalidades Incluídas

- **Mobile First**: Design pensado primeiro para dispositivos móveis.
- **Sticky Header**: Menu que acompanha a rolagem com efeito de desfoque (backdrop-blur).
- **Componentização**: Cada seção é um componente independente.
- **Tailwind 3.4**: Aproveitando as últimas melhorias de performance e utilitários.
