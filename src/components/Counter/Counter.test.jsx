import React from "react";
import { render } from "@testing-library/react";
import Counter from "./Counter";

it("renders without crashing", () => {
  render(<Counter />);
});
