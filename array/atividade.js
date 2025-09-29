let a = [];
for (let i = 0; i < 10; i++) {
    let preco = parseFloat(prompt(`Digite o preço do produto ${i + 1}:`));
    a.push(preco);
}

window.onload = function() {
    let valor = document.getElementById("valor");
    valor.innerHTML = "Valores: " + a.join(", ");

    let soma = a.reduce((total, num) => total + num, 0);
    document.getElementById("soma").innerHTML = "Soma: " + soma.toFixed(2);

    let media = soma / a.length;
    document.getElementById("media").innerHTML = "Média: " + media.toFixed(2);
};
