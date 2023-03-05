// JEITO 1 USANDO THEN
var consultaCEP1 = fetch("https://viacep.com.br/ws/01001250/json/") //recebendo dados da API
  .then(resposta => resposta.json()) //passando para json
  .then(r => {
    //then serve para promessa resolvida
    if (r.erro) {
      // se acontecer um erro...
      throw Error("Esse CEP não existe")
    } else {
      console.log(r)
    }
  })
  .catch(erro => console.log(erro)) //catch é para se der erro
  .finally(console.log("processo concluido"))

console.log(consultaCEP1)

// ------------------------------------------------------------------------------------------------
// JEITO 2 USANDO ASYNC AWAIT TRY
async function buscaEndereco() {
  try {
    //tente fazer isso
    var consultaCEP2 = await fetch("https://viacep.com.br/ws/01001250/json/")
    var consultaCEP2JSON = await consultaCEP2.json()
    console.log(consultaCEP2)
  } catch (erro) {
    //se pegar algum erro...
    console.log(erro)
  }
}

buscaEndereco()
