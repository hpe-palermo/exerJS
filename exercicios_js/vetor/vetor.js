const frm = document.querySelector('form')
const saida = document.querySelector('h3')

frm.addEventListener("submit",(e)=>{
    e.preventDefault()

    const frase = frm.texto.value
    const vetor = frase.split(";")

    let palavra = []
    let indices = []
    for (let i = 0; i < vetor[0].length; i++) {
        palavra.push(frase[i])
        if(i>1)
        indices.push(vetor[i])
    }
    
    alterarTexto(palavra,vetor[1],vetor)
    
})

function alterarTexto(palavra,addTexto,vetor) {
    let palavravetor = []

    for (let i = 0; i < palavra.length; i++) {
        for (let j = 2; j < vetor.length; j++) {
            if (i == Number(vetor[j])){
                palavravetor.push(addTexto)
            }
        }
        palavravetor.push(palavra[i])
    }
    
    saida.innerText = palavravetor.join("")
}
