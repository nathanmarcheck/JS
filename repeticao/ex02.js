function tabuada(){
    var num = parseInt(document.getElementById("numInput").value);
    var result = document.getElementById("result");
    result.innerHTML = "";

    for(var i = 0; i < 11; i++){
        var item = document.createElement("option");
        item.text = `${num} x ${i} = ${num * i}`;
        result.appendChild(item);
        
    }
}
