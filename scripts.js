const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')



const convertValues = async () => {
    const inputReias = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-text')
    const currencyValueText = document.getElementById('currency-text')

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response =>response.json())

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitCoin = data.BTCBRL.high

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReias);

    if (select.value === 'US$ Dólar Americano') {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReias / dolar);
    }
    if (select.value === '€ Euro') {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputReias / euro)
    }

    if(select.value === 'Bitcoin') {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', {
            maximumFractionDigits:10,
            style: 'currency',
            currency: 'XBT'
        }).format(inputReias / bitCoin)
    }

}

const currencySelect = () => {
    const currancyName = document.getElementById('currency-name')
    const currancyImg = document.getElementById('currancy-img')

    if (select.value === 'US$ Dólar Americano') {
        currancyName.innerHTML = 'Dólar Americano'
        currancyImg.src = './img/E.U.A.png'
    }

    if (select.value === '€ Euro') {
        currancyName.innerHTML = 'Euro'
        currancyImg.src = './img/Euro.png'
    }

    if(select.value === 'Bitcoin'){
        currancyName.innerHTML = 'Bitcoin'
        currancyImg.src = './img/Bitcoin.png'
    }
    convertValues ()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', currencySelect)