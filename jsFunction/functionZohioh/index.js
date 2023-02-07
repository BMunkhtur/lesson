// task1 - 1;

let number1 = parseFloat(prompt(" toogo oruulna uu:"));
let number2 = parseFloat(prompt("draagin toogo oruulna uu:"));

let result = haha(number1, number2);
function haha(num1, num2) {
  if (num1 > num2) return num1;
  else if (num1 < num2) return num2;
  else return "tentsuu";
}

console.log(`ih utga:${result}`);

// task1 - 2;

let arrayOfNumbers = [1, 2, 3];
function x(a) {
  for (i = 0; i < arrayOfNumbers.length; i++) {
    if (a == arrayOfNumbers[i]) return i;
  }
  return -1;
}
let num = x(3);
console.log(num);

// task - 3;

let studentName = "naraa";
function temdegt(a) {
  for (i = 0; i < studentName.length; i++) {
    if (studentName[i][0] === a) return [i];
  }
  return -1;
}
let result1 = temdegt("a");
console.log(result1);

// task - 4;

function randomNumber(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}
let random = randomNumber(10, 30);
console.log("random:" + random);

// task - 5;

function avNum(array) {
  let average = 0;
  for (let i = 0; i < array.length; i++) {
    let currentNum = array[i];
    average += currentNum;
  }
  average = average / array.length;
  return average;
}

let averageNumbers = avNum([2, 5, 6, 8, 10]);
console.log("array dundaj:" + averageNumbers);

// task - 6;

function sumNum(array) {
  let sumNumber = 0;
  for (let i = 0; i < array.length; i++) {
    let currentNum = array[i];
    sumNumber += currentNum;
  }
  return sumNumber;
}

let niilber = sumNum([2, 5, 7, 11]);
console.log("array niilber:" + niilber);

// task - 7;

function firstNum(a) {
  for (i = 2; i < a; i++) {
    if (a === 2) return "anhni too mun";
    else if (a % i === 0) return "anhnii too bish";
  }
  return "anhni too mun";
}

let firstNumbers = firstNum(5);
console.log("anhni too mun eseh:", firstNumbers);

// task - 8;

function str(string) {
  for (i = 0; i < string.length; i++) {
    let letters = string;
    let d = letters.toUpperCase();
    return d;
  }
}
let uppercase = str("lalaland");
console.log("touppercase:", uppercase);

// task - 9;

function word(string) {
  for (i = 0; i < string.length; i++) {
    let letters = string;
    let d = letters.toLowerCase();
    return d;
  }
}
let lowercase = word("LALALAND");
console.log("tolowercase:", lowercase);
