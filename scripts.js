const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")  //valor a converter:Real
    const currencyValueConverted = document.querySelector(".currency-value")  //valor convertido:dolar,euro

    const dolarToday = 5.2
    const euroToday = 5.42
    const bitcoinToday = 128602.07


    if (currencySelect.value == "dolar") {   //se fosse usar ELSE, e mais tarde add outras moedas, talvez não ficaria bom.
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {  //Intl, configuração p/ formatar número.
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }


    if (currencySelect.value == "euro") { // (idem p/ ambos if) se o select estiver selecionado valor de "dolar/euro",entre aqui.
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")


    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    convertValues()
}

    currencySelect.addEventListener("change", changeCurrency)
    convertButton.addEventListener("click", convertValues)
