let arrayOfnumbers = [443, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11] //1
let max = 0;

for (let i=0; i<arrayOfnumbers.length; i++) //3
{
    if (max < arrayOfnumbers[i]){
        max = arrayOfnumbers[i];
    }
}
console.log (`max utga ni :${max}`)


let i = 0; //2
let sum = 0;
while (i < arrayOfnumbers.length) {
sum+=arrayOfnumbers[i]
i++;
}
console.log (`niilber ni :${sum}`)

let min = 0; //4

for (let i=0; i<arrayOfnumbers.length; i++)
{
    if (min = arrayOfnumbers[i]){
        min < arrayOfnumbers[i];
    }
}
console.log (`hamgiin baga utga ni :${min}`)

let w =  prompt("duriin too oruul"); //5
    w=Number(w)
    let niilber =(arrayOfnumbers[0]+w)

    console.log (`hamgiin ehnii toon deer tanii oruulsan toog nemeed :${niilber}`)

    
y=Number(w) //6
    let lastsum =(arrayOfnumbers[10]+w)

    console.log (`hamgiin suulin toon deer tanii oruulsan toog nemeed :${lastsum}`)