import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Greeting } from "../src/components/Greeting";

describe("Greeting Component", () => {
  test("renders default greeting", () => {
    render(<Greeting />);
    expect(screen.getByTestId("greeting")).toHaveTextContent("Hello, Guest!");
  });

  test("renders VIP greeting", () => {
    render(<Greeting name="Lisa" isVIP />);
    expect(screen.getByTestId("greeting")).toHaveTextContent(
      "Welcome, VIP Lisa!"
    );
  });
});
