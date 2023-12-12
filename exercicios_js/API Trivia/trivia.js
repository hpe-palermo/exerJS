function fazerTrivia(num_questoes, categoria){
    const categorias = {
        "livros": 10,
        "computacao": 18,
        "matematica": 19,
        "musicas": 12,
        "natureza": 17,
        "filmes": 11,
        "todas_categorias": "Any Category"
    }
    
    const c = categorias[categoria]
    let parte_n = `amount=${num_questoes}`
    let parte_c = `&category=${c}`
    
    if (c == "Any Category"){
        parte_c = ""
    }
    
    return `https://opentdb.com/api.php?${parte_n}${parte_c}`
}

let gabarito = new Map()

function montarGabarito(trivia){
    for (let i = 0; i < trivia.length; i++) {
        gabarito.set(`${i+1}`, trivia[i].correct_answer)
    }
}

function montarQuestionario(questionario, trivia){
    questionario.innerHTML = ""
    let h1_questoes = document.createElement("h1")
    h1_questoes.innerText = "Questionário"
    h1_questoes.className = "mt-2"
    h1_questoes.id = "alinhar_ao_centro"
    questionario.appendChild(h1_questoes)
     

    for (let i = 0; i < trivia.length; i++) {
        let cat = trivia[i].category
        let nome_questao = trivia[i].question
        let res_certa = trivia[i].correct_answer
        let res_erradas = trivia[i].incorrect_answers

        // montar opcoes
        let corpo_q = document.createElement("div")
        let h3_cat = document.createElement("div")

        let h3_nome_question = document.createElement("h3")
        h3_nome_question.innerText = `${i+1} - ${nome_questao}`

        corpo_q.appendChild(h3_nome_question)

        // alternativas
        let alternativas = document.createElement("ul")
        let li = document.createElement('li')
        li.innerText = res_certa
        alternativas.appendChild(li)

        for (let j = 0; j < res_erradas.length; j++) {
            let li = document.createElement('li')
            li.innerText = res_erradas[j]
            alternativas.appendChild(li)
        }
        corpo_q.appendChild(alternativas)
        questionario.appendChild(corpo_q)
    }

    montarGabarito(trivia)
}

async function triviaAPI() {
    const num_questoes = Number(document.getElementById("num_questoes").value)
    let select = document.getElementById("sel_categoria")
    const categoria = select.options[select.selectedIndex].value

    const url = fazerTrivia(num_questoes, categoria)
    const dados = await fetch(url)
    const trivia = await dados.json()
    document.querySelector(".inputs").className += " my-3"
    document.getElementById("gerarTrivia").style.display = "none"
    document.getElementById("verGabarito").style.display = "inline"
    document.getElementById("verGabarito").className += " my-3"
    const questionario = document.getElementById("questionario")
    questionario.style.maxHeight = "300px"
    questionario.className = ""
    montarQuestionario(questionario, trivia.results)
}

function conferirGabarito(){
    document.getElementById("verGabarito").style.display = "none"
    document.getElementById("gabarito").className = ""
    // document.getElementById("verGabarito").style.marginTop = "20px"
    document.getElementById("jogar_denovo").style.display = "inline"

    let mostrarGabarito = document.getElementById("gabarito")
    mostrarGabarito.innerHTML = ""
    mostrarGabarito.style.maxHeight = "200px"
    mostrarGabarito.style.marginTop = "20px"
    mostrarGabarito.style.marginBottom = "20px"
    let h1 = titulo = document.createElement('h1')
    h1.innerText = "Gabarito"
    h1.id = "alinhar_ao_centro"
    mostrarGabarito.appendChild(h1)
    
    
    for (let i = 0; i < gabarito.size; i++) {
        let div = document.createElement("div")
        div.innerText += `${i+1})${gabarito.get((i+1)+"")}`
        mostrarGabarito.appendChild(div)
    }
    
}
function jogarNovamente(){
    location.reload()
}

document.getElementById("jogar_denovo").addEventListener('click',jogarNovamente)
// document.getElementById("num_questoes").addEventListener('input',triviaAPI)
// document.getElementById("sel_categoria").addEventListener('change',triviaAPI)
document.getElementById("gerarTrivia").addEventListener('click', triviaAPI)
document.getElementById("verGabarito").addEventListener('click', conferirGabarito)
