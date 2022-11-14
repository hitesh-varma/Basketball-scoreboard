let homeScore = document.getElementById("home-score")
let awayScore = document.getElementById("away-score")
let homePoints = 0
let awayPoints = 0

function homeOne(){
    homePoints += 1
    homeScore.textContent = homePoints
}
function homeTwo(){
    homePoints += 2
    homeScore.textContent = homePoints
}
function homeThree(){
    homePoints += 3
    homeScore.textContent = homePoints
}


function awayOne(){
    awayPoints += 1
    awayScore.textContent = awayPoints
}
function awayTwo(){
    awayPoints += 2
    awayScore.textContent = awayPoints
}
function awayThree(){
    awayPoints += 3
    awayScore.textContent = awayPoints
}

function newGame(){
    homePoints = 0
    awayPoints = 0
    awayScore.textContent = 0
    homeScore.textContent = 0
}