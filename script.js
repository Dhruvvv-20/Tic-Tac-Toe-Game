// JavaScript code here
console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let audioturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let winSound = new Audio("win.mp3"); // Add the win sound
let turn = "X";
let isgameover = false;

// Function to change the turn
const changeTurn = () => {
    turn = (turn === "X") ? "O" : "X";
    return turn;
};

// Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && boxtext[e[0]].innerText !== "") {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.display = "block";
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            winSound.play(); // Play the win sound
            // Remove event listeners to prevent further clicks
            Array.from(boxes).forEach(element => {
                element.removeEventListener('click', boxClick);
            });
        }
    });
};

// Function to handle box click
const boxClick = (e) => {
    let boxtext = e.currentTarget.querySelector('.boxtext');
    if (!isgameover && boxtext.innerText === '') {
        boxtext.innerText = turn;
        changeTurn();
        audioturn.play();
        checkWin();
        if (!isgameover) {
            document.querySelector(".info").innerText = "Turn for " + turn;
        }
    }
};

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    element.addEventListener('click', boxClick);
});

// Reset button functionality
const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => {
    location.reload(); // Reload the webpage to reset the game
});