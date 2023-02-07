const min = parseInt(prompt("baga utga: "));
const max = parseInt(prompt("ih utga: "));
const a = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`  ${a}`);
