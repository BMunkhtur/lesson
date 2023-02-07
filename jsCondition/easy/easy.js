let n = prompt("dun oruul");
if (n >= 90 && 100 >= n) {
  console.log("A", n);
} else if (n >= 80 && 89 >= n) console.log("B", n);
else if (n >= 70 && 79 >= n) console.log("C", n);
else if (n >= 60 && 69 >= n) console.log("D", n);
else if (n >= 0 && 59 >= n) console.log("F", n);

let Sar = prompt("sar oruul");
if (0 < n && 1 == n) {
  console.log("31 honogtoi");
} else if (1 < n && n == 2) {
  console.log("28 or 29 honogtoi");
} else if (2 < n && n == 3) {
  console.log("30 honogtoi");
} else if (3 < n && n == 4) {
  console.log("31 honogtoi");
} else if (4 < n && n == 5) {
  console.log("30 honogtoi");
} else if (5 < n && n == 6) {
  console.log("31 honogtoi");
} else if (6 < n && n == 7) {
  console.log("30 honogtoi");
} else if (7 < n && n == 8) {
  console.log("31 honogtoi");
} else if (8 < n && n == 9) {
  console.log("30 honogtoi");
} else if (9 < n && n == 10) {
  console.log("31 honogtoi");
} else if (10 < n && n == 11) {
  console.log("30 honogtoi");
} else if (11 < n && n == 12) {
  console.log("31 honogtoi");
}

let eyreg = prompt("eyreg too");
if ((0 <= eyreg && eyreg % 3 === 0) || eyreg % 7 === 0) {
  console.log("3 bolon 7 iin urjwer mun");
}
let utga = prompt("duriin too");
if (0 < utga) {
  console.log("eyreg too");
} else if (0 > utga) {
  console.log("surug");
}

let weight = prompt("jingee oruul");
let height = prompt("unduruu oruul");

let h = Math.round((weight / height ** 2) * 10000);

if (h > 30) {
  console.log(`Tanii jin ${h} buyu het targan bn`);
} else if (h > 25) {
  console.log(`Tanii jin ${h} buyu iluudel jintei bn`);
} else if (h > 18.5) {
  console.log(`Tanii jin ${h} buyu eruul jintei bn`);
} else if (h < 18.5) {
  console.log(`Tanii jin ${h} buyu jingiin dutagtaltai bn`);
} else {
  console.log("Wrong answer");
}

let year = prompt("ta tursun onoo oruul");
let x = 2023 - year;
console.log(x);
if (0 <= x && x <= 1) {
  console.log("infant:", x);
} else if (1 < x && x <= 3) {
  console.log("Toddler:", x);
} else if (3 < x && x <= 5) {
  console.log("Preschool:", x);
} else if (5 < x && x <= 12) {
  console.log("Gradeschooler:", x);
} else if (12 < x && x <= 18) {
  console.log("Teen", x);
} else if (18 < x && x <= 21) {
  console.log("Young adult", x);
} else if (21 < x) {
  console.log("Adult:", x);
}
