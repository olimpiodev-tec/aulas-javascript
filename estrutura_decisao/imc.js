alert("Olá, vamos calcular seu IMC")

const nome = prompt("Qual seu nome?")
const altura = parseFloat(prompt("Qual sua altura?"))
const peso = parseInt(prompt("Qual seu peso?"))

if (altura <= 0 || peso <=0) {
    alert("Informações inválidas")
} else {
    const resultado = peso / (altura * altura)
    alert(`${nome}, o valor do IMC é ${resultado.toFixed(2)}`)

    if (resultado < 18.5) {
        alert("Classificação: Abaixo do peso")
    } else if (resultado >= 18.5 && resultado < 24.9) {
        alert("Classificação: Peso normal")
    } else if (resultado >= 24.9 && resultado < 29.9) {
        alert("Classificação: Sobrepeso")
    } else if (resultado >= 29.9 && resultado < 34.9) {
        alert("Classificação: Obesidade Grau I")
    } else if (resultado >= 34.9 && resultado < 39.9) {
        alert("Classificação: Obesidade Grau II")
    } else {
        alert("Classificação: Obesidade grau III")
    }
}