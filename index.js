/***** Deliverable 1 *****/
const header = document.querySelector("#header");


/***** Deliverable 2 *****/
header.style.color = 'red';


/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)
const allPlayers = document.querySelector(".player-container");
for (let i = 0; i < PLAYERS.length; i++) {
    let player = PLAYERS[i];
    let playerDiv = document.createElement('div');
    let playerHeader = document.createElement('h3');
    let playerImg = document.createElement('img');

    playerDiv.setAttribute('data-number', `${player.number}`);
    playerHeader.innerHTML = `${player.name} <em>${player.nickname}</em>`
    playerImg.setAttribute(`src`, `${player.photo}`)
    playerImg.setAttribute('alt', `${player.name}`)

    playerDiv.appendChild(playerHeader);
    playerDiv.appendChild(playerImg);

    allPlayers.appendChild(playerDiv);
}

/***** Deliverable 4 *****/
let badPlayer = document.querySelector('[data-number="7"]')
badPlayer.remove();