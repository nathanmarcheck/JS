function lernotas() {
    let notas = [];
     for (let i = 0; i < 3; i++) {
        notas[i] = parseFloat(prompt("Digite as notas (prova, trabalho e lista) " + (i + 1) + ": "))
    }
    return notas
}
function calcularMedia(notas){
    return (notas[0] *0.7) + (notas[1] *0.2) + (notas[2] *0.1 )
}
function exibirResultado(calcularMedia){
    if (calcularMedia >= 7) {
        document.write("Aprovado")
    }
    else if (calcularMedia >= 4 && calcularMedia < 7) {
        document.write("Exame")
    }
    else {
        document.write("Reprovado")
    }
}
let notas = lernotas()
let media = calcularMedia(notas)
exibirResultado(media)
