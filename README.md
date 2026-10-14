# 🍔 Pickler Hamburgueria

> *"A melhor hamburgueria artesanal do Brasil!"*

![Pickler Hamburgueria Banner](Imagens/Rickpickler.png)

A **Pickler Hamburgueria** é uma aplicação web moderna e temática inspirada no universo icônico do *Pickle Rick*. O cardápio digital apresenta hambúrgueres artesanais especiais, combos épicos, porções crocantes, molhos exclusivos da casa e sobremesas deliciosas, tudo empacotado em uma interface rápida, intuitiva e totalmente responsiva.

---

## 📋 Sumário

- [Visão Geral](#-visão-geral)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Como Executar o Projeto](#-como-executar-o-projeto)
- [Correções e Otimizações Realizadas](#-correções-e-otimizações-realizadas)
- [Identidade Visual e Cores](#-identidade-visual-e-cores)
- [Licença e Autoria](#-licença-e-autoria)

---

## 🌟 Visão Geral

O projeto foi construído para fornecer um cardápio digital interativo para clientes presenciais e de delivery. Com carregamento instantâneo e layout adaptativo para smartphones, tablets e computadores, permite aos visitantes consultar os lanches, ver ingredientes, conferir preços atualizados e entrar em contato direto com a hamburgueria através de canais sociais e WhatsApp.

---

## ✨ Funcionalidades

- **Cardápio Visual Completo:** 20 opções detalhadas entre lanches artesanais, combos, porções (batatas rústicas e anéis de cebola), molhos especiais, bebidas e sobremesas.
- **Barra Superior Fixa:** Acesso rápido à identidade da marca e atalhos de redes sociais (Telefone, Instagram, Facebook e WhatsApp).
- **Rodapé Informativo:** Endereço com link para Google Maps, telefone direto e links para as principais redes sociais.
- **Interatividade & Feedback:** Seleção de itens com animações de clique e notificações flutuantes (*toast notifications*).
- **Design Totalmente Responsivo:** Layout fluido baseado em CSS Grid e Flexbox, adaptando-se confortavelmente a qualquer resolução de tela.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as tecnologias fundamentais da web moderna:

- **HTML5:**
  - Estruturação semântica (`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`).
  - Acessibilidade (`aria-label`, textos alternativos `alt` descritivos para leitores de tela).
  - Metadados otimizados para SEO e favicon personalizado.
- **CSS3:**
  - Layout moderno com **CSS Grid** e **Flexbox**.
  - Variáveis de design em `:root` para fácil customização e consistência.
  - Animações e micro-interações fluidas (*hover*, transições de escala e elevação de sombra).
  - *Media Queries* para suporte multiplataforma (Mobile-First / Desktop).
- **JavaScript (ES6+):**
  - Manipulação do DOM para escuta de eventos nos botões de pedido.
  - Sistema de *Toast Notification* para feedback imediato ao usuário.
  - Preparado para integração com a API do WhatsApp.
- **Recursos Externos:**
  - [Font Awesome 6.5.0](https://fontawesome.com/) para ícones de redes sociais e ações.
  - [Google Fonts](https://fonts.google.com/) (*Poppins* e *Montserrat*) para tipografia moderna e legível.

---

## 📁 Estrutura de Pastas

```text
picklerhamburgueria/
│
├── Imagens/                         # Diretório com todos os ativos visuais do projeto
│   ├── Acai.png                     # Açaí com leite em pó
│   ├── Batata_canoa.png             # Batata rústica canoa
│   ├── Batata_frita.png             # Batata frita tradicional
│   ├── Combo.png                    # Mega Combo
│   ├── Molho_baconcheddar.png       # Molho de cheddar com bacon
│   ├── Molho_pickler.png            # Molho especial Pickler com picles
│   ├── Onion_rings.png              # Anéis de cebola empanados
│   ├── Pickler_baconcheddar.png     # Hambúrguer bacon & cheddar
│   ├── Pickler_classic.png          # Hambúrguer clássico
│   ├── Pickler_dacasa.png           # Hambúrguer artesanal da casa
│   ├── Pickler_kids.png             # Hambúrguer infantil
│   ├── Pickler_mega.png             # Hambúrguer triplo mega
│   ├── Pickler_salada.png           # Hambúrguer salada
│   ├── Pickler_simplebacon.png      # Hambúrguer bacon simples
│   ├── Pickler_vegano.png           # Hambúrguer à base de plantas/soja
│   ├── Refri_cola.png               # Refrigerante de cola
│   ├── Rickpickler.png              # Mascote oficial / Logo
│   ├── Sorvete_chocolate.png        # Sobremesa sorvete de chocolate
│   ├── Sorvete_pickles.png          # Sobremesa sorvete de picles
│   ├── Suco_laranja.png             # Suco natural de laranja
│   └── Suco_pickler.png             # Suco artesanal da casa
│
├── index.html                       # Estrutura principal da página (HTML5)
├── style.css                        # Folha de estilos e regras visuais (CSS3)
├── scriptas.js                      # Comportamento interativo e pedidos (JavaScript)
└── README.md                        # Documentação completa do projeto
```

---

## 🚀 Como Executar o Projeto

Como o projeto é construído em HTML, CSS e JavaScript puros (Vanilla), não há necessidade de compilação ou instalação de dependências pesadas.

### Opção 1: Execução Direta no Navegador
1. Baixe ou clone este repositório no seu computador:
   ```bash
   git clone https://github.com/seu-usuario/picklerhamburgueria.git
   ```
2. Acesse a pasta do projeto e dê um duplo clique no arquivo `index.html` (ou clique com botão direito > **Abrir com** > Google Chrome / Edge / Firefox).

### Opção 2: Extensão Live Server (Recomendado para Desenvolvimento)
1. Abra a pasta do projeto no **VS Code**:
   ```bash
   code picklerhamburgueria
   ```
2. Instale a extensão **Live Server** (caso ainda não tenha).
3. Clique com o botão direito sobre o arquivo `index.html` e selecione **"Open with Live Server"**.
4. O navegador abrirá automaticamente no endereço local `http://127.0.0.1:5500`.

### Opção 3: Servidor Local via Python ou Node.js
Se preferir rodar via linha de comando:

- **Via Python 3:**
  ```bash
  python -m http.server 8000
  ```
  Acesse `http://localhost:8000` no seu navegador.

- **Via Node.js (npx serve):**
  ```bash
  npx serve .
  ```

---

## 🔧 Correções e Otimizações Realizadas

Durante a revisão do projeto, foram solucionadas as seguintes inconsistências:

### 1. Correções no HTML (`index.html`)
- **Fechamento de Tags Inválidas:** Havia tags de fechamento `</nav>` no cabeçalho e rodapé sem uma tag de abertura `<nav>` correspondente. Foram convertidas em elementos semânticos `<nav class="barra_right">` e `<nav class="barra_under">` devidamente abertos e fechados.
- **Caminho das Imagens:** Todos os caminhos de imagem apontavam diretamente para a raiz (ex: `src="Combo.png"`), o que quebrava o carregamento. Todos foram atualizados para a pasta correta (`src="Imagens/Combo.png"`).
- **Remoção de Tags Redundantes:** Havia tags `<link rel="stylesheet">` duplicadas do Font Awesome inseridas erroneamente dentro do `<body>`. O carregamento foi centralizado de forma padronizada no `<head>` usando Font Awesome 6.5.0.
- **Acessibilidade e SEO:** Inserção de títulos descritivos em links, atributos `alt` personalizados para cada prato e atributos `aria-label` nas regiões de navegação.

### 2. Correções no CSS (`style.css`)
- **Remoção de Duplicatas e Erros de Escopo:** O seletor `.barra_superior` estava declarado duas vezes em pontos distintos do arquivo. O seletor `.slogan` também estava duplicado e havia um seletor inexistente (`.barra_superior2 h1`). Todas as regras foram unificadas.
- **Indentação e Organização:** O código foi reestruturado com comentários por seções, indentação consistente de 2 espaços e sem regras soltas ou chaves desbalanceadas.
- **Uniformidade dos Cards:** Imagens agora contam com altura e proporção uniformes (`height: 240px; object-fit: cover;`), evitando distorções ou desníveis nos cards de itens.
- **Efeitos e Responsividade:** Adicionadas variáveis em `:root`, microinterações nos botões de pedido e media queries para telas móveis e tablets.

### 3. Implementação em JavaScript (`scriptas.js`)
- Criado manipulador de eventos para os botões `.btn-pedir`, gerando feedback visual imediato via notificação *toast* animada.

---

## 🎨 Identidade Visual e Cores

| Cor | Código Hex | Uso no Projeto |
| :--- | :---: | :--- |
| **Verde Pickler** | `#228B22` | Barra superior, botões principais de ação e títulos |
| **Laranja Cheddar** | `#FFA500` | Barra inferior (rodapé) e títulos da marca |
| **Laranja Brasa** | `#ED5E03` | Estados de foco e efeito *hover* em botões |
| **Creme Brioche** | `#FFF8DC` | Fundo geral da aplicação e slogan |
| **Grafite Leitura** | `#2D312E` | Textos e descrições dos produtos |

---

## 👥 Licença e Autoria

Projeto acadêmico e de demonstração desenvolvido para a **Pickler Hamburgueria**.
Distribuído sob a licença **MIT** — sinta-se à vontade para utilizar, modificar e aprimorar!