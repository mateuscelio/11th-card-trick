import { useState } from "react";
import { generateDeck, shuffleDeck } from "../app";
import {
  COLUMNS_SEQUENCE,
  iterateTrick,
  columnToCardOffset,
} from "../app/trick/trick";
import Card from "./Card";
import "./TrickTable.css";

export default function TrickTable() {
  const initialDeck = generateDeck();
  const [state, setState] = useState({
    trickDeck: shuffleDeck(initialDeck).slice(0, 21),
    currentTrickStep: 0,
    cardChosen: null,
  });

  const handleColumnClick = (selectedColumn) => {
    const { orderedDeck, cardChosen, step } = iterateTrick({
      trickDeck: state.trickDeck.slice(),
      selectedColumn,
      currentStep: state.currentTrickStep,
    });
    setState({
      trickDeck: orderedDeck,
      currentTrickStep: step + 1,
      cardChosen: cardChosen,
    });
  };

  const renderCards = (column) => {
    const offset = columnToCardOffset(column);
    return (
      <div
        className="trick-table__cards"
        onClick={() => handleColumnClick(column)}
      >
        {state.trickDeck.slice(offset, 7 + offset).map((card) => (
          <Card card={card} key={`${card.num}${card.suit}`} />
        ))}
      </div>
    );
  };

  const renderTrickTable = () => {
    if (state.cardChosen) {
      return (
        <div className="trick-result">
          <p>The card chosen was</p>
          <Card card={state.cardChosen} />
        </div>
      );
    } else {
      return (
        <div className="trick-table">
          <>{renderCards(COLUMNS_SEQUENCE.FIRST)}</>
          <>{renderCards(COLUMNS_SEQUENCE.SECOND)}</>
          <>{renderCards(COLUMNS_SEQUENCE.THIRD)}</>
        </div>
      );
    }
  };

  return renderTrickTable();
}
