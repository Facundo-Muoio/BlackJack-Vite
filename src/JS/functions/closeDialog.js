import {
	loseDialog,
	winDialog,
	dealerHand,
	playerHand,
} from "../variables/variables.js";
import { restartGame } from "./restartGame.js";
import { initialGame } from "../../../main.js";

export function closeDialog(dialog) {
	dialog === "lose" ? loseDialog.close() : winDialog.close();
	restartGame(dealerHand, playerHand);
	initialGame();
}
