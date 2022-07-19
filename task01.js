'use strict';

const courseEuroDollar = 1.2;
const coursDollarRuble = 72;

const convertorEuro = () => {
    const purchaseСost = Number(prompt('Введите стоимость покупки в евро', ''));
    return Math.round(purchaseСost*courseEuroDollar*coursDollarRuble)
}
console.log(convertorEuro());