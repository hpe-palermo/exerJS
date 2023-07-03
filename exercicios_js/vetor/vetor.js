const frm = document.querySelector('form')
const saida = document.querySelector('h3')

frm.addEventListener("submit",(e)=>{
    e.preventDefault()

    const frase = frm.texto.value
    const termo = frm.addTexto.value
    let indices = frm.indices.value.split(" ")
    indices = Array.from(new Set(indices))
    indices = indices.filter((elem) => {
        return elem != ""
    })
    indices = indices.map((elem) => Number(elem))

    alterarTexto(frase,termo,indices)
    
})

function alterarTexto(palavra,addTexto,indices) {
    let palavravetor = []    

    for (let i = 0; i < palavra.length; i++) {
        if(indices.includes(i)){
            palavravetor.push(addTexto)
        }
        palavravetor.push(palavra[i])
    }
    saida.innerText = palavravetor.join("")
}
