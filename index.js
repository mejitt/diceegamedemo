// ----------Refresh



function player1 () {

    var randomNumber = Math.floor((Math.random() * 6) + 1);

    if (randomNumber === 1) {
        document.querySelector(".player1 img").setAttribute("src", "./images/dice1.png");
    }
    else if (randomNumber === 2) {
        document.querySelector(".player1 img").setAttribute("src", "./images/dice2.png");
    }
    else if (randomNumber === 3) {
        document.querySelector(".player1 img").setAttribute("src", "./images/dice3.png");
    }
    else if (randomNumber === 4) {
        document.querySelector(".player1 img").setAttribute("src", "./images/dice4.png");
    }
    else if (randomNumber === 5) {
        document.querySelector(".player1 img").setAttribute("src", "./images/dice5.png");
    }
    else {
        document.querySelector(".player1 img").setAttribute("src", "./images/dice6.png");
    }

    return randomNumber;
}

function player2 () {

    var randomNumber = Math.floor((Math.random() * 6) + 1);

    if (randomNumber === 1) {
        document.querySelector(".player2 img").setAttribute("src", "./images/dice1.png");
    }
    else if (randomNumber === 2) {
        document.querySelector(".player2 img").setAttribute("src", "./images/dice2.png");
    }
    else if (randomNumber === 3) {
        document.querySelector(".player2 img").setAttribute("src", "./images/dice3.png");
    }
    else if (randomNumber === 4) {
        document.querySelector(".player2 img").setAttribute("src", "./images/dice4.png");
    }
    else if (randomNumber === 5) {
        document.querySelector(".player2 img").setAttribute("src", "./images/dice5.png");
    }
    else {
        document.querySelector(".player2 img").setAttribute("src", "./images/dice6.png");
    }

    return randomNumber;
}

var rest1 = player1();
var rest2 = player2();

winner(rest1, rest2);

function winner (play1, play2) {

    if (play1 > play2) {
        document.querySelector("h1").innerHTML = "Byrynjy oyunjy gazandy";
    }
    else if (play2 > play1) {
        document.querySelector("h1").innerHTML = "Ikinji oyunjy gazandy";
    }
    else  {
        document.querySelector("h1").innerHTML = "Dene den boldy";
    }

    var num = [play1 , play2];

    return num ;
}





console.log(rest1,rest2);
