# 📦 Amazon Clone (Projeto de Estudo)

Este projeto é um **clone front-end da interface da Amazon.com.br**, desenvolvido para replicar fielmente o design e algumas das funcionalidades dinâmicas do site de e-commerce mais famoso do mundo. Construído com **HTML, CSS e JavaScript puros**, ele demonstra habilidades de desenvolvimento web para recriar layouts complexos e interativos.

## ✨ Funcionalidades

  * **Header Completo:** Navegação superior com logotipo da Amazon, seleção de endereço/CEP, barra de pesquisa funcional com categorias, links para "Contas e Listas", "Devoluções e Pedidos" e "Carrinho".
  * **Menus Suspensos (Pop-ups):**
      * **"Contas e Listas"**: Exibe um menu de login/registro e links para seções da conta (listas, pedidos, Prime, etc.).
      * **"Atualizar CEP"**: Abre um pop-up para login ou inserção de CEP para cálculo de entrega.
      * **"Prime"**: Mostra um pop-up com imagem promocional do Amazon Prime.
  * **Menu Lateral de Categorias ("Todos"):** Um menu expansível no canto superior esquerdo que replica o "drawer" de categorias da Amazon, com links para diversas seções de produtos e serviços.
  * **Carrossel de Imagens Principal (Hero Section):** Um slideshow interativo de banners promocionais com botões de navegação para a esquerda e direita.
  * **Seção de Cards de Produtos/Ofertas:** Uma grade responsiva de cards de destaque, imitando as ofertas e promoções exibidas na página inicial da Amazon.
  * **Carrossel de Categorias:** Uma galeria de imagens rolável horizontalmente que permite navegar visualmente por diferentes categorias de produtos.
  * **Chamada para Ação de Login:** Uma seção destacada incentivando o login para recomendações personalizadas.
  * **Rodapé Detalhado:** Replica o rodapé completo da Amazon, com links para informações corporativas, vendas, pagamentos, ajuda e detalhes legais.
  * **Design Fiel:** Esforço para replicar cores, tipografia (com a fonte **Amazon Ember**) e espaçamento do site original.

## 🚀 Tecnologias Utilizadas

  * **HTML5:** Para a estrutura semântica e esqueleto da página.
  * **CSS3:** Para toda a estilização, layout (usando Flexbox e Grid), responsividade e animações. Utiliza **Variáveis CSS** para um tema consistente e **seletores aninhados** (indicando uso de pré-processador como SASS/SCSS ou PostCSS durante o desenvolvimento).
  * **JavaScript (Vanilla JS):** Para a interatividade dinâmica, incluindo:
      * Controle de visibilidade e posicionamento dos menus pop-up.
      * Lógica de navegação do carrossel de imagens principal.
      * Controle de rolagem do body quando menus estão abertos/fechados.
  * **Google Material Symbols Outlined:** Para os ícones da interface, importados diretamente via CDN.

## ⚙️ Como Executar o Projeto

Para visualizar e interagir com este clone em seu ambiente local, siga estes passos:

1.  **Clone o repositório (ou faça o download dos arquivos):**
    ```bash
    git clone https://github.com/seu-usuario/amazon-clone-brasil.git
    ```
    (Lembre-se de substituir `seu-usuario/amazon-clone-brasil.git` pelo link real do seu repositório, se estiver no GitHub).
2.  **Navegue até o diretório do projeto:**
    ```bash
    cd amazon-clone-brasil
    ```
3.  **Abra o arquivo `index.html`:**
    Simplesmente abra o arquivo `index.html` em seu navegador web preferido (Google Chrome, Firefox, etc.). Não é necessário um servidor web, pois todas as funcionalidades são client-side.

## 📂 Estrutura do Projeto

```
amazon-clone-brasil/
├── index.html          # O arquivo HTML principal da página
├── styles.css          # Todos os estilos CSS da aplicação
├── script.js           # Todo o código JavaScript para interatividade
└── src/                # Diretório para ativos (imagens, ícones)
    ├── amazon-icon.png
    ├── Amazon_logo.svg
    ├── hero/           # Imagens para o carrossel da seção hero
    │   ├── 01.jpg
    │   ├── 02.jpg
    │   ├── 03.jpg
    │   ├── 04.jpg
    │   └── 05.jpg
    ├── destaque/       # Imagens para os cards de destaque
    │   ├── cartoes.jpg
    │   ├── primePop.jpg
    │   └── recebido.jpg
    └── categorias/     # Imagens para o carrossel de categorias
        ├── alimentos.jpg
        ├── automotivo.jpg
        ├── bebes.jpg
        ├── bebidas.jpg
        ├── beleza.png
        ├── brinquedos.jpg
        ├── casa.jpg
        ├── casa-inteligente.jpg
        ├── cd-vinil.jpg
        ├── cozinha.jpg
        ├── cuidados.jpg
        ├── ebooks.jpg
        ├── eletronicos.jpg
        ├── esportes.jpg
        ├── ferramentas.jpg
        ├── games.jpg
        ├── informatica.jpg
        ├── jardim.jpg
        ├── livros.jpg
        ├── moda.jpg
        ├── papelaria.jpg
        └── pet.jpg
```

## 💡 Próximos Passos e Possíveis Melhorias

  * **Responsividade Completa:** Implementar `@media queries` robustas para garantir que o layout se adapte perfeitamente a todos os tamanhos de tela, de dispositivos móveis a desktops.
  * **Pesquisa Funcional:** Integrar uma funcionalidade de pesquisa real (mesmo que com dados mockados) via JavaScript.
  * **Carrinho Interativo:** Adicionar produtos ao carrinho, atualizar quantidades e calcular totais.
  * **Animações e Transições:** Utilizar CSS para transições mais suaves em menus e elementos interativos.
  * **Gerenciamento de Estado:** Para um projeto maior, considerar padrões de gerenciamento de estado para a UI.

-----

**Desenvolvido por Rodrigo Rizzo Simões © 2025**
