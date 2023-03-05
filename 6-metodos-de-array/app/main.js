let livros = []
const endpointDaAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json"
getBuscarLivrosDaAPI()

// Deixando em Asinc pq podem ser muitos livros
async function getBuscarLivrosDaAPI() {
  const res = await fetch(endpointDaAPI)
  livros = await res.json()
  console.table(livros)
  livros = aplicarDesconto(livros)
  exibirOsLivrosNaTela(livrosComDesconto)
}
