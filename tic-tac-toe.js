const cells = document.querySelectorAll(".cell"); 
const player1NameDisplay = document.getElementById("player1_info_name"); 
const player2NameDisplay = document.getElementById("player2_info_name"); 
const player1ScoreDisplay = document.getElementById("player1_info_score"); 
const player2ScoreDisplay = document.getElementById("player2_info_score"); 
const player1Name = prompt("Welcome to Tic Tac Toe!\nPlayer 1, Enter your name:"); 
const player2Name = prompt("Player 2, Enter your name: "); 
let flag = true; 

const player1 = createUser(player1Name, "X"); 
const player2 = createUser(player2Name, "O"); 

player1ScoreDisplay.textContent = `Score: ${player1.getScore()}`; 
player2ScoreDisplay.textContent = `Score: ${player2.getScore()}`; 


if (player1.name == null) {
    player1NameDisplay.textContent = `Player 1`;
} 

if (player2.name == null) {
    player2NameDisplay.textContent = `Player 2`; 
}

if (player1.name != null) {
    player1NameDisplay.textContent = `${player1.name}`;  
}

if (player2.name != null) {
    player2NameDisplay.textContent =`${player2.name}`; 
}
   

// gameBoard object that stores game board array
const gameBoard = (function() {
    const board = [["", "", ""], ["", "", ""], ["", "", ""]];
    let score = 0; 
    return {board, score}; 
})(); 

cells.forEach((cell) => {
    cell.addEventListener("click", () => {
        if (cell.textContent == '') {
            if (flag == true) {
                cell.textContent = player1.marker; 
                flag = false; 
                console.log(flag); 
                addMarker(gameBoard.board, cell.dataset.row, cell.dataset.col, cell.textContent); 
                gameBoard.score++; 
                console.log(gameBoard.score); 
            } else {
                cell.textContent = player2.marker; 
                flag = true; 
                console.log(flag); 
                addMarker(gameBoard.board, cell.dataset.row, cell.dataset.col, cell.textContent); 
                gameBoard.score++; 
                console.log(gameBoard.score);
            }
        }

        if (gameBoard.score >= 5) {
            let checkWin = isWin(gameBoard.board); 
            console.log(checkWin); 
            if (checkWin == undefined) {
                console.log("Keep Playing!"); 
            } else if (checkWin == 1) {
                setTimeout(() => {
                    alert(`${player1.name} wins!`); 
                    player1.addScore(); 
                    player1ScoreDisplay.textContent = `Score: ${player1.getScore()}`
                    clearBoard(gameBoard.board); 
                    console.log(gameBoard.board); 
                    clearBoardDisplay(cells);  
                    gameBoard.score = 0; 
                    flag = true; 
                }, 0);   
            } else if (checkWin == 2) {
                setTimeout(() => {
                    alert(`${player2.name} wins!`); 
                    player2.addScore(); 
                    player2ScoreDisplay.textContent = `Score: ${player2.getScore()}`
                    clearBoard(gameBoard.board); 
                    console.log(gameBoard.board); 
                    clearBoardDisplay(cells);  
                    gameBoard.score = 0; 
                    flag = true; 
                }, 0);
            }

            if (checkWin == undefined && gameBoard.score == 9) {
                setTimeout(() => {
                    alert("It's a tie!"); 
                    clearBoard(gameBoard.board); 
                    console.log(gameBoard.board); 
                    clearBoardDisplay(cells);  
                    gameBoard.score = 0; 
                    flag = true; 
                 }, 0);
            }
        }

    })
}); 


// Function to generate player object
function createUser (name, marker) {
    //Give user a score, increment if win 
    let score = 0;
    const getScore = () => score;   
    const addScore = () => score++; 

    return {name, marker, getScore, addScore}; 
}   


// Function to add marker to gameboard 
function addMarker(array, row, col, marker) {
    array[row][col] = marker; 
    console.log(array); 
}

// Function to check winning/tie condition
function isWin(array) {
    //Check for alignment in first row      
    if (array[0][0].length > 0) {
        if (array[0][0] == 'X') {
            if (array[0][0] == array[0][1] && array[0][0] == array[0][2]) { 
                return 1; 
            } else if (array[0][0] == array[1][1] && array[0][0] == array[2][2]) {
                return 1;
            } else if (array[0][0] == array[1][0] && array[0][0] == array[2][0]) {
                return 1; 
            }
        }

        if (array[0][0] == 'O') {
            if (array[0][0] == array[0][1] && array[0][0] == array[0][2]) { 
                return 2; 
            } else if (array[0][0] == array[1][1] && array[0][0] == array[2][2]) {
                return 2;
            } else if (array[0][0] == array[1][0] && array[0][0] == array[2][0]) {
                return 2; 
            }
        }
    }


    if (array[0][1].length > 0) {
        if (array[0][1] == 'X') {
            if(array[0][1] == array[1][1] && array[0][1] == array[2][1]) {
                return 1; 
            }
        }
        
        if (array[0][1] == 'O') {
            if(array[0][1] == array[1][1] && array[0][1] == array[2][1]) {
                return 2; 
            }
        }
    }

    if (array[0][2].length > 0) {
        if (array[0][2] == 'X') {
            if(array[0][2] == array[1][1] && array[0][2] == array[2][0]) {
                return 1; 
            } else if (array[0][2] == array[1][2] && array[0][2] == array[2][2]) {
                return 1; 
            }
        }

        if (array[0][2] == 'O') {
            if (array[0][2] == array[1][1] && array[0][2] == array[2][0]) {
                return 2; 
            } else if (array[0][2] == array[1][2] && array[0][2] == array[2][2]) {
                return 2; 
            }
        }
    }

    //Check for alignment in second row
    if (array[1][0].length > 0) {
        if (array[1][0] == 'X') {
            if(array[1][0] == array[1][1] && array[1][0] == array[1][2]) {
                return 1; 
            } 
        }

        if (array[1][0] == 'O') {
            if(array[1][0] == array[1][1] && array[1][0] == array[1][2]) {
                return 2; 
            } 
        }
    }

    //Check for alignment in third row
    if (array[2][0].length > 0) {
        if (array[2][0] == 'X') {
            if(array[2][0] == array[2][1] && array[2][0] == array[2][2]) {
                return 1; 
            }
        }

        if (array[2][0] == 'O') {
            if(array[2][0] == array[2][1] && array[2][0] == array[2][2]) {
                return 2; 
            }
        }
    } 
}


// Function to clear game and start again 
function clearBoard(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            array[i][j] = ""; 
        }
    } 
    return array; 
}

function clearBoardDisplay(board) {
    for (let i = 0; i < board.length; i++) {
        board[i].textContent = ''; 
    } 
}

//Steps of playing tic tac toe 
//1. Assuming player 1 is always X, player 1 goes first and pick square to mark 
//2. Player 2 decides is O, player 2 picks where to mark 
//3. repeat 1 and 2 until there is a match horizontally/diagonally/veritcally or all squares are filled but no match, then it's a tie. 
//4. Add points to winner 

