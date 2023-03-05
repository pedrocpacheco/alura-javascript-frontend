const elementoInserirLivros = document.getElementById("livros")

function exibirLivros(listaLivros) {
  // O forEach é como se fosse um ForLoop que passa por cada um dos objetos da Array e faz uma ação
  listaLivros.forEach(livro => {
    elementoInserirLivros.innerHTML += `
  <div class="livro">
        <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">${livro.titulo}</h2>
        <p class="livro__descricao">${livro.descricao}</p>
        <p class="livro__preco" id="preco">${livro.preco.toFixed(2)} </p>
        <div class="tags">
          <span class="tag">${livro.tag}</span>
        </div>
      </div>
      `
  })
}
