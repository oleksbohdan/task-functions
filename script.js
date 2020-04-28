function cube(number) {
    return Math.pow(number, 3);
}

let num;
do{
    num = +prompt('Введіть число, яке бажаєте піднести до кубу.');
}while (isNaN(num));
alert(`Куб числа ${num}: ` + cube(num));
//-------------------------------------------------------------------------------
function operation(addedFirst, addedSecond, divider) {
    return (addedFirst + addedSecond) / divider;
}

num = [];
for(let i = 0; i < 2; i++){
    num[i] = +prompt(`Введіть доданок №${i + 1}.`);
    if(isNaN(num[i])) i--;
}
do{
    num[2] = +prompt('Введіть дільник');
}while(isNaN(num[2]) || num[2] === 0);
alert(`(${num[0]} + ${num[1]}) / ${num[2]} = ` + operation(num[0], num[1],num[2]));
//-------------------------------------------------------------------------------
function dayOfTheWeek(dayNumber) {
    switch (dayNumber) {
        case 1:
            return "Понеділок";
        case 2:
            return "Вівторок";
        case 3:
            return "Середа";
        case 4:
            return "Четвер";
        case 5:
            return "П'ятниця";
        case 6:
            return "Субота";
        case 7:
            return "Неділя";
        default:
            return "Нема такого дня в тижні"
    }
}
let flag =false;
do{
    do{
        num = +prompt('Введіть номер дня тижня.')
    }while (isNaN(num) || !Number.isInteger(num) || num < 0);
    alert(`День тижня під номером ${num}: ${dayOfTheWeek(num)}.`);
    flag = confirm('Повторити?');
}while (flag);
//-------------------------------------------------------------------------------

function factorial(number) {
    if(typeof number === 'number' && !isNaN(number) && Number.isInteger(number) && number >= 0) {
        if (number === 0) return 1;
        if (number === 1) return number;
        return number * factorial(number - 1);
    }
}
do {
    num = +prompt('Введіть число, факторіал якого бажаєте знайти.');
}while (isNaN(num) || !Number.isInteger(num) || num < 0);
alert(`Факторіал числа ${num}: ${factorial(num)}`);
//-------------------------------------------------------------------------------
function toSeconds(seconds, minutes, hours) {
    let total = 0;
    if(validCheck(seconds)){
        total += seconds;
    }
    if(validCheck(minutes)){
        total += (minutes * 60);
    }
    if(validCheck(hours)){
        total += (hours * 60 * 60);
    }
    return total;

    function validCheck(timeUnit){
        return timeUnit && typeof timeUnit === 'number' && !Number.isNaN(timeUnit) &&
            Number.isInteger(timeUnit) && timeUnit >= 0;
    }
}

num = [];
num[0] = +prompt('Введіть кількість годин');
num[1] = +prompt('Введіть кількість хвилин');
num[2] = +prompt('Введіть кількість секунд');
alert(`Кількість секунд у ${num[0]} г. ${num[1]} хв. ${num[2]} с. : ${toSeconds(num[2], num[1], num[0])} c.`);

//-------------------------------------------------------------------------------

function splitSeconds(seconds) {
    let total = {};
    if(typeof seconds === 'number' && !Number.isNaN(seconds) && Number.isInteger(seconds) && seconds >= 0){
        if (seconds >= 3600){
            total.hours = Math.floor(seconds / 3600);
            seconds = seconds % 3600;
        }
        if (seconds >= 60){
            total.minutes = Math.floor(seconds / 60);
            seconds = seconds % 60;
        }
        total.seconds = seconds;
    }
    if(total.hours >= 24) return "Один день або більше";
    return total;
}
do{
    num = +prompt('Введіть кількість секунд.');
}while(isNaN(num) || !Number.isInteger(num) || num < 0);
let result = splitSeconds(num);
if(typeof result === 'object'){
    let temporary ='';
    if(result.hours){
        if((result.hours + '').length === 1) temporary += '0';
        temporary += result.hours;
    }
    else if(!result.hours){
        temporary += '00';
    }
    temporary += ':';
    if(result.minutes){
        if((result.minutes + '').length === 1) temporary += '0';
        temporary += result.minutes;
    }
    else if(!result.minutes){
        temporary += '00';
    }
    temporary += ':';
    if(result.seconds){
        if((result.seconds + '').length === 1) temporary += '0';
        temporary +=result.seconds
    }
    else if(!result.seconds){
        temporary += '00';
    }
    result = temporary;
}
alert(result);

// Syntax :)

// Unlike regular functions, arrow functions do not have their own this

// Regular functions created using function declarations or expressions are ‘constructible’ and ‘callable’.
// Since regular functions are constructible, they can be called using the ‘new’ keyword.
// However, the arrow functions are only ‘callable’ and not constructible.

//Arguments objects are not available in arrow functions, but are available in regular functions.