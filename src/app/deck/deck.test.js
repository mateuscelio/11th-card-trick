import { generateDeck, shuffleDeck } from "./deck";

const INITIAL_DECK_CARDS = [
  { suit: "hearts", num: "A" },
  { suit: "hearts", num: "2" },
  { suit: "hearts", num: "3" },
  { suit: "hearts", num: "4" },
  { suit: "hearts", num: "5" },
  { suit: "hearts", num: "6" },
  { suit: "hearts", num: "7" },
  { suit: "hearts", num: "8" },
  { suit: "hearts", num: "9" },
  { suit: "hearts", num: "10" },
  { suit: "hearts", num: "J" },
  { suit: "hearts", num: "Q" },
  { suit: "hearts", num: "K" },
  { suit: "spades", num: "A" },
  { suit: "spades", num: "2" },
  { suit: "spades", num: "3" },
  { suit: "spades", num: "4" },
  { suit: "spades", num: "5" },
  { suit: "spades", num: "6" },
  { suit: "spades", num: "7" },
  { suit: "spades", num: "8" },
  { suit: "spades", num: "9" },
  { suit: "spades", num: "10" },
  { suit: "spades", num: "J" },
  { suit: "spades", num: "Q" },
  { suit: "spades", num: "K" },
  { suit: "diams", num: "A" },
  { suit: "diams", num: "2" },
  { suit: "diams", num: "3" },
  { suit: "diams", num: "4" },
  { suit: "diams", num: "5" },
  { suit: "diams", num: "6" },
  { suit: "diams", num: "7" },
  { suit: "diams", num: "8" },
  { suit: "diams", num: "9" },
  { suit: "diams", num: "10" },
  { suit: "diams", num: "J" },
  { suit: "diams", num: "Q" },
  { suit: "diams", num: "K" },
  { suit: "clubs", num: "A" },
  { suit: "clubs", num: "2" },
  { suit: "clubs", num: "3" },
  { suit: "clubs", num: "4" },
  { suit: "clubs", num: "5" },
  { suit: "clubs", num: "6" },
  { suit: "clubs", num: "7" },
  { suit: "clubs", num: "8" },
  { suit: "clubs", num: "9" },
  { suit: "clubs", num: "10" },
  { suit: "clubs", num: "J" },
  { suit: "clubs", num: "Q" },
  { suit: "clubs", num: "K" },
];

describe("Deck utils", () => {
  it("generates deck cards", () => {
    const deck_cards = generateDeck();
    expect(deck_cards).toStrictEqual(INITIAL_DECK_CARDS);
  });

  describe("generates a new shuffled deck from initial deck", () => {
    const shuffledDeck = shuffleDeck(INITIAL_DECK_CARDS);

    it("has the size of initial deck", () => {
      expect(shuffledDeck.length).toBe(INITIAL_DECK_CARDS.length);
    });

    it("has the cards of initial deck", () => {
      expect(shuffledDeck).toEqual(expect.arrayContaining(INITIAL_DECK_CARDS));
    });

    it("has different card order", () => {
      expect(shuffledDeck).not.toStrictEqual(INITIAL_DECK_CARDS);
    });
  });
});
