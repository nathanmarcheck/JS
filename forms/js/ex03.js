function calcularPA() {
    var primeiroTermo = parseFloat(document.getElementById('v1').value);
    var razao = parseFloat(document.getElementById('r').value);
    var numTermos = parseInt(document.getElementById('n').value);
    if (isNaN(primeiroTermo) || isNaN(razao) || isNaN(numTermos) || numTermos <= 0) {
        document.getElementById('resultado').innerText = 'Por favor, insira valores válidos.';
        return;
    }
    var termos = [];
    for (var i = 0; i < numTermos; i++) {
        termos.push(primeiroTermo + i * razao);
    }
    document.getElementById('resultado').innerText = 'Termos da PA: ' + termos.join(', ');
}