function tipoTriangulo(){
    const resp = document.querySelector("h3")
    const lado1 = Number(document.getElementById("lado1").value)
    const lado2 = Number(document.getElementById("lado2").value)
    const lado3 = Number(document.getElementById("lado3").value)

    if(lado1 + lado2 > lado3 || lado1 + lado3 > lado2 || lado3 + lado2 > lado1){
        if(lado1==lado2 && lado2==lado3){
            resp.innerText = "Equilátero"
            resp.style.color = "red"
        }
        else if(lado1==lado2 && lado2!=lado3 || lado1==lado3 && lado3!=lado2 || lado3==lado2 && lado2!=lado1){
            resp.innerText = "Isósceles"
            resp.style.color = "blue"
        }
        else if(lado1!=lado2 && lado2!=lado3 && lado1!=lado3){
            resp.innerText = "Escaleno"
            resp.style.color = "green"
        }
    }
}