import { dealerPoints, playerPoints } from "../variables/variables";
import { openDialog } from "./openDialog";

export function whoWins() {
	console.log({ dealerPoints, playerPoints });
	if (dealerPoints[0] > 21) {
		openDialog("win");
		return;
	}
	if (playerPoints[0] < dealerPoints[0]) {
		openDialog("lose");
		return;
	}
	if (playerPoints[0] === dealerPoints[0]) {
		openDialog("tie");
	} else {
		openDialog("win");
	}
}
