const name = prompt('Введите ваше имя', 'name');
const ageTrue = confirm('Вам больше 18 лет?');
const date = new Date();
const year = date.getFullYear();
const hours = date.getHours();
if(ageTrue && hours <= 10) {
   alert(`Доброе утро, ${name}`);
} else if(ageTrue && hours > 10 && hours <= 16) {
    alert(`Добрый день, ${name}`);
} else if(ageTrue && hours > 16) {
    alert(`Добрый вечер, ${name}`);
} else {
    alert('Возраст слишком мал');
}

const x = +prompt('Введите x', 0);
const y = +prompt('Введите y', 0);
const op = prompt('Введите оператор("+", "-", "*", "/")', "+");
const result = (op === "+") ? x + y : (op === "-") ? x - y : (op === "*") ? x * y : (op === "/") ? x / y : "Ничего непонятно";
console.log(result);

function getAge(yearBirth) {
    return year - yearBirth;
}
const userAge = getAge(1997);
console.log(`Вам ${userAge}`);

const season = function(monthBirth){
    monthBirth = prompt('Введите месяц, в котором родились');
    switch (monthBirth.toLowerCase()) {
        case 'декабрь':
        case 'январь':
        case 'февраль':
            alert('Вы родились зимой');
            break;
        case 'март':
        case 'апрель':
        case 'май':
            alert('Вы родились весной');
            break;
        case 'июнь':
        case 'июль':
        case 'август':
            alert('Вы родились летом');
            break;
        case 'сентябрь':
        case 'октябрь':
        case 'ноябрь':
            alert('Вы родились осенью');
            break;
        default:
            alert('Вы точно ввели месяц?');
    }
};
season();
