import { valueOfCard } from "./valueOfCard.js";
import {
	playerPoints,
	dealerPoints,
	playerHand,
	dealerHand,
} from "../variables/variables.js";

function createCard(card, owner) {
	const cardElement = document.createElement("img");
	cardElement.src = `./assets/cartas/${card}.png`;
	cardElement.classList.add("card");
	owner === "player"
		? (playerHand.append(cardElement), (playerPoints[0] += valueOfCard(card)))
		: (dealerHand.append(cardElement), (dealerPoints[0] += valueOfCard(card)));
}

export { createCard };
