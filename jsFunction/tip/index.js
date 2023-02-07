a = Number(prompt("hoolni tulbur"));
function count(a) {
  if (5000 >= a && a >= 30000) {
    niitTulbur += a * 0.15;
    console.log(niitTulbur);
  } else {
    niitTulbur += a * 0.2;
    console.log(niitTulbur);
  }
}
console.log("niit tulbur: ", count(a));
