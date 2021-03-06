import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders learn react link", () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("renders a table", () => {
    const { queryByRole } = render(<App />);
    const tableElement = queryByRole("table");
    expect(tableElement).toBeNull();
  });
});
