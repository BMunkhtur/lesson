//Comments can make code readable
//Javascript lesson begin
/*Comments can make code readable"*/
/*
let name= "Munkhtur";
let surguuli=false;
let oyutan=true;
console.log(typeof 42);
console.log(typeof "text");
console.log(typeof true); 
console.log(typeof undeclaredVariable);
console.log(typeof null);

let firstname="Bayarsaikhan"; 
let lastname="Munhtur";
let maritalstatus="single";
let country="Ulaanbaatar";
let age=21;
let firstname1="bayarsaikahn"; name1="Munkhtur"; maritalstatus="Single"; country="Ulaanbaatar"; age=21;
function findPerimeter(a, b, c){
    return (a+b+c)
};
let a=2, b=3, c=5;
let pri=10;
console.log(findPerimeter(a, b, c));
function findArea(r){
    return(pri*r*r);
};
let r, Area;
r = 5;
Area=findArea(r);
console.log("Area of Circle is: " + Area )
let x=5;
let y=2;
let m=y*2-y*1/x*2-x*1;
console.log(y*2-y*1/x*2-x*1);

let gb=15;
function findGigabyte(mb, kb, bytes, bit){
    return (mb*kb*bytes*bit*gb)
};
let mb=1024, kb=1024, bytes=1024, bit=8;
console.log(findGigabyte(mb, kb, bytes, bit));


let celsius0=32;
function findfahre(ce, celsius0){
    return(ce*9/5+celsius0)
};
let ce=4;
console.log(findfahre(ce, celsius0));
  
let fahre0=-17.77778;
function findcelsius(ce, celsius0){
    return((fahre-32)*5/9)
};
let fahre=1;
console.log(findcelsius(ce, celsius0));

let cm1=0.3937007874;
function findinch(cm, inch){
    return(cm1*inch)
};
let inch=4;
console.log(findinch(cm1, inch));

let inch1=2.54;
function findinch(inch1, cm){
    return(inch1*cm)
};
let cm=4;
console.log(findinch(inch1, cm));

let baby1="baby shark, doo-doo, doo-doo baby shark, doo-doo, doo-doo baby shark, doo-doo, doo-doo baby shark"
let baby2="Mommy Shark, doo-doo, doo-doo Mommy Shark, doo-doo, doo-doo Mommy Shark, doo-doo, doo-doo Mommy shark"
let baby3="Daddy Shark, doo-doo, doo-doo Daddy Shark, doo-doo, doo-doo Daddy Shark, doo-doo, doo-doo Daddy Shark"
let baby4="Grandma Shark, doo-doo, doo-doo Grandma Shark, doo-doo, doo-doo Grandma Shark, doo-doo, doo-doo Grandma Shark"
let baby5="Grandpa Shark, doo-doo, doo-doo Grandpa Shark, doo-doo, doo-doo Grandpa Shark, doo-doo, doo-doo Grandpa Shark"
let baby6="Let's go hunt, doo-doo, doo-doo Let's go hunt, doo-doo, doo-doo Let's go hunt, doo-doo, doo-doo Let's go hunt"
let baby7="Run away, doo-doo, doo-doo Run away, doo-doo, doo-doo Run away, doo-doo, doo-doo Run away"
let baby8="Safe at last, doo-doo, doo-doo Safe at last, doo-doo, doo-doo Safe at last, doo-doo, doo-doo Safe at last"
let baby9="It's the end, doo-doo, doo-doo It's the end, doo-doo, doo-doo It's the end, doo-doo, doo-doo It's the end"
console.log(baby1, baby2,baby3, baby4,baby5, baby6,baby7, baby8, baby9 )

let r1=20>10;
let r2=20<10;
let r3=20==10;
let r4=20 !=10;
let x2=10;
let y1="10"
console.log(r1);
console.log(r2);
console.log(r3);
console.log(r4);
console.log (x2===y1)
let weekNumber = 1;
let weekName

if (weekNumber == 1){
    weekName= "Даваа";}
else  if (weekNumber == 2){
    weekName= "Мягмар";}
else  if (weekNumber == 3){
    weekName= "Лхагва";}
else  if (weekNumber ==4 ){
    weekName= "Пүрэв";}
else  if (weekNumber == 5){
    weekName= "Баасан";}
else  if (weekNumber == 6){
    weekName= "Бямба";}
else  if (weekNumber == 7){
    weekName= "Ням";}
else {
    weekName= "Буруу тоо"}  

    console.log(weekName)

let gender = "male";
let age1 = 16;

if(gender === "male" && age1>= 18){
    console.log("Насан хүрсэн эрэгтэй");

} 
else{
    console.log ("Насан хүрээгүй эсвэл хүйс тохирохгүй байна.")
}

// huwisagch
let a1 = 85;
let b1 = 75;
let c1 = 96;
let d1 = 69;
let sum = 0;
if (a1 > 80){
    sum = sum + a1;
} 
if (b1 >80){
    sum = sum+b1;
}
if(c1>80){
    sum = sum+c1;
}
if(d1>80){
    sum = sum+d1;
}
console.log(sum)

let a2 = 3;
let b2 = 7;
let c2 = 2;
let d2 = 4;
let urjwer = 1 ;
if (a2<5){
    urjwer = urjwer*a2;
}
if (b2<5){
    urjwer = urjwer*b2;
}
if (c2<5){
    urjwer = urjwer*c2;
}
if (d2<5){
    urjwer = urjwer*d2;
}

console.log(urjwer)
//assignment-1
let i = 4 > 3; // true
let iii = 4 < 3; // false
let ii = 4 >= 3; // true
let iv = 4 <= 3; // false
let v = 4 == 4; // true
let vi = 4 === 4; // true
let vii = 4 != 4; // false
let iix = 4 !== 4; // false
let ix = 4 != "4"; // false
let x4 = 4 == "4"; // true
let xi = 4 === "4"; // false
//assignment-2
let one = 4 > 3 && 10 < 12; // true
let two = 4 > 3 && 10 > 12; // true
let three = 4 > 3 || 10 < 12; // true
let four = 4 > 3 || 10 > 12;// false
let five = !(4 > 3);  // false
let six = !(4 < 3);// true
let eight = !(4 > 3 && 10 < 12);// false
let nine = !(4 > 3 && 10 > 12);// false
let ten = !(4 === "4"); // true
console.log( i, iii, ii, v ,vi, vii, iix, ix, x4, xi, one, two, three, four, five, six, eight, nine, ten)

//assignment-3
nas=prompt("Насаа оруулна уу")
let enerel = 32;
let munkhtur = 18;
if (Munkhtur=18){
    console.log("bi")
}
if (Enerel=32){
    console.log("ta")
}
let job = "disegn"
let too=1234;
let str1 = "Hello";
let str2 = "Hello";
let str3 = `Hello`;
console.log(str1 + ":" + 100)
console.log("bat bol" +job + "buguud tsalin ni :" + too)
console.log(`bat bol ${job} buguud tsalin ni : ${too}`)
console.log("hello, \nhow are you")
console.log("hello, \nhow are you")
const str5 = "dlkjflksjfklsdfljdsflkjsdflsdkfjks.";
console.log(str5.length);
const str6 = "fdfdfdfdfd"
console.log (str6.charAt(5));
const obj = {
    age:21,
}
let str7 = "turuu mdsmdsd jfjdjfkdfk fjdkfdjk"
console.log(str7.indexOf("jf"));

let rawString = " Hi  "
let strippedString = rawString.trim (); */

// let nas = "";
// nas = prompt("tanii ner") //prompt irsen buh utga str bn garaas utga awah zuil bwal ashiglana
// console.log ("tanii nas ", nas)
// console.log ("tanii nasnii turul" , typeof nas)
// let too = Number(nas)
// console.log ("tanii nas ", too + 10)
// number.isInteger (0) // buhel too eshiig shalgana

let onoo =""
onoo = prompt ("heden onoo awsan be")
let on =""
let = Number(onoo);
let = Number(on)
onoo = prompt ("heden oniih ve");

function generateRandomInteger (on, onoo){
    return Math.floor(Math.random() (onoo - on + 1)) + onoo
}





