const salgado1 = prompt("Qual nome do primeiro salgado?")
const valorSalgado1 = parseFloat(prompt(`Qual valor do salgado ${salgado1}`))
const salgado2 = prompt("Qual nome do segundo salgado?")
const valorSalgado2 = parseFloat(prompt(`Qual valor do salgado ${salgado2}`))
const refri1 = prompt("Qual nome do primeiro refri?")
const valorRefri1 = parseFloat(prompt(`Qual valor do ${refri1}`))
const refri2 = prompt("Qual nome do segundo refri?")
const valorRefri2 = parseFloat(prompt(`Qual valor do ${refri2}`))
const taxaEntrega = parseFloat(prompt("Qual a taxa de entrega?"))

const total = valorSalgado1 + valorSalgado2 + valorRefri1 + valorRefri2 + taxaEntrega
const totalPorPessoa = total / 3

alert(`
    O total do pedido ficou R$ ${total.toFixed(2)}
    \n
    O total por pessoa ficou R$ ${totalPorPessoa.toFixed(2)}
    `)

