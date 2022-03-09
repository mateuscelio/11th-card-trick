export function generateDeck() {
  const CARD_SUITS = ["hearts", "spades", "diams", "clubs"];
  const CARD_NUMBERS = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  return CARD_SUITS.flatMap((suit) =>
    CARD_NUMBERS.map((num) => ({ suit, num }))
  );
}

export function shuffleDeck(deck) {
  return deck.slice().sort(() => Math.random() - 0.5);
}
