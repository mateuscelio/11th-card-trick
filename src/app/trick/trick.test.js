import {
  INITIAL_TRICK_DECK_CARDS,
  ORDERED_STEP_0_DECK_CARDS_OFFSET_7,
} from "../../__fixtures__/deckCards";
import { COLUMNS_SEQUENCE, iterateTrick, orderTrickDeck } from "./trick";

describe("with 21 cards", () => {
  it("order cards choosing middle column(offset 7)", () => {
    const orderedCards = orderTrickDeck(INITIAL_TRICK_DECK_CARDS, 7);
    expect(orderedCards).toStrictEqual(ORDERED_STEP_0_DECK_CARDS_OFFSET_7);
  });

  describe("column sequence of 2, 2 and 1", () => {
    let res = iterateTrick({
      trickDeck: INITIAL_TRICK_DECK_CARDS,
      selectedColumn: COLUMNS_SEQUENCE.SECOND,
      currentStep: 0,
    });

    res = iterateTrick({
      trickDeck: res.orderedDeck,
      selectedColumn: COLUMNS_SEQUENCE.SECOND,
      currentStep: 1,
    });

    let { cardChosen } = iterateTrick({
      trickDeck: res.orderedDeck,
      selectedColumn: COLUMNS_SEQUENCE.FIRST,
      currentStep: 2,
    });

    it("shows 8 of hearts as chosen card", () => {
      expect(cardChosen).toStrictEqual({ num: "8", suit: "hearts" });
    });
  });
});
