import { beforeEach, describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CardHome from "../components/CardHome";

describe("CardHome", () => {
  beforeEach(async () => {
    render(
      <MemoryRouter>
        <CardHome />
      </MemoryRouter>
    );
  });

  test("renders CardHome component without errors", () => {
    render(<CardHome />);
  });
  
  test("displays 'Loading...' while fetching data", () => {
    const loadingText = screen.getByText("Loading...");
    expect(loadingText).toBeInTheDocument();
  });


  
  





});
