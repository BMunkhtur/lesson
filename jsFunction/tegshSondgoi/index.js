// task - 1
a = Number(prompt(""));
b = Number(prompt(""));
function even(a, b) {
  max = Math.max(a, b);
  min = Math.min(a, b);
  while (min <= max) {
    if (min % 2 == 0) {
      console.log(min);
    }
    min++;
  }
}
console.log(even(a, b));

// task - 2
a = Number(prompt(""));
b = Number(prompt(""));
function odd(a, b) {
  max = Math.max(a, b);
  min = Math.min(a, b);
  while (min <= max) {
    if (min % 2 !== 0) {
      console.log(min);
    }
    min++;
  }
}
console.log(odd(a, b));
