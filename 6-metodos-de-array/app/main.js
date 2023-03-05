let livros = []
const endpointDaAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json"
const elementoInserirLivros = document.getElementById("livros")

// Deixando em Asinc pq podem ser muitos livros
async function getBuscarLivrosAPI() {
  const res = await fetch(endpointDaAPI)
  livros = await res.json()
  console.table(livros)
  exibirLivros(livros)
}

function exibirLivros(listaLivros) {
  listaLivros.forEach(livro => {
    elementoInserirLivros.innerHTML += `
    <!--   <div class="livro">
        <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">${livro.titulo}</h2>
        <p class="livro__descricao"></p>
        <p class="livro__preco" id="preco">R$29,90</p>
        <div class="tags">
          <span class="tag">Front-end</span>
        </div>
      </div>
      `
  })
}
