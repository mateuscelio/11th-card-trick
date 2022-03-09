import { INITIAL_DECK_CARDS } from "../../__fixtures__/deckCards";
import { generateDeck, shuffleDeck } from "./deck";

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
