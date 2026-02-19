let numeroInicial = parseInt(prompt("Qual o numero inicial?"))
let numeroFinal = parseInt(prompt("Qual o numero final?"))
let armazenaNumero = 0

if (numeroFinal < numeroInicial) {
    // for normal
    armazenaNumero = numeroInicial
    numeroInicial = numeroFinal
    numeroFinal = armazenaNumero  
}

for (let i = numeroInicial; i <= numeroFinal; i++) {
        console.log(`Número: ${i}`)
}