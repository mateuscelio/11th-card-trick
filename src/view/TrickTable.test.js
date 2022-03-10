import { fireEvent, render, screen } from "@testing-library/react";
import TrickTable from "./TrickTable";

describe("TrickTable component", () => {
  let columnsEl;

  beforeEach(() => {
    render(<TrickTable />);
    columnsEl = screen.getByTestId("trick-table");
  });

  it("renders three card columns", () => {
    expect(columnsEl.childElementCount).toBe(3);
  });
  it("renders seven cards in each column", () => {
    columnsEl.childNodes.forEach((column) => {
      expect(column.childElementCount).toBe(7);
    });
  });

  describe("after three column clicks", () => {
    it("shows trick result", () => {
      const firstColumnEl = columnsEl.childNodes[0];
      [...Array(3)].forEach(() => fireEvent.click(firstColumnEl));
      const trickResultEl = screen.getByTestId("trick-result");

      expect(trickResultEl.childElementCount).toBe(3);
    });
  });
});
