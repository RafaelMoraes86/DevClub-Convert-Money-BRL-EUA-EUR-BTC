const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dolar = 5.08
const euro = 5.52
const bitCoin = 0.0000086

const convertValues = () => {
    const inputReias = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-text')
    const currencyValueText = document.getElementById('currency-text')

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
        }).format(inputReias * bitCoin)
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