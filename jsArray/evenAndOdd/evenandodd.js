
let data = [5, 6, 4, 12, 19, 121, 1, 7 ,9 ,63]
    odd = data.reduce(function (r, a) { return r + a % 2; }, 0),
    even = data.length - odd;
console.log('odd', odd);
console.log('even', even);
