let i , j, rows = parseInt(prompt("Duriin too oruulna uu?"));
let  output = ``; 
for( i=1; i<=rows; i++){       
   output = ``;
   for( j=1; j<i+1; j++){        
       output +=`${j}`;
   }
    console.log(output)

}
let i1, j1, rows1 = parseInt(prompt("duriin too")); 
let output1 = "";
for ( i1 = 1; i1 <= rows1; i1++) {
  for ( j1 = 1; j1 <= rows1 - i1 + 1; j1++) {
    output1 += rows - j1 + 1;
  }
  output1 += "\n";
}
console.log(output1);



