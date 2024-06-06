import { deck } from "../variables/variables.js";

export function createDeck() {
	for (let i = 1; i <= 13; i++) {
		switch (i) {
			case 1:
				deck.push("AC");
				deck.push("AD");
				deck.push("AH");
				deck.push("AS");
				break;
			case 11:
				deck.push("JC");
				deck.push("JD");
				deck.push("JH");
				deck.push("JS");
				break;
			case 12:
				deck.push("QC");
				deck.push("QD");
				deck.push("QH");
				deck.push("QS");
				break;
			case 13:
				deck.push("KC");
				deck.push("KD");
				deck.push("KH");
				deck.push("KS");
				break;
			default:
				deck.push(i + "C");
				deck.push(i + "D");
				deck.push(i + "H");
				deck.push(i + "S");
				break;
		}
	}
}
