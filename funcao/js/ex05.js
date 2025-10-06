function produtoTotal() {
    let itens = [];
    let total = 0;
    while (true) {
        let valor = prompt("Digite o valor do produto (ou deixe vazio para finalizar):");
        if (valor === "" || valor === null) break;
        itens.push(parseFloat(valor));
    }
    for (let i = 0; i < itens.length; i++) {
        total += itens[i];
    }
    return total;
}

function exibirParcelas(total, parcelas, desconto) {
    let totalComJuros = total * 1.2;
    let valorParcela = totalComJuros / parcelas;
    let descontoAplicado = total * 0.3
    document.write(`O valor total da compra é R$${total.toFixed(2)}<br>`);
    document.write(`O valor total da compra com juros é R$${totalComJuros.toFixed(2)}<br>`);
    document.write(`O valor de cada parcela em ${parcelas}x é R$${valorParcela.toFixed(2)}<br>`);
    document.write(`O valor do desconto à vista é R$${descontoAplicado.toFixed(2)}<br>`);
} 


let total = produtoTotal();
let parcelas = Number(prompt("Digite o número de parcelas:"));
exibirParcelas(total, parcelas);
let desconto = total * 0.3;
document.write(`O valor do desconto à vista é R$${desconto.toFixed(2)}<br>`);