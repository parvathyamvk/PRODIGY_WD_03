const cells = document.querySelectorAll('.box');
const resetButton = document.getElementById('reset');
let currentPlayer = 'X';

function handleCellClick(event) {
    const cell = event.target;
    
    if (cell.innerText === '') {
        cell.innerText = currentPlayer;
        if (checkWin()) {
            alert(`${currentPlayer} wins!`);
            resetGame();
        } else if (isDraw()) {
            alert('Draw!');
            resetGame();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    
    return winPatterns.some(pattern => {
        return pattern.every(index => {
            return cells[index].innerText === currentPlayer;
        });
    });
}

function isDraw() {
    return [...cells].every(cell => cell.innerText !== '');
}

function resetGame() {
    cells.forEach(cell => cell.innerText = '');
    currentPlayer = 'X';
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetGame);
