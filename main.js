import "./style.css";
import {
	createCard,
	createDeck,
	drawCard,
	shuffle,
	hitCard,
	playAsDealer,
	openDialog,
	closeDialog,
} from "./src/JS/index.js";

import {
	dealerPoints,
	playerPoints,
	playerCards,
	dealerCards,
	deck,
	hitButton,
	btnStand,
	btnCloseLose,
	btnCloseWin,
} from "./src/JS/variables/variables.js";

export function initialGame() {
	createDeck();
	shuffle();
	console.log(deck, dealerPoints, playerPoints);
	createCard(drawCard(), "player");
	createCard(drawCard());
	createCard(drawCard(), "player");
	createCard(drawCard());
	console.log(playerCards, dealerCards, deck);
	if (playerPoints[0] === 21 && playerPoints[0] > dealerPoints[0]) {
		openDialog("BlackJack");
	} else if (playerPoints[0] === 21 && playerPoints[0] === dealerPoints[0]) {
		openDialog("tie");
	} else if (dealerPoints[0] === 21 && dealerPoints[0] > playerPoints) {
		openDialog();
	}
}

initialGame();
console.log({ playerPoints, dealerPoints });

hitButton.addEventListener("click", () => hitCard("player"));
btnStand.addEventListener("click", () => playAsDealer());

btnCloseLose.addEventListener("click", () => {
	closeDialog("lose");
});

btnCloseWin.addEventListener("click", () => {
	closeDialog("win");
});

// const figures = ["C", "D", "H", "S"];
// const especiales = ["A", "J", "Q", "K"];

// function createDeck() {
// 	for (let i = 2; i <= 10; i++) {
// 		for (let figure of figures) {
// 			deck.push(figure + i);
// 		}
// 	}
// 	for (let figure of figures) {
// 		for (let especial of especiales) {
// 			deck.push(figure + especial);
// 		}
// 	}
// }
