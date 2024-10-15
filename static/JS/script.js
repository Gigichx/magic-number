
function generateRandomInteger(min = 1, max = 100) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    num = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    return num
}

function sanitize(Var) {
    let sanificata
    if (!isNaN(Var)) {
        sanificata = parseInt(Var.trim());
    } else {
        sanificata = NaN;
    }
    return sanificata
}

function handleClick(event) {
    let input = document.querySelector("#guess").value
    numeroInserito = sanitize(input)
    let elem = document.querySelector("#tentativi")
    let elem2 = document.querySelector("#numero")
    let elem3 = document.querySelector("#indovinato")

    if (isNaN(numeroInserito)) {
        console.log("Inserisci un numero valido")
    } else {
        if (numeroInserito > numEFFETIVO) {
            console.log("Il numero '" + numeroInserito + "' è troppo grande")
            elem2.innerHTML = `Il numero ${numeroInserito} è troppo grande`
            tentativi -= 1
            contatore += 1
        } else if (numeroInserito < numEFFETIVO) {
            console.log("Il numero '" + numeroInserito + "' è troppo piccolo")
            elem2.innerHTML = `Il numero ${numeroInserito} è troppo piccolo`
            tentativi -= 1
            contatore += 1
        } else if (numeroInserito === numEFFETIVO) {
            console.log("Bravo, hai vinto!")
            elem3.innerHTML = `Bravo, hai vinto! Il numero era ${numEFFETIVO}`
            indovinato = true
            document.querySelector("#guess").disabled = true;
            document.querySelector("#guessBtn").disabled = true;
        }
    }
    if (tentativi === 0 && !indovinato) {
        console.log("Hai esaurito i tentativi, hai perso!")
        elem3.innerHTML = `Mi dispiace, hai perso! Il numero era ${numEFFETIVO}`
        document.querySelector("#guess").disabled = true;
        document.querySelector("#guessBtn").disabled = true;
    }
    elem.innerHTML = "Hai ancora " + tentativi + " tentativi";
}


console.log("Benvenuto a 'INDOVINA IL NUMERO!'")
let tentativi = 5
let contatore = 0
let indovinato = false
let numEFFETIVO = generateRandomInteger()
let numeroInserito
let userField = document.querySelector("#guess")
let btn = document.querySelector("#guessBtn")
btn.addEventListener("click", handleClick)
let elem = document.querySelector("#tentativi")
elem.innerHTML = "Hai ancora " + tentativi + " tentativi"
