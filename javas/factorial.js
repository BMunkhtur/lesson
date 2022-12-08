let number = prompt("factorial gargah too oruul");
let numberFactorial = number;
    while(number > 1){
        numberFactorial = numberFactorial * (number-1);
        number--;
    }
console.log(numberFactorial);