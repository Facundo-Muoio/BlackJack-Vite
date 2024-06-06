export function valueOfCard(card) {
	const str = card.slice(0, card.length - 1);
	return Number(str) ? Number(str) : str === "A" ? 11 : 10;
}
