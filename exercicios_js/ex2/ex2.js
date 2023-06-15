function calcular(){
    const resp = document.querySelector("h3")

    let vlr = Number(document.getElementById("vlr").value)
    if(vlr < 1){
        resp.innerText = "Valor insuficiente"
        resp.style.color = 'red'

    }else{
        let resto = 0
        let tempo = 0

        if(vlr >= 3){
            resto = vlr%3
            let vezes300 = (vlr - resto)/3
            tempo = vezes300*120
            vlr = resto
        }

        if(vlr >= 1.75){
            resto = resto%1.75
            let vezes175 = (vlr - resto)/1.75
            tempo += vezes175*60
            vlr = resto

        }

        if(vlr >= 1){
            resto = resto%1
            let vezes100 = (vlr - resto)/1
            tempo += vezes100*30
            vlr = resto

        }

       resp.innerText = `Tempo: ${tempo} minutos.\nTroco: R$${resto.toFixed(2)}.`
       resp.style.color = 'green'
    }
}