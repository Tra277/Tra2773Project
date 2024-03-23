const arrayToCheckWinner = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
let playerTurn = "X";
let isEnd = false;
//I use ... operator so i can use array.mao();
const blocks = [...document.querySelectorAll(".block")];
blocks.forEach(block => {
    block.addEventListener("click", () => {
        if (checkWinner() == false && block.textContent == "" && isEnd == false) {
            block.textContent = playerTurn;
            if (checkWinner() == false) {
                (playerTurn == "X") ? playerTurn = "O" : playerTurn = "X";
                document.getElementById("playerStatus").innerHTML = `${playerTurn}'s Turn`;
            } else {
                isEnd = true;
                document.getElementById("playerStatus").innerHTML = `${playerTurn} WIN!!!`;
            }
        };
    });
});


// Reset the game went player click RESET button
document.getElementById("reset-btn").onclick = function () {
    playerTurn = "X";
    isEnd = false;
    document.getElementById("playerStatus").innerHTML = `X's Turn`
    blocks.forEach(block => {
        block.textContent = "";
    });
}
//check after each turn player has won or not.
function checkWinner() {
    let arrayOfPlayerIndex = blocks.map(((block, index) => {
        if (block.textContent == playerTurn) return index;
    }));
    let result = arrayToCheckWinner.some(element => {
        return element.every(item => arrayOfPlayerIndex.includes(item));
    })
    return result;
}