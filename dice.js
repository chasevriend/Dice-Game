let dice = [
    "dice1.png",
    "dice2.png",
    "dice3.png",
    "dice4.png",
    "dice5.png",
    "dice6.png"
]

let dice1El = document.getElementById("dice1");
let dice2El = document.getElementById("dice2");
let winner = document.getElementById("winner");

function rollDice() {
    dice1El.src = dice[Math.floor(Math.random()*dice.length)];
    dice2El.src = dice[Math.floor(Math.random()*dice.length)];
    if(dice1El.src > dice2El.src) {
        winner.textContent = "Player 1 Wins";
    } else if(dice1El.src === dice2El.src) {
        winner.textContent = "Draw";
    } else {
        winner.textContent = "Player 2 Wins"
    }
}

