// JavaScript for Player Management Leaderboard

const playerForm = document.getElementById("player-form");
const playerNameInput = document.getElementById("player-name");
const playerScoreInput = document.getElementById("player-score");
const playerLevelInput = document.getElementById("player-level");
const playerList = document.getElementById("player-list");
const playerCount = document.getElementById("player-count");
const sortButton = document.getElementById("sort-button");

let players = [];
let isDescending = true;

function updatePlayerCount() {
    playerCount.textContent = `Players added: ${players.length}/10`;
}

function renderPlayerList() {
    playerList.innerHTML = "";
    players.forEach((player) => {
        const tr = document.createElement("tr");

        const nameTd = document.createElement("td");
        nameTd.textContent = player.name;

        const scoreTd = document.createElement("td");
        scoreTd.textContent = `${player.score}/100`; // Show score as a percentage

        const levelTd = document.createElement("td");
        levelTd.textContent = `Level ${player.level}`; // Display level with "Level" prefix

        tr.appendChild(nameTd);
        tr.appendChild(scoreTd);
        tr.appendChild(levelTd);

        playerList.appendChild(tr);
    });
}

function addPlayer() {
    if (players.length >= 10) {
        alert("You can only add up to 10 players.");
        return;
    }

    const name = playerNameInput.value.trim();
    const score = parseInt(playerScoreInput.value, 10);
    const level = parseInt(playerLevelInput.value, 10);

    if (!name || isNaN(score) || isNaN(level)) {
        alert("Please fill out all fields correctly.");
        return;
    }

    players.push({ name, score, level });

    playerNameInput.value = "";
    playerScoreInput.value = "";
    playerLevelInput.value = "";

    updatePlayerCount();
    renderPlayerList();
}

function sortPlayers() {
    players.sort((a, b) => {
        return isDescending ? b.score - a.score : a.score - b.score;
    });
    isDescending = !isDescending;
    sortButton.textContent = isDescending
        ? "Sort by Score (Descending)"
        : "Sort by Score (Ascending)";
    renderPlayerList();
}

// Update the event listener to handle the "Add Player" button click
document.getElementById("add-player-button").addEventListener("click", addPlayer);

// Sort button listener remains the same
sortButton.addEventListener("click", sortPlayers);
