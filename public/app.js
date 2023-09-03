// Initial game state
let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result');
let btns = document.querySelectorAll('.btn');
let conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to handle player moves
const ticTacToe = (element, index) => {
    // Your game logic here

    /*
    **Part 1: Winning Conditions (Add your code here)**

    1. Implement the logic to check for winning conditions using the 'conditions' array.
    2. Display a winning message in the 'result' element when a player wins.
    3. Disable all buttons after a win.
    */

    // Your code to update the game state and check for a win
    // ...

    // Your code to display the current player's turn
    // ...

    // Your code to handle button and cell interactions
    // ...
};

    /*
    **Part 2: Reset Function (Add your code here)**

    1. Implement a new function that resets the game to its initial state.
    2. Ensure the 'cells', 'btns', and 'currentPlayer' variables are reset.
    3. Update the 'result' element to indicate the current player's turn.
    4. Re-enable all buttons for a new game.
    */

// Function to reset the game
const resetGame = () => {
    // Your code to reset the game state
    // ...

    // Your code to update the 'result' element
    // ...

    // Your code to re-enable buttons
    // ...
};

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => ticTacToe(btn, i));
});

document.querySelector('#reset').addEventListener('click', resetGame);

function myfunc(){

    var b1,b2,b3,b4,b5,b6,b7,b8,b9;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;

    var b1btn,b2btn,b3btn,b4btn,b5btn,b6btn,b7btn,b8btn,b9btn;
    b1btn = document.getElementById("b1");
    b2btn = document.getElementById("b2");
    b3btn = document.getElementById("b3");
    b4btn = document.getElementById("b4");
    b5btn = document.getElementById("b5");
    b6btn = document.getElementById("b6");
    b7btn = document.getElementById("b7");
    b8btn = document.getElementById("b8");
    b9btn = document.getElementById("b9");

    if((b1 == 'x' || b1 == 'X') && (b2 == 'x' || b2 == 'X') && (b3 == 'x' || b3 == 'X')){
        document.getElementById('print').innerHTML = "Player X won";
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color = "red";
        b2btn.style.color = "red";
        b3btn.style.color = "red";

    }
    else if((b1 == 'x' || b1 == 'X') && (b4 == 'x' || b4 == 'X') && (b7 == 'x' || b7 == 'X')){
        document.getElementById('print').innerHTML = "Player X won";
        b2btn.disabled = true;
        b3btn.disabled = true;
        b6btn.disabled = true;
        b5btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color = "red";
        b4btn.style.color = "red";
        b7btn.style.color = "red";

    }
    else if((b7 == 'x' || b7 == 'X') && (b8 == 'x' || b8 == 'X') && (b9 == 'x' || b9 == 'X')){
        document.getElementById('print').innerHTML = "Player X won";
        b2btn.disabled = true;
        b3btn.disabled = true;
        b6btn.disabled = true;
        b5btn.disabled = true;
        b1btn.disabled = true;
        b2btn.disabled = true;

        b7btn.style.color = "red";
        b8btn.style.color = "red";
        b9btn.style.color = "red";

    }
    else if((b3 == 'x' || b3 == 'X') && (b6 == 'x' || b6 == 'X') && (b9 == 'x' || b9 == 'X')){
        document.getElementById('print').innerHTML = "Player X won";
        b2btn.disabled = true;
        b1btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b8btn.disabled = true;
        b7btn.disabled = true;

        b3btn.style.color = "red";
        b6btn.style.color = "red";
        b9btn.style.color = "red";

    }
    else if((b1 == 'x' || b1 == 'X') && (b5 == 'x' || b5 == 'X') && (b9 == 'x' || b9 == 'X')){
        document.getElementById('print').innerHTML = "Player X won";
        b2btn.disabled = true;
        b3btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b4btn.disabled = true;

        b1btn.style.color = "red";
        b5btn.style.color = "red";
        b9btn.style.color = "red";

    }
    else if((b3 == 'x' || b3 == 'X') && (b5 == 'x' || b5 == 'X') && (b7 == 'x' || b7 == 'X')){
        document.getElementById('print').innerHTML = "Player X won";
        b2btn.disabled = true;
        b1btn.disabled = true;
        b6btn.disabled = true;
        b4btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b3btn.style.color = "red";
        b5btn.style.color = "red";
        b7btn.style.color = "red";

    }
    else if((b2 == 'x' || b2 == 'X') && (b5 == 'x' || b5 == 'X') && (b8 == 'x' || b8 == 'X')){
        document.getElementById('print').innerHTML = "Player X won";
        b1btn.disabled = true;
        b3btn.disabled = true;
        b6btn.disabled = true;
        b4btn.disabled = true;
        b7btn.disabled = true;
        b9btn.disabled = true;

        b2btn.style.color = "red";
        b5btn.style.color = "red";
        b8btn.style.color = "red";

    }
    else if((b4 == 'x' || b4 == 'X') && (b5 == 'x' || b5 == 'X') && (b6 == 'x' || b6 == 'X')){
        document.getElementById('print').innerHTML = "Player X won";
        b2btn.disabled = true;
        b3btn.disabled = true;
        b1btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b5btn.style.color = "red";
        b4btn.style.color = "red";
        b6btn.style.color = "red";

    }
    else if((b1 == 'x' || b1 == 'X') && (b4 == 'x' || b4 == 'X') && (b7 == 'x' || b7 == 'X')){
        document.getElementById('print').innerHTML = "Player X won";
        b2btn.disabled = true;
        b3btn.disabled = true;
        b6btn.disabled = true;
        b5btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color = "red";
        b4btn.style.color = "red";
        b7btn.style.color = "red";

    }
    else if((b1 == 'o' || b1 == 'O') && (b2 == 'o' || b2 == 'O') && (b3 == 'o' || b3 == 'O')){
        document.getElementById('print').innerHTML = "Player O won";
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color = "red";
        b2btn.style.color = "red";
        b3btn.style.color = "red";

    }
    else if((b1 == 'o' || b1 == 'O') && (b4 == 'o' || b4 == 'O') && (b7 == 'o' || b7 == 'O')){
        document.getElementById('print').innerHTML = "Player O won";
        b2btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color = "red";
        b2btn.style.color = "red";
        b3btn.style.color = "red";

    }

}
}
}
}


}
}
}

