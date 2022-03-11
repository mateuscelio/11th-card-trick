import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders TrickTable component", () => {
  render(<App />);
  const trickTableEl = screen.getByTestId("trick-table");
  expect(trickTableEl).toBeInTheDocument();
});
