import { describe, test, expect, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home  from "../pages/Home";

describe("Home component", () => {
    beforeEach(() => {
        render(
            <MemoryRouter initialEntries={["/"]}>
            <Home />
          </MemoryRouter>
        );
    });

    test("renders a link to the 'Comprar' page", async () => {
        await waitFor(() => {
            const comprarText = screen.getByText(/Comprar/i);
            expect(comprarText).toBeInTheDocument();//)
        })
    })
});