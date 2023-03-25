import { getByText, render, screen, getByRole } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./index";

test("increase btn", () => {
  render(<Counter />);
  const count = screen.getByText("0");
  // const increaseBtn = screen.getByRole("button", { name: /increase/i });
    const increaseBtn = screen.getByText("Increase");
  userEvent.click(increaseBtn);
  expect(count).toHaveTextContent("0");
});
