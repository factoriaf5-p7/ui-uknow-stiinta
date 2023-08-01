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

    test('display All fields are required.”', async () => {
    expect(screen.queryByText(/Por favor rellene todos los campos/i)).not.toBeInTheDocument()
    });    

    test('display Password must be at least 8 characters.', async () => {
    expect(screen.queryByText(/La contraseña debe tener al menos 8 caracteres./i)).not.toBeInTheDocument();
    });

    test("display 'Email is not valid.' when an invalid email is entered", async () => {
    expect(screen.queryByText(/Email is not valid./i)).not.toBeInTheDocument();
    });


    const nameInput = screen.getByLabelText("Name");
    const lastNameInput = screen.getByLabelText("Last Name");
    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    fireEvent.change(nameInput, { target: { value: 'Carlos' } });
    fireEvent.change(lastNameInput, { target: { value: 'Saiz' } });
    fireEvent.change(emailInput, { target: { value: 'carlosgmail.com' } });
    fireEvent.change(passwordInput, { target: { value: 'asdzxcqwe' } });

    fireEvent.click(screen.getByRole('button', {name: /Sign up/i}));
    
    test("display 'Email is not valid.' when an invalid email is entered", async () => {
    expect(screen.queryByText(/Email is not valid./i)).toBeInTheDocument();
    });
}); 
