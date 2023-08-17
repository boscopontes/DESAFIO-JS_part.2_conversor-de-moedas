const convertButton = document.querySelector(".convert-button")

function convertValues(){

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const convertedValue =  inputCurrencyValue / dolarToday
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")     //valor a converter:Real
    const currencyValueToConverted = document.querySelector(".currency-value")  //valor convertido:dolar,euro

    const dolarToday = 5.2

    const convertValue = inputCurrencyValue / dolarToday

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)



    currencyValueToConverted.innerHTML = convertedValue


}



convertButton.addEventListener("click", convertValues)