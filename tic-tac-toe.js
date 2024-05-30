const cells = document.querySelectorAll(".cell"); 
const player1NameDisplay = document.getElementById("player1_info_name"); 
const player2NameDisplay = document.getElementById("player2_info_name"); 
const player1Name = prompt("Welcome to Tic Tac Toe!\nPlayer 1, Enter your name:"); 
const player2Name = prompt("Player 2, Enter your name: "); 
let flag = true; 

const player1 = createUser(player1Name, "X"); 
const player2 = createUser(player2Name, "O"); 

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
    return {board}; 
})(); 

// cells.forEach((cell) => {
//     cells.addEventListener("click", () => {
//         //First turn is player 1's 
//         //If marker is "X", next marker is "O" and vice versa 
//         //For every click, log it into the gameBoard array 
//         //If the number of markers is equal to or more than 5, check for win condition 
//         //If a player win, display a message board and award point 
//         if (flag == true) {
//             cell.textContent = player1.marker; 
//             flag = false; 
//             console.log(flag); 
//         } else {
//             cell.textContent = player2.marker; 
//             flag = true; 
//             console.log(flag); 
//         }
//     })
// })

function handleCellClick(e) {
    if (flag == true) {
        e.target.textContent = player1.marker; 
        flag = false; 
        console.log(flag); 
    } else {
        e.target.textContent = player2.marker; 
        flag = true; 
        console.log(flag); 
    }
        e.target.removeEventListener("click", handleCellClick);
}

cells.forEach((cell) => {
    cell.addEventListener("click", handleCellClick);
});


// Function to generate player object
function createUser (name, marker) {
    // Get user's marker and name 
    const getMarker = () => marker; 
    const getName = () => name;

    //Give user a score, increment if win 
    let score = 0; 
    const getScore = () => score; 
    const addScore = () => score++; 

    return {name, marker, getName, getMarker, getScore, addScore}; 
}   


// Function to add marker to gameboard 
function addMarker(array, row, col, marker) {
    array[row][col] = marker; 
}

// Function to check winning/tie condition
function isWin(array) {
    //Check for alignment in first row      
    if (array[0][0].length > 0) {
        if(array[0][0] == array[0][1] && array[0][0] == array[0][2]) {
            return "You Win!"; 
        } else if (array[0][0] == array[1][1] && array[0][0] == array[2][2]) {
            return "You Win!";
        } else if (array[0][0] == array[1][0] && array[0][0] == array[2][0]) {
            return "You Win!"; 
        }
    }

    if(array[0][1].length > 0) {
        if(array[0][1] == array[1][1] && array[0][1] == array[2][1]) {
            return "You Win!"; 
        }
    }

    if(array[0][2].length > 0) {
        if(array[0][2] == array[1][1] && array[0][2] == array[2][0]) {
            return "You Win!"; 
        }
    }

    //Check for alignment in second row
    if(array[1][0].length > 0) {
        if(array[1][0] == array[1][1] && array[1][0] == array[1][2]) {
            return "You Win!"; 
        } 
    }

    //Check for alignment in third row
    if(array[2][0].length > 0) {
        if(array[2][0] == array[2][1] && array[2][0] == array[2][2]) {
            return "You Win!"; 
        }
    }
}


// Function to clear game and start again 
function clearBoard(array) {
    let emptyArray = [["", "", ""], ["", "", ""], ["", "", ""]]; 
    return emptyArray; 
}

//Steps of playing tic tac toe 
//1. Assuming player 1 is always X, player 1 goes first and pick square to mark 
//2. Player 2 decides is O, player 2 picks where to mark 
//3. repeat 1 and 2 until there is a match horizontally/diagonally/veritcally or all squares are filled but no match, then it's a tie. 
//4. Add points to winner 

