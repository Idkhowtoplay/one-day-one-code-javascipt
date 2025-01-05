const cells = document.querySelectorAll('[data-cell]');
const winnerMessage = document.getElementById('winner-message');
const restartButton = document.getElementById('restart-button');

let currentPlayer = "X";
let gameActive = true;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const checkWinner = () => {
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (
            cells[a].textContent &&
            cells[a].textContent === cells[b].textContent &&
            cells[a].textContent === cells[c].textContent
        ) {
            gameActive = false;
            winnerMessage.textContent = `Player ${currentPlayer} Wins!`;
            return true;
        }
    }

    const isDraw = [...cells].every(cell => cell.textContent);
    if (isDraw) {
        gameActive = false;
        winnerMessage.textContent = 'It\'s a Draw!';
        return true;
    }

    return false;
}

const handleCellClick = (event) => {
    const cell = event.target;

    if (cell.classList.contains('taken') || !gameActive) return;

    cell.textContent = currentPlayer;
    cell.classList.add("taken");

    if (!checkWinner()) {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
};

const resetGame = () => {
    currentPlayer = "X";
    gameActive = true;
    winnerMessage.textContent = "";
    cells.forEach(cell => {
        cell.textContent = "";
        cell.classList.remove("taken");
    });
};

cells.forEach(cell => cell.addEventListener("click", handleCellClick));
restartButton.addEventListener("click", resetGame);