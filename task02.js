'use strict';

const stringModification = () => {
    const applicationEntared = prompt('Введите предложение', '');
    const fullWord = applicationEntared[0].toUpperCase() + applicationEntared.slice(1).toLowerCase();
    return fullWord
}
console.log(stringModification());