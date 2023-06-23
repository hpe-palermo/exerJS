const frm = document.querySelector("form")
const saida = document.querySelector("h3")

const rom = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}

let numUsados = 0
let rep = 0

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    numUsados = 0
    rep = 0
    const numRom = frm.inNumero.value
    calculaNum(numRom.toUpperCase())
})

function comparaNum(n1, n2, ult) {
    let a = rom[n1]
    let b = rom[n2]
    console.log(a,b,ult)
    if (a < b) {
        rep = 0
        numUsados += 2
        return b - a
    } else if (a > b) {
        rep = 0
        numUsados++
        return a
    } else {
        if (ult == n1) {
            rep += 2
            numUsados += 2
            return 2 * b
        } else {
            rep++
            numUsados++
            return b
        }
    }
}

function calculaNum(numRom) {
    let numDec = 0
    let ult = [""]
    let i = 0
     
    while (i < numRom.length - 1) {
        let x = numRom[i]
        let y = numRom[i + 1]
        numDec += comparaNum(x, y, ult[0])
        if(numUsados==2){
            ult[0] = x
            i += 2
        }
        else if(rep==3){
            ult[0] = ""
            i += 2
        }else{
            ult[0] = x
            i += 2
        }
        

    }

    if(numUsados != numRom.length){
        numDec += rom[numRom[numRom.length-1]]
    }
    

    saida.innerText = "Número Decimal: "+numDec
}
