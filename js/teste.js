//dom

const dist = document.querySelector("#distancia")
const cons = document.querySelector("#consumo")
const gasol = document.querySelector("#preco")
const bot = document.querySelector("#botao")
const result = document.querySelector("#resultado")




//evento

bot.addEventListener("click", viagem)




//função

function viagem(){
    d=Number(dist.value)
    c=Number(cons.value)
    g=Number(gasol.value)

    valor=(d/c)*g
    resultado.textContent=`A sua viagem vai custar R$${valor.toFixed(2)}`

}





