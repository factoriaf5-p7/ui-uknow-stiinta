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

    test("displays 'Welcome back'", () => {
      expect(screen.getByText("Welcome back")).toBeInTheDocument();
    });

    test("displays 'Uknow is a cutting-edge application designed for programming enthusiasts and aspiring developers. Uknow has you covered.'", () => {
      expect(screen.getByText(/Uknow is a cutting-edge application designed for programming enthusiasts and aspiring developers\. Uknow has you covered\./)).toBeInTheDocument();
    });
  
    test("displays 'Remember me' checkbox", () => {
      const rememberMeCheckbox = screen.getByLabelText(/Remember me/i);
      expect(rememberMeCheckbox).toBeInTheDocument();
      expect(rememberMeCheckbox).toHaveAttribute("type", "checkbox");
      expect(screen.getByText("Remember me")).toBeInTheDocument();
    });

    test("displays '¿Forgot your password?' link", () => {
      expect(screen.getByText("¿Forgot your password?")).toBeInTheDocument();
    });
  
    
    test("displays 'Forgot Password?' link", () => {
      const forgotPasswordLink = screen.getByText(/¿Forgot your password?/i);
      expect(forgotPasswordLink).toBeInTheDocument();
      expect(forgotPasswordLink.tagName).toBe("A");
      expect(forgotPasswordLink).toHaveClass("font-medium text-dark hover:text-text");
      expect(forgotPasswordLink.href).toBe(window.location.href); // Verify link is empty
    });

    test("displays 'Login' button", () => {
      expect(screen.getByRole("button", { name: /Login/i })).toBeInTheDocument();
    });

    test("displays 'You don't have an account yet? Sign in' link", () => {
      expect(screen.getByText("You don't have an account yet?")).toBeInTheDocument();
    });

/*     test("displays error message when an invalid email is entered", async () => {
      const emailInput = screen.getByLabelText("Email");
      const passwordInput = screen.getByLabelText("Password");
      const loginButton = screen.getByRole("button", { name: /Login/i });
  
      fireEvent.change(emailInput, { target: { value: "invalidemail" } });
      fireEvent.change(passwordInput, { target: { value: "password123" } });
  
      fireEvent.click(loginButton);
  
      expect(await screen.findByText(/Email is not valid./i)).toBeInTheDocument();
    });
  
    test("displays error message when an invalid password is on", async () => {
      const emailInput = screen.getByLabelText("Email");
      const passwordInput = screen.getByLabelText("Password");
      const loginButton = screen.getByRole("button", { name: /Login/i });
  
      fireEvent.change(emailInput, { target: { value: "invalid@email.com" } });
      fireEvent.change(passwordInput, { target: { value: "pass" } });
  
      fireEvent.click(loginButton);
  
      expect(await screen.findByText(/Password must be at least 8 characters./i)).toBeInTheDocument();
    });
   */
    

 /*    test('display All fields are required.”', async () => {
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
 */
      
});