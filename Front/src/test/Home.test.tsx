import { beforeEach, describe, test, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import  Home  from "../pages/Home";


describe("CardHome", () => {
  beforeEach(async () => {
    render(
        <MemoryRouter initialEntries={["/"]}>
            <Home />
        </MemoryRouter>
    )   
  });

  test("renders a link to the 'Comprar' page", async () => {
    await waitFor(() => {
        const comprarText = screen.getAllByText(/Comprar/i);
        expect(comprarText[0]).toBeInTheDocument();
    })
  })
});
