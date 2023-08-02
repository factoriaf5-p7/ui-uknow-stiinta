import { beforeEach, describe, test, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import  Login  from "../pages/Login";



describe("Login", () => {
    beforeEach(async () => {
      render(
          <MemoryRouter initialEntries={["/login"]}>
              <Login />
          </MemoryRouter>
      )   
    });
  
    
    test('must have a form with the following fields: email, password and a submit button', () => {
      expect(screen.getByLabelText(/Email/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/Password/i)).toBeInTheDocument()
      expect(screen.getByRole('button', {name:   /Log In/i}))
    });

    test('display All fields are required.”', async () => {
        expect(screen.queryByText(/All fields are required./i)).not.toBeInTheDocument()
        expect(
          screen.queryByText(/All fields are required./i),
        ).not.toBeInTheDocument()
    
        fireEvent.click(screen.getByRole('button', {name: /Log In/i}))
    
        expect(screen.getByText(/All fields are required./i)).toBeInTheDocument()
        expect(screen.getByText(/All fields are required./i)).toBeInTheDocument()
    
      });

      test('display Password must be at least 8 characters.', async () => {
        expect(screen.queryByText(/Password must be at least 8 characters./i)).not.toBeInTheDocument();
        
        // MOCKS EMAIL Y PASSWORD
        const emailInput = screen.getByLabelText(/Email/i);
        const passwordInput = screen.getByLabelText(/Password/i);
        fireEvent.change(emailInput, { target: { value: 'carlos@GmAil.com' } });
        fireEvent.change(passwordInput, { target: { value: 'short' } });
      
        fireEvent.click(screen.getByRole('button', {name: /Log In/i}));
      
        expect(screen.getByText(/Password must be at least 8 characters./i)).toBeInTheDocument();
      });
      
      test("display 'Email is not valid.' when an invalid email is entered", async () => {
        expect(screen.queryByText(/Email is not valid./i)).not.toBeInTheDocument();
    
        // Aquí mockeamos un valor de email inválido
        const emailInput = screen.getByLabelText(/Email/i);
        const passwordInput = screen.getByLabelText(/Password/i);
        fireEvent.change(emailInput, { target: { value: 'invalid_email' } });
        fireEvent.change(passwordInput, { target: { value: 'GoodPassword' } });
    
        fireEvent.click(screen.getByRole('button', {name: /Log In/i}));
    
        expect(screen.getByText(/Email is not valid./i)).toBeInTheDocument();
      });

      
});