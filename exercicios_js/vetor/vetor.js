const frm = document.querySelector('form')
const saida = document.querySelector('h3')

frm.addEventListener("submit",(e)=>{
    e.preventDefault()

    const frase = frm.texto.value
    const vetor = frase.split(";")

    let palavravetor = []
    let palavra = []
    for (let i = 0; i < vetor[0].length; i++) {
        palavra.push(frase[i])
    }
    
    for (let i = 0; i < palavra.length; i++) {
        for (let j = 2; j < vetor.length; j++) {
            if (i == Number(vetor[j])){
                palavravetor.push(vetor[1] + " ")
            }
        }
        palavravetor.push(palavra[i])
    }
    saida.innerText = palavravetor.join(" ")
})
