function conversor(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}
let celsius = parseFloat(prompt("Digite a temperatura em graus Celsius:"));
let fahrenheit = conversor(celsius);
document.write(celsius + "°C equivalem a " + fahrenheit.toFixed(2) + "°F.");