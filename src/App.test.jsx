// App.test.jsx

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App component", () => {
  it("renders All Micght", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
  it("renders Endavor after button click", async () => {
    const user = userEvent.setup();
    render(<App />);
    const button = screen.getByRole("button");
    await user.click(button);
    expect(screen.getByRole("heading").textContent).toMatch(/Endavor/i);
  });
});
