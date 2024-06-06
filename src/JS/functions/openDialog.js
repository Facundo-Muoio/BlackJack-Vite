import {
	winTextDialog,
	winDialog,
	losetextDialog,
	loseDialog,
	playerPoints,
	dealerPoints,
} from "../variables/variables.js";

export function openDialog(dialog) {
	console.log(dialog);
	if (dialog === "BlackJack") {
		winTextDialog.innerText = `Congratulations! 🎉 You've hit a Blackjack! 🃏✨`;
		winDialog.showModal();
	} else if (dialog === "win") {
		winTextDialog.innerText = `Congratulations! 🎉 You’ve won this round.`;
		winDialog.showModal();
	} else if (dialog === "tie") {
		winTextDialog.innerText = `It's a tie! 🤝 You matched the dealer in this round of Blackjack.`;
		winDialog.showModal();
	} else {
		losetextDialog.textContent = `Sorry, you lost. You got it ${playerPoints[0]}, the dealer has ${dealerPoints[0]}. Better luck next time! 🍀`;
		loseDialog.showModal();
	}
}
