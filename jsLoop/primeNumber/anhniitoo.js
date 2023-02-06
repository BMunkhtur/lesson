let a = parseInt(prompt("za  hussen toogoo bich"));

let isPrime = true;

if(a === 2){
    console.log(`$ {a} chni anhnii too bnshd uruuu bodoj chadkunuu.`);
}
else{
    let i = 2;
    while (i < a){
        if(a % i === 0){
           isPrime =false;
           break
        }
        i++;
    }
    if (isPrime){
        console.log ("mun")
    } else{
        console.log ("bish")
    }
}