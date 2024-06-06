import {
	deck,
	dealerCards,
	playerCards,
	dealerPoints,
	playerPoints,
} from "../variables/variables";

export function restartGame(dealerHand, playerHand) {
	deck.length = 0;
	dealerCards.length = 0;
	playerCards.length = 0;
	dealerPoints[0] = 0;
	playerPoints[0] = 0;
	dealerHand.innerText = "";
	playerHand.innerText = "";
}
