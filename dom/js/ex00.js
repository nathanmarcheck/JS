
// alert(elemento)
function mudarTitulo(){
   var elemento = document.getElementById("titulo").innerHTML = "manipular"
   var elemento2 = document.getElementById("mundo").innerHTML = "Eu não aguento +++++++"

//    elemento.innerHTML = "Manipulando titulo via js"
}
function mudarCor(){
    var elemento = document.getElementById("titulo").style.color = '#222181ff'
    var elemento2 = document.getElementById("mundo").style.color = '#222181f0'
    var el3 = document.getElementById("fundo").style.background = 'rgba(226, 94, 17, 1)'

}
function destacar(){
    var el = document.getElementById("titulo").classList.add("destaque")
    var el2 = document.getElementById("mundo").classList.add("destaque")
    
}
function remover(){
    var el = document.getElementById("titulo").classList.remove("destaque")
    var el2 = document.getElementById("mundo").classList.remove("destaque")
   
}
function alternar(){
    var el = document.getElementById("titulo").classList.toggle("destaque")
    var el2 = document.getElementById("mundo").classList.toggle("destaque")
}
function adicionarTexto(){
    var novo =  document.createElement("p")
    novo.innerText = "Novo paragrafo criado com JS"
    novo.id = "paragrafo"
    var container = document.getElementById("conteiner")
    container.appendChild(novo)
}
function removerTexto(){
    var paragrafo = document.getElementById("paragrafo")
    if(paragrafo){
        paragrafo.remove()
    }
    else{
        alert("Não há texto para remover")
    }
}

function removerTudo(){
    var limpa = document.getElementById("conteiner")
    if(conteiner){
        limpa.remove()
        }
        else{
            alert("Não a o que limpa")
        }
    }
function colorir(){
    var itens = document.querySelectorAll("p")
    for(var i = 0; i<itens.length;i++){
        itens[i].style.color = "green"
    }
}