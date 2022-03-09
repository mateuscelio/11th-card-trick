const CARDS_PER_COLUMN = 7;

export const COLUMNS_SEQUENCE = {
  FIRST: 1,
  SECOND: 2,
  THIRD: 3,
};

export function iterateTrick({ trickDeck, selectedColumn, currentStep }) {
  if (currentStep < 3) {
    const columnInCardOffset = columnToCardOffset(selectedColumn);
    const orderedCards = orderTrickDeck(trickDeck, columnInCardOffset);

    return {
      orderedDeck: orderedCards,
      step: currentStep,
      cardChosen: currentStep === 2 ? orderedCards[10] : null,
    };
  }

  return {
    orderedDeck: trickDeck,
    step: currentStep,
    cardChosen: null,
  };
}

export function columnToCardOffset(column) {
  return (column - 1) * CARDS_PER_COLUMN;
}

export function orderTrickDeck(deck, offset) {
  const currentTrickDeck = deck.slice();

  const selectedColumnCards = currentTrickDeck.splice(offset, offset + 7);
  const orderedCardsColumn = [
    ...currentTrickDeck.slice(0, 7),
    ...selectedColumnCards,
    ...currentTrickDeck.slice(7, 14),
  ];

  return orderedCardsColumn
    .reduce(
      (acc, current, index) => {
        acc[index % 3].push(current);
        return acc;
      },
      [[], [], []]
    )
    .flat();
}
