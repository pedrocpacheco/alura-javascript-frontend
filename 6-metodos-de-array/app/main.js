let livros = []
const endpointDaAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json"

// Deixando em Asinc pq podem ser muitos livros
async function getBuscarLivrosAPI() {
  const res = await fetch(endpointDaAPI)
  livros = await res.json()
}
