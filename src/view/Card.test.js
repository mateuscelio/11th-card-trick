import { render, screen } from "@testing-library/react";
import Card from "./Card";

const CARD_VALUE = { num: "A", suit: "spades" };
describe("Card component", () => {
  it("render card with card number and suit", () => {
    render(<Card card={CARD_VALUE} />);
    const element = screen.getByText("A spades");
    expect(element).toHaveTextContent("A spades");
    expect(element.parentElement).toHaveClass("card");
    expect(element.parentElement).toHaveClass("card__spades");
  });
});
