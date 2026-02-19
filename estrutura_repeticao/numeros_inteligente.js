const numeroInicial = parseInt(prompt("Qual o numero inicial?"))
const numeroFinal = parseInt(prompt("Qual o numero final?"))

if (numeroFinal > numeroInicial) {
    // for normal
    for (let i = numeroInicial; i <= numeroFinal; i++) {
        console.log(`Número: ${i}`)
    }
} else if (numeroInicial > numeroFinal) {
    // for reverso
    for (let i = numeroInicial; i >= numeroFinal; i--) {
        console.log(`Número: ${i}`)
    }
}