let years = prompt("Ta duriin jilee oruulna uu");
if (years % 400 === 0) {
  console.log("Mun");
} else if (years % 100 === 0) {
  console.log("Bish");
} else if (years % 4 === 0) {
  console.log("Mun");
} else {
  console.log("Bish");
}
