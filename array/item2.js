var lista = ["Gervronilson", 12, "Estrada A", "Linha C", 18.5, 1800, true];
alert(lista)
for (var i = 0; i < lista.length; i++) {
    document.write("<h2>" + lista[i] + "</h2><br>");
}
lista.push("84500-000");
alert(lista)
lista.pop();
alert(lista)
lista.shift();
alert(lista)
lista.unshift("Gervronildo");
alert(lista)

