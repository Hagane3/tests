import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("<Greeting /> component", () => {
  test("renders Hello World as a text", () => {
    // Arrange
    render(<Greeting />);

    //Act
    //Nothing

    //Assert
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good to see you if the button was NOT clicked", () => {
    render(<Greeting />);
    const paragraphElement = screen.getByText("good to see you", {
      exact: false,
    });
    expect(paragraphElement).toBeInTheDocument();
  });

  test("renders CHANGED if the button was clicked", () => {
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const paragraphElement = screen.getByText("changed", {
      exact: false,
    });

    expect(paragraphElement).toBeInTheDocument();
  });

  test('does not render "good to see you" if the button was clicked', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const paragraphElement = screen.queryByText("good to see you", {
      exact: false,
    });

    expect(paragraphElement).not.toBeInTheDocument();
  });
});
