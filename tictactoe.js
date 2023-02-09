
let players = [];
let activePlayer = {};

const formDisplay = document.querySelector('.formDisplay');
const newGameButton = document.querySelector('#newGame');
newGameButton.addEventListener('click', () => {
    formDisplay.style.display = 'block';
});

const submitButton = document.querySelector('#submitButton');
submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    const playerOneName = document.querySelector('#playerOne').value;
    const playerTwoName = document.querySelector('#playerTwo').value;

    const playerX = playerFactory(playerOneName, 'X');
    const playerO = playerFactory(playerTwoName, 'O');
    players.push(playerX);
    players.push(playerO);

    activePlayer = players.at(0);

    const playerOneHeading = document.querySelector('#playerOneHead');
    playerOneHeading.textContent = playerX.name;

    const playerTwoHeading = document.querySelector('#playerTwoHead');
    playerTwoHeading.textContent = playerO.name;

    formDisplay.style.display = 'none';
    document.querySelector("form").reset();
});

const playerFactory = (name, mark) => {

    return{
        name,
        mark,
    };
};

const gameBoard = (() => {

    const boardArray = ['', '', '', '', '', '', '', '', ''];

    const container = document.querySelector('#container');

    const generateBoard = () => {
        for (const index in boardArray) {
            let box = document.createElement("div");
            box.textContent = boardArray[index];
            container.appendChild(box).className = "box";
        }
    };

    return{
        generateBoard,
    };

})();

gameBoard.generateBoard();

const gameFlow = (() => {

    const switchTurn = () => {
        if ( activePlayer.mark === 'X' ) {
            activePlayer = players.at(1);
        } else {
            activePlayer = players.at(0);
        }
    };

    return{
        switchTurn,
    };

})();

const boxes = document.querySelectorAll('.box');
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        box.textContent = activePlayer.mark;
        gameFlow.switchTurn();
    })
});