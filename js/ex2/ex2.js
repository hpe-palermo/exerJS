function calcular(){
    const resp = document.querySelector("h3")
    const vlr100 = 30
    const vlr175 = 60
    const vlr300 = 120

    const vlr = Number(document.getElementById("vlr").value)
    if(vlr < 1){
        resp.innerText = "Valor insuficiente"
    }else if(vlr < 1.75){
        
    }
}