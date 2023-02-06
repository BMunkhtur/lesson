let ateam1 = 96;
let ateam2 = 108;
let ateam3 = 89;
let aTeamsum = ateam1+ateam2+ateam3;
let aTeamavg = aTeamsum/3;
let bteam1 = 88;
let bteam2 = 91; 
let bteam3 = 110;
let bTeamsum = bteam1+bteam2+bteam3;
let bTeamavg = bTeamsum/3;
let ylagch;

if (aTeamavg>bTeamavg && aTeamavg >=100){
    ylagch= "ateam ylagch";
}
else if (aTeamavg<bTeamavg && bTeamavg>=100){
    ylagch = "bteam ylagch"
}

else if (aTeamavg<bTeamavg && bTeamavg<=100){
    ylagch = "ylagch bhgu"
}
else if (aTeamavg>bTeamavg && bTeamavg<=100){
    ylagch = "ylagch bhgu"
}
else if (aTeamavg=bTeamavg){
    ylagch = "tentssen"
}
console.log(ylagch)