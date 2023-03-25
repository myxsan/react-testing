import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from "./index";

describe("Todo tests", () => {
  let button, input;
  beforeEach(() => {
    render(<Todo />);
    button = screen.getByText("Add");
    input = screen.getByLabelText("Text");
  });
  test("length of default item list is 3", () => {
    const items = screen.getAllByText(/Item/i);
    expect(items.length).toEqual(3);
  });

  test("Input and button occurs in the document", () => {
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test("When the button is clicked the string value of the input is added to item list", () => {
    const testName = "Musa";
    userEvent.type(input, testName);
    userEvent.click(button);

    expect(screen.getByText(testName)).toBeInTheDocument();
  });
});
