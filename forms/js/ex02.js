function converterMoeda() {
    var valorReais = parseFloat(document.getElementById('real').value);
    var cotacaoDolar = parseFloat(document.getElementById('cotacao').value);
    if (isNaN(valorReais) || isNaN(cotacaoDolar) || cotacaoDolar <= 0) {
        document.getElementById('resultado').innerText = 'Por favor, insira valores válidos.';
        return;
    }
    var valorDolar = valorReais / cotacaoDolar;
    document.getElementById('resultado').innerText = `Valor em Dólares: $${valorDolar.toFixed(2)}`;
}