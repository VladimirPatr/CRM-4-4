'use strict';

const amountInBasket = Number(prompt('Введите общую сумму корзины', ''));
const quantityInBasket = Number(prompt('Введите количество товаров в корзине', ''));
const promoСode = prompt('Введите промокод', '');
const coastPromo = 500;

const calculation = () => {
    let totalСost;
    const discountOne = (amountInBasket - 30000)/100*15;
    const coastPromo = 500;
    totalСost = amountInBasket;

    if (quantityInBasket > 10) {
        totalСost = amountInBasket - (amountInBasket/100*3);
        if (amountInBasket > 30000) {
            totalСost -= discountOne; 
        }
        if (promoСode === 'METHED') {
            totalСost -= totalСost/10;
        }
        if (promoСode === 'G3H2Z1' & totalСost > 2000) {
            totalСost -= coastPromo;
        }
    }

    else if (amountInBasket > 30000) {
            totalСost -= discountOne; 
            if (promoСode === 'METHED') {
                totalСost -= totalСost/10;
            }
            if (promoСode === 'G3H2Z1' & totalСost > 2000) {
                totalСost -= coastPromo;
            }
    }

    else if (promoСode === 'METHED') {
            totalСost -= totalСost/10;
            }
    else if (promoСode === 'G3H2Z1' & totalСost > 2000) {
            totalСost -= coastPromo;;
            }
    else {
        totalСost = amountInBasket;
    }
    console.log(totalСost);
    return totalСost;  
};

calculation()