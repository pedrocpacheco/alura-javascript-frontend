function validacao(chute) {
  const numero = +chute
  if (Number.isNaN(numero)) {
    elementoChute.innerHTML += "<div>Precisa ser um Número seu Imbécil</div>"
  }

  if (numero > maiorValor || numero < menorValor) {
    elementoChute.innerHTML += `<div>Precisa estar entre ${menorValor} e ${maiorValor} seu burro</div>`
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
    <h2>Você acertou!</h2>
    <h3>O número secreto era ${numeroSecreto}</h3>
    `
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `
    <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
    `
  } else {
    elementoChute.innerHTML += `
    <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
    `
  }
}
