function somar() {
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    if (n1 === null || n2 === null || isNaN(n1) || isNaN(n2)) {
        document.getElementById("error").innerHTML = "Por favor, insira números válidos.";
        return;
    }
    document.getElementById("resultado").innerHTML = `O resultado da soma é: ${n1 + n2}`;
}
function multiplicar() {
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    if (n1 === null || n2 === null || isNaN(n1) || isNaN(n2)) {
        document.getElementById("error").innerHTML = "Por favor, insira números válidos.";
        return;
    }
    document.getElementById("resultado").innerHTML = `O resultado da multiplicação é: ${n1 * n2}`;
}
function dividir() {
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    if (n1 === null || n2 === null || isNaN(n1) || isNaN(n2) || n2 == 0 || n1 == 0) {
        document.getElementById("error").innerHTML = "Por favor, insira números válidos e diferentes de zero para divisão.";
        return;
    }
    document.getElementById("resultado").innerHTML = `O resultado da divisão é: ${n1 / n2}`;
}
function subtrair() {
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    if (n1 === null || n2 === null || isNaN(n1) || isNaN(n2)) {
        document.getElementById("error").innerHTML = "Por favor, insira números válidos.";
        return;
    }
    document.getElementById("resultado").innerHTML = `O resultado da subtração é: ${n1 - n2}`;
}