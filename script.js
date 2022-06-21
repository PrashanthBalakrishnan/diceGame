let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

const player1Scoreboard = document.getElementById("player1Scoreboard");
const player1Dice = document.getElementById("player1Dice");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const player2Dice = document.getElementById("player2Dice");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");
const message = document.getElementById("message")


rollBtn.addEventListener("click", function () {
    const randomNum = Math.floor(Math.random() * 6) + 1;

    if (player1Turn) {
        player1Score += randomNum;
        player1Scoreboard.textContent = player1Score

        player1Dice.textContent = randomNum;
        message.textContent = `Player 2 Turn`
        player1Dice.classList.remove("active");
        player2Dice.classList.add("active");


    } else {
        player2Score += randomNum
        player2Scoreboard.textContent = player2Score

        player2Dice.textContent = randomNum;
        message.textContent = `Player 1 Turn`
        player2Dice.classList.remove("active");
        player1Dice.classList.add("active");

    }
    if(player2Score )

    player1Turn = !player1Turn;

})