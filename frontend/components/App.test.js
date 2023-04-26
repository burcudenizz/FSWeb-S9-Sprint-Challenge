import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AppFunctional from "../components/AppFunctional";

describe("AppFunctional", () => {
  test("renders coordinates and steps", () => {
    render(<AppFunctional />);
    const coordinates = screen.getByText("Koordinatlar (2, 2)");
    const steps = screen.getByText("0 kere ilerlediniz");
    expect(coordinates).toBeInTheDocument();
    expect(steps).toBeInTheDocument();
  });

  test("renders button texts", () => {
    render(<AppFunctional />);
    const upButton = screen.getByText("YUKARI");
    const downButton = screen.getByText("AŞAĞI");
    const leftButton = screen.getByText("SOL");
    const rightButton = screen.getByText("SAĞ");
    const resetButton = screen.getByText("reset");
    expect(upButton).toBeInTheDocument();
    expect(downButton).toBeInTheDocument();
    expect(leftButton).toBeInTheDocument();
    expect(rightButton).toBeInTheDocument();
    expect(resetButton).toBeInTheDocument();
  });
});
