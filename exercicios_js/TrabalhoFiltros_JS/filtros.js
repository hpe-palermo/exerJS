let nameList = []
let nameList_new = ["Aline","Otavio", "Camila", "Nareba", "Jean","Julio", "Julio Rodalo", "Rany", "Ti"]
let listEl = document.getElementById("list")
let caixa_texto = document.querySelector("input")
let btnAdicionar = document.querySelector("#btnAdicionar")
let btnSelecionar = document.querySelector("#btnSelecionar")
let btnFiltrar = document.querySelector("#btnFiltrar")
let btnRemover = document.querySelector("#btnRemover")
let h3 = document.createElement("h3")
let divRodape = document.createElement("div")
let conteiner = document.querySelector("#aki")
divRodape.appendChild(h3)
conteiner.appendChild(divRodape)


// for (let index = 0; index < nameList_new.length; index++){
//     adicionar(nameList_new[index])
// }

this.fillList(nameList_new)

//adicionar
btnAdicionar.addEventListener("click",() => {
    adicionar(document.querySelector("#searchField").value)
})

//filtrar
btnFiltrar.addEventListener("click", filtrar)

//selecionar
btnSelecionar.addEventListener("click",selecionar)

//remover
btnRemover.addEventListener("click",remover)


/*=============================
    FILL LIST
=================================*/
function fillList(esta_lista){
    listEl.innerHTML = ""
    
    for (let index = 0; index < esta_lista.length; index++) {
        let elementoLi = document.createElement("li")
        elementoLi.innerHTML = esta_lista[index]
        listEl.appendChild(elementoLi)
    }
}


/*=============================
    FILTRAR
=================================*/

let estaFuncao = () => {
    nameList = []
    let texto = document.querySelector("input").value.toLowerCase()
    let lista = nameList_new

    //alertaErro("Não é possível usar um filtro vazio!!!")
    
    lista = nameList_new.filter(elem => {
        return elem.toLowerCase().includes(texto)
    })
    
    fillList(lista)
}


//setar filtro
let esta_filtrando = 1

function filtrar(){

    let lista_elem = document.querySelectorAll("li")
    let selecao = -1

    for (let index = 0; index < lista_elem.length; index++){
        if(lista_elem[index].className == "nome-selecionado"){
            lista_elem[index].className = "nome-nao-selecionado"
            selecao = index
            break
        }        
    }
    
    esta_filtrando = esta_filtrando==0? 1:0
    
    document.querySelector("#searchField").focus()
    document.querySelector("#searchField").value = ""

    
    if(esta_filtrando == 0){
        alertaSucesso("Iniciando filtro!!!")
        caixa_texto.addEventListener("input", estaFuncao)
    }else{
        alertaSucesso("Encerrando filtro!!!")
        caixa_texto.removeEventListener('input', estaFuncao)
        fillList(nameList_new)
    }   
}



/*============================
    ADICIONAR
================================*/

function adicionar(nome_input){
    let nome = ""

    if(!nome_input){
        alertaErro("Não é possível adicionar um nome vazio!!!")
        document.querySelector("#searchField").focus() 
    }else{
        nome_input.split(" ").forEach(element => {
            element = element.substring(0,1).toUpperCase() + element.substring(1,element.length).toLowerCase()
            nome += " " + element
        });
        nome.trimEnd()
        if(nome_repetido(nome)){
            alertaErro("Não é possível adicionar um nome repetido!!!")
            document.querySelector("#searchField").focus()
        }else{
            nameList_new.push(nome)
            let elementoLi= document.createElement("li")
            elementoLi.innerHTML = nome
            listEl.appendChild(elementoLi)
            
            alertaSucesso(`Nome adicionado: ${nome}`)
            document.querySelector("#searchField").focus()
            document.querySelector("#searchField").value = ""
            
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
    
    if(esta_filtrando == 0){
        alertaErro("Deve desativar o filtro!!!")
    }else{
        let esta_lista = document.querySelectorAll("li")
        let selecao = -1
        for (let index = 0; index < esta_lista.length; index++) {
            if(esta_lista[index].className == "nome-selecionado"){
                esta_lista[index].className = "nome-nao-selecionado"
                selecao = index
                break
            }
        }
        if(selecao == esta_lista.length - 1){
            selecao = -1
        }

        esta_lista[selecao + 1].className = "nome-selecionado"
        
    }
    

}

/*============================
    REMOVER
================================*/
function remover(){

    let lista_elem = document.querySelectorAll("li")
    let selecao = -1

    for (let index = 0; index < lista_elem.length; index++){
        if(lista_elem[index].className == "nome-selecionado"){
            selecao = index
            break
        }        
    }

    // DESCOMENTAR ISSO
    if(selecao == -1){
        if(confirm(`Deseja remover "'${nameList_new[nameList_new.length-1]}"?`)){
            alertaSucesso("Nome removido: "+nameList_new[nameList_new.length-1])
            nameList_new.pop()
            fillList(nameList_new)
        }        
    }else{
        let ser_excluido = nameList_new[selecao]
        if(confirm(`Deseja remover "${ser_excluido}"?`)){
            alertaSucesso("Nome removido: "+nameList_new[selecao])
            nameList_new.splice(selecao,1)
            fillList(nameList_new)
        }
    }    
}


/*============================
    ALERTA ERRO
================================*/

function alertaErro(msg){
    h3.className = "alert alert-danger"
    let texto = document.createTextNode(msg)
    h3.appendChild(texto)
    setTimeout(e => {
        h3.innerHTML = ""
        h3.className = "hidden"
    },2000)
}

/*============================
    ALERTA SUCESSO
================================*/

function alertaSucesso(msg){
    h3.className = "alert alert-success"
    let texto = document.createTextNode(msg)
    h3.appendChild(texto)
    setTimeout(e => {
        h3.innerHTML = ""
        h3.className = "hidden"
    },2000)
}