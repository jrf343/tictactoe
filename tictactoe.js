const container = document.querySelector('#container');

const playerFactory = (name) => {
    const getName = () => name;

    return {getName};
}

const gameBoard = (() => {
    const boardArray = ['x', 'o', 'x', 'x', 'o', 'o', 'x', 'o', 'x'];

    for (const index in boardArray) {
        let box = document.createElement("div");
        box.textContent = boardArray[index];
        container.appendChild(box).className = "box";
    }
})();