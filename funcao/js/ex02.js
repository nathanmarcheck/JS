
function lerValores(){
    let n1 = prompt("Digite o primeiro número: ")
    let n2 = prompt("Digite o segundo número: ")
    let n3 = prompt("Digite o terceiro número: ")
    return [n1, n2, n3]
}
function multiplicar(lerValores){
    return valores [0] * valores [1] * valores [2]
}
function exibirResultado(multiplicar){
    document.write("O resultado da multiplicação é: " + multiplicar)
}
let valores = lerValores()
let resultado = multiplicar(valores)
exibirResultado(resultado)