import { useState } from "react";
import { generateDeck, shuffleDeck } from "../app";

export default function TrickTable() {
  const initialDeck = generateDeck();
  const [state, setState] = useState({
    trickDeck: shuffleDeck(initialDeck).slice(0, 21),
  });

  return <div></div>;
}
