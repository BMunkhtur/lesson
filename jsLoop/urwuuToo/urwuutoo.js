let a = prompt("Duriin too oruulna uu");
let b,
  sum = 0;
while (a > 0) {
  b = a % 10;
  sum = sum * 10 + b;
  a = parseInt(a / 10);
}
console.log(sum);
