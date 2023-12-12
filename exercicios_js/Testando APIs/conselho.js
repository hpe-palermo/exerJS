async function gerarConselho() {
    let conselho = document.querySelector("h3")
    const url = "https://api.adviceslip.com/advice"
    const dados = await fetch(url)
    const json_conselho = await dados.json()
    conselho.innerText = "Seu conselho:\n" + json_conselho.slip.advice
}
