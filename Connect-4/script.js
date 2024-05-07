let columnValues = [1, 1, 1, 1, 1, 1, 1];
let currentPlayer = "red";

// Function to check for a winner
function checkWinner(player) {
  // For Row
  function checkRow() {
    for (let i = 1; i <= 7; i++) {
      for (let j = 1; j <= 3; j++) {
        if (
          document.getElementById(`c${i}r${j}`).style.backgroundColor ==
            player &&
          document.getElementById(`c${i}r${j + 1}`).style.backgroundColor ==
            player &&
          document.getElementById(`c${i}r${j + 2}`).style.backgroundColor ==
            player &&
          document.getElementById(`c${i}r${j + 3}`).style.backgroundColor ==
            player
        ) {
          return true;
        }
      }
    }
    return false;
  }

  // For Columnn
  function checkColumn() {
    for (let i = 1; i <= 6; i++) {
      for (let j = 1; j <= 4; j++) {
        if (
          document.getElementById(`c${j}r${i}`).style.backgroundColor ==
            player &&
          document.getElementById(`c${j + 1}r${i}`).style.backgroundColor ==
            player &&
          document.getElementById(`c${j + 2}r${i}`).style.backgroundColor ==
            player &&
          document.getElementById(`c${j + 3}r${i}`).style.backgroundColor ==
            player
        ) {
          return true;
        }
      }
    }
    return false;
  }

  // For Diagnoally from top-left to bottom-right
  function checkDiagonal1() {
    for (let i = 1; i <= 4; i++) {
      for (let j = 1; j <= 3; j++) {
        if (
          document.getElementById(`c${i}r${j}`).style.backgroundColor ==
            player &&
          document.getElementById(`c${i + 1}r${j + 1}`).style.backgroundColor ==
            player &&
          document.getElementById(`c${i + 2}r${j + 2}`).style.backgroundColor ==
            player &&
          document.getElementById(`c${i + 3}r${j + 3}`).style.backgroundColor ==
            player
        ) {
          return true;
        }
      }
    }
    return false;
  }

  // For Diagonally from top-right to bottom-left
  function checkDiagonal2() {
    for (let i = 1; i <= 4; i++) {
      for (let j = 6; j >= 4; j--) {
        if (
          document.getElementById(`c${i}r${j}`).style.backgroundColor ==
            player &&
          document.getElementById(`c${i + 1}r${j - 1}`).style.backgroundColor ==
            player &&
          document.getElementById(`c${i + 2}r${j - 2}`).style.backgroundColor ==
            player &&
          document.getElementById(`c${i + 3}r${j - 3}`).style.backgroundColor ==
            player
        ) {
          return true;
        }
      }
    }
    return false;
  }

  // Check for a winner
  if (checkRow() || checkColumn() || checkDiagonal1() || checkDiagonal2()) {
    alert(`${player} Wins`);
    location.reload();
  }
}

// Function to handle a player's move
function handleMove(columnId) {
  const column = document.getElementById(columnId);
  const rowIndex = columnValues[columnId.charAt(1) - 1];

  if (rowIndex <= 6) {
    const cell = document.getElementById(`${columnId}r${rowIndex}`);
    cell.style.backgroundColor = currentPlayer;
    columnValues[columnId.charAt(1) - 1]++;
    checkWinner(currentPlayer);
    togglePlayer();
  }
}

// Function to toggle players
function togglePlayer() {
  currentPlayer = currentPlayer === "red" ? "yellow" : "red";
  document.getElementById("whosturn").innerText =
    currentPlayer === "red" ? "Red's Turn" : "Yellow's Turn";
}

// Add event listeners to columns
document.querySelectorAll(".column").forEach((column) => {
  column.addEventListener("click", () => {
    handleMove(column.id);
  });
});
