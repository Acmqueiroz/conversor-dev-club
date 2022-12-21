const button = document.getElementById('convert-button')
const select = document.getElementById("currency-select")

const dolar = 5.2
const euro = 5.9
const btc = 87468.5

const convertValues = () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')

    realValueText.innerHTML = new Intl.NumberFormat("pt-bR", {
        style: "currency",
        currency: "BRL",

    }).format(inputReais);
if (select.value ==="US$ Dólar americano") {
    currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(inputReais / dolar);
}
   if (select.value === "€ Euro") {
    currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
    }).format(inputReais / euro);
   }
   if (select.value === "BTC Bitcoin") {
    currencyValueText.innerHTML = new Intl.NumberFormat("ja-JP", {
        style: "currency",
        currency: "BTC",
    }).format(inputReais / btc);
   }}

changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

    if(select.value === 'US$ Dólar americano'){
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./usdt.svg"
    }

    if(select.value === '€ Euro'){
    currencyName.innerHTML = "Euro"
    currencyImg.src = "./euro.svg"
    }
    if(select.value === 'BTC Bitcoin'){
    currencyName.innerHTML = "BTC"
    currencyImg.src = "./biticoin.png"
    }

    convertValues()
//console.log (select.value)
//console.log("fui chamado")
}


button.addEventListener('click', convertValues)
select.addEventListener("change", changeCurrency)