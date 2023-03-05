let livros = []
const endpointDaAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json"
getBuscarLivrosAPI()

// Deixando em Asinc pq podem ser muitos livros
async function getBuscarLivrosAPI() {
  const res = await fetch(endpointDaAPI)
  livros = await res.json()
  console.table(livros)
  let livrosComDesconto = aplicarDesconto(livros)
  exibirLivros(livrosComDesconto)
}
