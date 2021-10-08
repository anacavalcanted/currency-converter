const button = document.getElementById("convert-button")
const currencySelect = document.getElementById("currency-select")



const convertValues = async () => {
    const inputReais = document.getElementById("input-real").value
    const realValueText = document.getElementById("real-value-text")
    const currencyValueText = document.getElementById("currency-value-text")
    
    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcon = data.BTCBRL.high

    realValueText.innerHTML = new Intl.NumberFormat
        ('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(inputReais);

    if (currencySelect.value === "US$ Dólar Americano") {
        currencyValueText.innerHTML = new Intl.NumberFormat
            ('en-US', {
                style: 'currency',
                currency: 'USD',
            }).format(inputReais / dolar);

    }

    else if (currencySelect.value === "€ Euro") {
        currencyValueText.innerHTML = new Intl.NumberFormat
            ('de-DE', {
                style: 'currency',
                currency: 'EUR',
            }).format(inputReais / euro);

    }

    else if (currencySelect.value === "₿ Bitcon") {
        currencyValueText.innerHTML = new Intl.NumberFormat
            ('btc-bitcon', {
                style: 'currency',
                currency: 'BTC',
            }).format(inputReais * bitcon);

    }


}
currencyChange = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

    if (currencySelect.value === "€ Euro") {
        currencyName.innerHTML = "EURO"
        currencyImg.src = "./EURO.png"

    }

    else if (currencySelect.value === "₿ Bitcon") {
        currencyName.innerHTML = "BITCON"
        currencyImg.src = "./BITCON.png"
    }



    else if (currencySelect.value === "US$ Dólar Americano") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./EUA.png"
    }

    convertValues ()
}

button.addEventListener("click", convertValues)
currencySelect.addEventListener("change", currencyChange)