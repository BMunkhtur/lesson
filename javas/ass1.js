let i = 4 > 3; //true
let iii = 4 < 3; //false
let ii = 4 >= 3; // true
let iv = 4 <= 3; // false
let v = 4 == 4; // true
let vi = 4 === 4; // false
let vii = 4 != 4; //false
let iix = 4 !== 4; // false
let ix = 4 != "4"; //false
let x = 4 == "4"; //true
let xi = 4 === "4"; //false
console.log(i, iii, ii, iv, vi, vii, iix, ix, x ,xi) //1

let one = 4 > 3 && 10 < 12; // true
let two = 4 > 3 && 10 > 12; //false
let three = 4 > 3 || 10 < 12; //true
let four = 4 > 3 || 10 > 12; //true
let five = !(4 > 3); //false
let six = !(4 < 3); //true
let eight = !(4 > 3 && 10 < 12); //false
let nine = !(4 > 3 && 10 > 12); //true
let ten = !(4 === "4");// true
console.log( one, two, three, four, five, six, eight, nine, ten)

let myAge = 25
let yourAge = prompt("ta nasaa oruulna uu")
if (myAge>yourAge) {
    console.log("bi chamaas ah")
}
else {
console.log("ta nadaas ah")
}

let weekNumber = prompt("duriin udruu oruulnuu")
let weekName
if (weekNumber == 1){
    weekName= "Даваа-ажлын өдөр";}
else  if (weekNumber == 2){
    weekName= "Мягмар-ажлын өдөр";}
else  if (weekNumber == 3){
    weekName= "Лхагва-ажлын өдөр";}
else  if (weekNumber ==4 ){
    weekName= "Пүрэв-ажлын өдөр";}
else  if (weekNumber == 5){
    weekName= "Баасан-ажлын өдөр";}
else  if (weekNumber == 6){
    weekName= "Бямба-амралтын өдөр";}       
else  if (weekNumber == 7){
    weekName= "Ням-амралтын өдөр";}
else {
    weekName= "Буруу тоо"}  
    console.log(weekName)

    let ratePerHour = 28
    let hours = 40
    let workjob = prompt("ajilsan tsagaa oruulna")
    let niittsalin = (ratePerHour*workjob)
    console.log (niittsalin)
