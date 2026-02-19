alert("Seja bem vindo, vamos calcular a média")

const nome = prompt("Qual nome do aluno?")
const n1 = parseFloat(prompt("Qual a primeira nota?"))
const n2 = parseFloat(prompt("Qual s segunda nota?"))

const media = (n1 + n2) / 2

alert(`A média das notas é ${media}`)

if (media >= 6) {
    alert(`O aluno ${nome} está aprovado`)
} else {
    alert(`O aluno ${nome} está reprovado`)
}