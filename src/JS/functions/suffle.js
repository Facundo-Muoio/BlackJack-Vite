import { deck } from "../variables/variables.js";

export function shuffle() {
	for (let i = 0; i <= deck.length - 1; i++) {
		let randomPos = Math.floor(Math.random() * deck.length - 1 + 1);
		let previusCard = deck[randomPos];
		deck[randomPos] = deck[i];
		deck[i] = previusCard;
	}
}
