import { render, screen, fireEvent } from "@testing-library/react";
import { InputField } from "./InputField";

test("renders label", () => {
  render(<InputField label="Username" />);
  expect(screen.getByText("Username")).toBeInTheDocument();
});

test("shows error message when invalid", () => {
  render(<InputField invalid errorMessage="Required" />);
  expect(screen.getByText("Required")).toBeInTheDocument();
});

test("toggles password visibility", () => {
  render(<InputField type="password" />);
  const button = screen.getByText("Show");
  fireEvent.click(button);
  expect(screen.getByText("Hide")).toBeInTheDocument();
});
