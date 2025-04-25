/*
    Calcula Desconto:
    Todos os produtos acima de R$30,00 tem desconto de 10%.
*/

const cart = [10, 244, 99, 2, 20, 33, 250]
let finalValueWithDiscount = 0
let solidValue = 0

function calculateDiscount(price, discount){
    const result = (price * discount) / 100
    return result
}

cart.forEach( value => {
    if (value > 30){
        const discont = calculateDiscount (value, 10)
        finalValueWithDiscount = finalValueWithDiscount + (value - discont)
    }else {
        finalValueWithDiscount += value
    }
});

cart.forEach( value => {
    solidValue += value
    return solidValue
});

let economy = (solidValue - finalValueWithDiscount)

console.log(`Valor bruto da compra R$ ${solidValue.toFixed(2)}
Valor liquido da compra R$ ${finalValueWithDiscount.toFixed(2)}
Valor economizado R$ ${economy.toFixed(2)}`)