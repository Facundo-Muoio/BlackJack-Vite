import { createCard } from "./createCard";
import { drawCard } from "./drawCard";
import { openDialog } from "./openDialog";
import { playerPoints, dealerPoints } from "../variables/variables";

export function hitCard(owner) {
	createCard(drawCard(), owner);
	console.log({ playerPoints, dealerPoints });
	if (playerPoints[0] > 21) {
		openDialog("lose");
	}
}
