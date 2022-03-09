import { useState } from "react";
import { generateDeck, shuffleDeck } from "../app";
import Card from "./Card";
import "./TrickTable.css";

export default function TrickTable() {
  const initialDeck = generateDeck();
  const [state, setState] = useState({
    trickDeck: shuffleDeck(initialDeck).slice(0, 21),
  });

  const renderCards = (offset) => {
    return state.trickDeck
      .slice(0 + offset, 7 + offset)
      .map((card) => <Card card={card} />);
  };

  return (
    <div class="trick-table">
      <div class="trick-table__cards">{renderCards(0)}</div>
      <div class="trick-table__cards">{renderCards(7)}</div>
      <div class="trick-table__cards">{renderCards(14)}</div>
    </div>
  );
}
