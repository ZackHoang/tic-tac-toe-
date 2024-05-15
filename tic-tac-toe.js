// gameBoard object that stores game board array
const gameBoard = (function() {
    const board = [["", "", ""], ["", "", ""], ["", "", ""]];
    return {board}; 
})(); 


// Function to generate player object
function createUser (name, marker) {
    // Get user's marker and name 
    const getMarker = () => marker; 
    const getName = () => name;

    //Give user a score, increment if win 
    let score = 0; 
    const getScore = () => score; 
    const addScore = () => score++; 

    return {getName, getMarker, getScore, addScore}; 
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
