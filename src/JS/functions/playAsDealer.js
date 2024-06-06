import { playerPoints, dealerPoints } from "../variables/variables.js";
import { createCard } from "./createCard.js";
import { drawCard } from "./drawCard.js";
import { whoWins } from "./whoWins.js";

export function playAsDealer() {
	while (dealerPoints[0] < 17) {
		createCard(drawCard());
		console.log({ playerPoints, dealerPoints });
	}
	whoWins();
}
