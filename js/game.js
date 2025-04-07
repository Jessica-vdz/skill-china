let score = 0;

const bat = {
    "begin" : "../img/bat1.png",
    "second" : "../img/bat2.png"
}

function cookieClicker(){
    score++;
    document.getElementById("pic").src=bat.second;
    document.getElementById('scoretext').innerHTML = score;
}