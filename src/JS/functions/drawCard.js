import { deck } from "../variables/variables.js";

export function drawCard() {
	return deck.pop();
}
