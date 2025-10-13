function calcularIMC() {
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.getElementById('resultado').innerText = 'Por favor, insira valores válidos para peso e altura.';
        return;
    }
    var imc = peso / (altura * altura);
    var classificacao = '';
    if (imc < 18.5) {
        classificacao = 'Baixo peso';
    } else if (imc < 25) {
        classificacao = 'Peso normal';
    } else if (imc < 30) {
        classificacao = 'Sobrepeso';
    } else if (imc < 40) {
        classificacao = 'Obesidade';
    } else {
        classificacao = 'Obesidade mórbida';
    }
    document.getElementById('resultado').innerText = `Seu IMC é: ${imc.toFixed(2)} (${classificacao})`;
}
