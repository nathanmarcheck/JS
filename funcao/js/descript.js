// função sem retorno
function somar(){
    var n1 = 3, n2 = 4
    console.log(n1 + n2)
}
// for(var i = 1; i <= 5; i++)
//     {
//         somar()
//     }

// função com parametro
function subtrair(n1, n2){
    console.log(n1 - n2)
}

subtrair(8, 3)

// função com parametro e retorno
function multiplicar(n1, n2){
    return n1 * n2
}
var r = multiplicar(9, 5)
console.log(r)

