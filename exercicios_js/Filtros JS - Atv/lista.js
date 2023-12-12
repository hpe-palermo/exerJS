let nameList = ["Aline","Otavio", "Camila", "Nareba", "Jean","Julio", "Julio Rodalo", "Rany", "Ti"]

let listEl = document.getElementById("list")
let span = document.querySelector("span")

this.fillList()

function fillList(list = nameList){
    listEl.innerHTML = ""
    for(let i=0; i<list.length; i++){
        let listItens = document.createElement("li")
        listItens.innerHTML = list[i]
        listEl.appendChild(listItens)
    }
}

/*=============================
    FILTRAR
=================================*/

function filtrar(){
    if(document.getElementById("searchField").value){
        const filteredList = nameList.filter(el => {
            const listItems = el.toLowerCase()
            const searchWord = searchField.value.toLowerCase()
            return listItems.includes(searchWord)
        })
        fillList(filteredList)
    }else{
        fillList()
    }
    
}

/*============================
    ADICIONAR
================================*/

function adicionar(){
    let nome_input = document.querySelector("#searchField").value
    let nome = ""

    if(!nome_input){
        alertaErro("Não é possível adicionar um nome vazio!!!")
        document.querySelector("#searchField").focus() 
    }else{
        nome_input.split(" ").forEach(element => {
            element = element.substring(0,1).toUpperCase() + element.substring(1,element.length).toLowerCase()
            nome += element
        });
        nome.trimEnd()
        if(nome_repetido(nome)){
            alertaErro("Não é possível adicionar um nome repetido!!!")
            document.querySelector("#searchField").focus()
        }else{
            nameList.push(nome)
            fillList()
            alertSucesso("Nome adicionado!")
        }
    }
}

/*============================
    EXISTE NOME REPETIDO
================================*/
function nome_repetido(nome){
    return nameList.includes(nome)
}


/*============================
    SELECIONAR
================================*/

function selecionar(){
    fillList()
    //arrumar isto
    alertSucesso("Clique no nome que deseja remover")
    let lista_nomes = document.querySelectorAll("li")
    let i = 0

    lista_nomes.forEach(li => {
        li.id = i
        li.addEventListener("click",remover)
        i = soma(i)
        li.addEventListener("mouseenter",entrou)
        li.addEventListener("mouseleave",saiu)
    })
    
}

/*============================
    ITERAR O ID
================================*/

function soma(i){
    return i+1
}

/*============================
    REMOVER
================================*/
function remover(event){
    fillList()
    let elem = event.target
    let nome_excluir = elem.innerHTML
    let acionou = elem.id
    
    if(acionou == "btnRemover"){
        nameList.pop()
        fillList()
        
    }else{
        nameList = nameList.filter(el => {
            return el != nome_excluir
        })
        fillList()
    }    
    alertSucesso("Nome removido!")
}

/*============================
    MOUSE ENTROU
================================*/
function entrou(event){
    event.target.style.background = "#00f"
    event.target.style.color = '#fff'
}


/*============================
    MOUSE SAIU
================================*/

function saiu(event){
    event.target.style.background = "#0a1d1f"
    event.target.style.color = 'aqua'
}

/*============================
    ALERTA ERRO
================================*/

function alertaErro(msg){
    span.style.color = "#dd0000"
    span.innerHTML= msg
    setTimeout(e => {
        span.innerHTML = ""
    },2000)
}

/*============================
    ALERTA SUCESSO
================================*/

function alertSucesso(msg){
    span.style.color = "#43fe5f"
    span.innerHTML = msg
    setTimeout(e => {
        span.innerHTML = ""
    },2000)
}


//EXCLUIR ISSO
document.getElementById("acerto-input").addEventListener("input",e => {
    document.querySelector("span").style.color = document.getElementById("acerto-input").value
    document.querySelector("span").innerHTML = "Acerto: "+document.getElementById("acerto-input").value 
    document.querySelector("#searchField").value = document.getElementById("acerto-input").value
})


/*
let corErro = document.getElementById("erro-input").value
document.getElementById("erro-input").addEventListener("input",e => {
    document.getElementById("erro").style.color = corErro
    document.getElementById("erro").innerHTML = "Erro "+corErro 
})*/