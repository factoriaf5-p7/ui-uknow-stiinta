import { beforeEach, describe, test, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import  Register  from "../pages/Register";

describe("Register", () => {
    beforeEach(async () => {
      render(
          <MemoryRouter initialEntries={["/register"]}>
              <Register />
          </MemoryRouter>
      )   
    });

    test('must have a form with the following fields: name, lastName, email, password and a sign up button', () => {
        expect(screen.getByLabelText("Name")).toBeInTheDocument();
        expect(screen.getByLabelText("Last Name")).toBeInTheDocument();
        expect(screen.getByLabelText("Email")).toBeInTheDocument();
        expect(screen.getByLabelText("Password")).toBeInTheDocument();
        expect(screen.getByRole('button', {name: /Sign up/i}))
      });
});
