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
        expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
       /*   expect(screen.getByLabelText(/lastName/i)).toBeInTheDocument() */
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
        expect(screen.getByRole('button', {name: /Sign up/i}))
      });


    }); 
