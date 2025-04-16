let coins = 0;

const bat = {
    "begin" : "../img/bat1.png",
    "second" : "../img/bat2.png"
}
const upgrades = {
    "mask" : 15,
    "vac": 5,
    "qua": 1000,
    "5g": 200
}
function cookieClicker(){
    coins++;
    document.getElementById('scoretext').innerHTML = coins + " coins";
}

function MaskUpgrade(){
    let costs = upgrades.mask;

    if(coins < costs){
        alert("You don't have enough money yet...");
    } else{
        coins = coins - costs;
        document.getElementById('scoretext').innerHTML = coins + " coins"
    }
}
function VacUpgrade(){

}
function QuaUpgrade(){

}
function gUpgrade(){

}