let player = {
    name: "Hrco",
    money: 200
};
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let palyerEL = document.getElementById("player-el")
let cards = [];
let sum = 0;
let message;
let gotBlackjack = false;
let isAlive = true;

palyerEL.textContent = player.name + ": " + "$" + player.money;
function getRandomNumber() {
    let randomNumber;
    randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;

    } else {
        return randomNumber;
    }
}

function startGame() {
    gotBlackjack = false;
    isAlive = true;
    if (player.money === 0) {
        player.money = 200;
    }

    let num1;
    let num2;
    num1 = getRandomNumber();
    num2 = getRandomNumber();
    cards = [num1, num2];
    sum = num1 + num2;
    renderGame();
}
function renderGame() {
    cardsEl.textContent = "Cards: " + cards;
    if (sum < 21) {
        message = " draw new card";
    } else if (sum === 21) {
        message = "you win Blackjack";
        gotBlackjack = true;

    } else {
        message = " you lost";
        isAlive = false;
    }
    sumEl.textContent = "Sum: " + sum;
    messageEl.textContent = message;
    if (gotBlackjack === true) {
        player.money *= 2;
    } else if (isAlive === false) {
        player.money = 0;

    }
    palyerEL.textContent = player.name + ": " + "$" + player.money;

}

function newCards() {
    if (gotBlackjack === false && isAlive === true) {
        let card = getRandomNumber();
        cards.push(card);
        sum += card;
        renderGame()
    }
}