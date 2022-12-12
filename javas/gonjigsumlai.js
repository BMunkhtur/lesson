let uniindun = Number(prompt("uniin dun"))
let hungulult;

if(5000<=uniindun && uniindun<=30000){
    hungulult = Number(uniindun/100)*15+uniindun
}
else if (5000>=uniindun ){
    hungulult = (uniindun/100)*20+uniindun
}
else if (uniindun>=30000){
    hungulult = (uniindun/100)*20+uniindun
}
console.log(hungulult)



