//exemplo 01    
function exibir(){
    alert("Manipulação")
}
function exibir_funcaoanonima(){
    let botao = document.getElementById("btn1")

    botao.addEventListener("click", function(){alert("A função anônima não possui nome. Exempli: Function(){...} são conhecidas de callback ou função de evento (Hevent Handler")})

}
function exibir_funcaonominada(){
    let botao = document.getElementById("btn2")

    botao.addEventListener("click", exibir)
     

}
function exibir_flecha(){
    let botao = document.getElementById("btn3")

    botao.addEventListener("click", () =>{
        alert("toma")
    })

}
function passar_mause(){
    let mouse = document.getElementById("mause")

    mouse.addEventListener("mouseout", () =>{
        mouse.style.color = "black"
        mouse.innerText = "Passe o mause aqui"
    })

    mouse.addEventListener("mouseover", () =>{
        mouse.style.color = "blue"
    })
}
passar_mause()
exibir_flecha()
exibir_funcaonominada()
exibir_funcaoanonima()