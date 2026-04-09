import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("renders a message", () => {
  render(<App />);
  expect(screen.getByText("Hello, World!")).toBeInTheDocument();
});
