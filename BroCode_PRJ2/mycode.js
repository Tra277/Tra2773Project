let player = document.getElementById("player");
let compute = document.getElementById("computer");
let result = document.getElementById("result");
let userChoice = document.querySelectorAll('button');
let playerAns;
let computerAns;

userChoice.forEach(button => {
    button.addEventListener('click', yourTurn);
    function yourTurn() {
        playerAns = button.textContent;
        computerTurn();
        player.innerText = `Player:${playerAns}`;
        compute.innerText = `Computer:${computerAns}`;
        result.innerText = "Result:"+ showWinner();
    }
    function computerTurn() {
        let ans = Math.ceil(Math.random() * 3);
        switch (ans) {
            case 1:
                computerAns = "ROCK";
                break;
            case 2:
                computerAns = "PAPER";
                break;
            case 3:
                computerAns = "SCISSOR";
                break;
        }
    }
    function showWinner(){
        if(playerAns == computerAns){
            return "Draw"
        }else if(playerAns == "ROCK"){
            return computerAns == "PAPER" ? "Lose" : "Win";
        }else if(playerAns == "PAPER"){
            return computerAns == "SCISSOR" ? "Lose" : "Win";
        }else if(playerAns == "SCISSOR"){
            return computerAns == "ROCK" ? "Lose" : "Win";
        }
    }

});