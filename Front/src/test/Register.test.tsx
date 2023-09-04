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

    test("displays 'Create an account' heading", () => {
      const heading = screen.getByText(/Create an account/i);
      expect(heading).toBeInTheDocument();
      expect(heading.tagName).toBe("H2");
      expect(heading).toHaveClass("mt-6 text-center text-3xl font-extrabold text-dark");
    });

    test("displays 'Uknow is a cutting-edge application...' description paragraph", () => {
      const description = screen.getByText(/Uknow is a cutting-edge application designed for programming enthusiasts/i);
      expect(description).toBeInTheDocument();
      expect(description.tagName).toBe("P");
      expect(description).toHaveClass("mt-2 text-center text-sm text-text");
    });

    test("hides the error message when there is no error", () => {
      expect(screen.queryByText(/Test error message/i)).not.toBeInTheDocument();
      expect(screen.queryByAltText(/Warning Icon/i)).not.toBeInTheDocument();
    });

    test("changes state when input fields are filled", () => {
      const nameInput = screen.getByLabelText("Name");
      const lastNameInput = screen.getByLabelText("Last Name");
      const emailInput = screen.getByLabelText("Email");
      const passwordInput = screen.getByLabelText("Password");
  
      fireEvent.change(nameInput, { target: { value: "carlos" } });
      fireEvent.change(lastNameInput, { target: { value: "saiz" } });
      fireEvent.change(emailInput, { target: { value: "carlos.saiz@example.com" } });
      fireEvent.change(passwordInput, { target: { value: "StrongPassword123" } });
  
      expect(nameInput.value).toBe("carlos");
      expect(lastNameInput.value).toBe("saiz");
      expect(emailInput.value).toBe("carlos.saiz@example.com");
      expect(passwordInput.value).toBe("StrongPassword123");
    });

    test('must have a form with the following fields: name, lastName, email, password and a sign up button', () => {
        expect(screen.getByLabelText("Name")).toBeInTheDocument();
        expect(screen.getByLabelText("Last Name")).toBeInTheDocument();
        expect(screen.getByLabelText("Email")).toBeInTheDocument();
        expect(screen.getByLabelText("Password")).toBeInTheDocument();
        expect(screen.getByRole('button', {name: /Sign up/i}))
      });

    test('Not display All fields are required.”', async () => {
    expect(screen.queryByText(/All fields are required/i)).not.toBeInTheDocument()
    });    

    test('display Password must be at least 8 characters.', async () => {
    expect(screen.queryByText(/Password must be at least 8 characters./i)).not.toBeInTheDocument();
    });

    test("display 'Email is not valid.' when an invalid email is entered", async () => {
    expect(screen.queryByText(/Email is not valid./i)).not.toBeInTheDocument();
    });

    test("displays 'All fields are required.' when the form is submitted with empty fields", async () => {
      const signUpButton = screen.getByRole("button", { name: /Sign up/i });
  
      fireEvent.click(signUpButton);
  
      expect(await screen.findByText(/All fields are required./i)).toBeInTheDocument();
    });
    
    test("displays 'Password must be at least 8 characters.' when an invalid password is entered", async () => {
      const nameInput = screen.getByLabelText("Name");
      const lastNameInput = screen.getByLabelText("Last Name");
      const emailInput = screen.getByLabelText("Email");
      const passwordInput = screen.getByLabelText("Password");
      const signUpButton = screen.getByRole("button", { name: /Sign up/i });
      fireEvent.change(nameInput, { target: { value: 'Carlos' } });
      fireEvent.change(lastNameInput, { target: { value: 'Saiz' } });
      fireEvent.change(emailInput, { target: { value: 'carlos@gmail.com' } });
      fireEvent.change(passwordInput, { target: { value: "pass" } });
      fireEvent.click(signUpButton);
  
      expect(await screen.findByText(/Password must be at least 8 characters./i)).toBeInTheDocument();
    });
    
  test("displays 'Email is not valid.' when an invalid email is entered", async () => {
    const nameInput = screen.getByLabelText("Name");
    const lastNameInput = screen.getByLabelText("Last Name");
    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    const signUpButton = screen.getByRole("button", { name: /Sign up/i });
    fireEvent.change(nameInput, { target: { value: 'Carlos' } });
    fireEvent.change(lastNameInput, { target: { value: 'Saiz' } });
    fireEvent.change(emailInput, { target: { value: 'carlosgmail.com' } });
    fireEvent.change(passwordInput, { target: { value: "Passwor2d" } });
    fireEvent.change(emailInput, { target: { value: "invalidemail" } });
    fireEvent.click(signUpButton);

    expect(await screen.findByText(/Email is not valid./i)).toBeInTheDocument();
  });

 test("clears the form fields after error in registration", async () => {
    const nameInput = screen.getByLabelText("Name");
    const lastNameInput = screen.getByLabelText("Last Name");
    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    const signUpButton = screen.getByRole("button", { name: /Sign up/i });

    fireEvent.change(nameInput, { target: { value: "Carlos" } });
    fireEvent.change(lastNameInput, { target: { value: "Saiz" } });
    fireEvent.change(emailInput, { target: { value: "carlosexample.com" } });
    fireEvent.change(passwordInput, { target: { value: "StrongPassword123" } });

    fireEvent.click(signUpButton);

    // Assert that form fields are cleared
    expect(nameInput).toHaveValue("");
    expect(lastNameInput).toHaveValue("");
    expect(emailInput).toHaveValue("");
    expect(passwordInput).toHaveValue("");
  });

  test("Displays Last name must start with a capital letter and can only contain letters", async () => {
    const nameInput = screen.getByLabelText("Name");
    const lastNameInput = screen.getByLabelText("Last Name");
    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    const signUpButton = screen.getByRole("button", { name: /Sign up/i });
    fireEvent.change(nameInput, { target: { value: 'Carlos' } });
    fireEvent.change(lastNameInput, { target: { value: 'aiz' } });
    fireEvent.change(emailInput, { target: { value: 'carlos@gmail.com' } });
    fireEvent.change(passwordInput, { target: { value: "passwordsecure2" } });
    fireEvent.click(signUpButton);

    expect(await screen.findByText(/Last name must start with a capital letter and can only contain letters/i)).toBeInTheDocument();
  });

  test("The name must start with a capital letter and can only contain letters", async () => {
    const nameInput = screen.getByLabelText("Name");
    const lastNameInput = screen.getByLabelText("Last Name");
    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    const signUpButton = screen.getByRole("button", { name: /Sign up/i });
    fireEvent.change(nameInput, { target: { value: 'Carlos669' } });
    fireEvent.change(lastNameInput, { target: { value: 'Saiz' } });
    fireEvent.change(emailInput, { target: { value: 'carlos@gmail.com' } });
    fireEvent.change(passwordInput, { target: { value: "passwordsecure2" } });
    fireEvent.click(signUpButton);

    expect(await screen.findByText(/The name must start with a capital letter and can only contain letters/i)).toBeInTheDocument();
  });
  
  test("displays 'Forgot Password?' link", () => {
    const forgotPasswordLink = screen.getByText(/¿Forgot your password?/i);
    expect(forgotPasswordLink).toBeInTheDocument();
    expect(forgotPasswordLink.tagName).toBe("A");
    expect(forgotPasswordLink).toHaveClass("font-medium text-dark hover:text-text");
  });

  test("displays 'Sign up' button", () => {
    const signUpButton = screen.getByRole("button", { name: /Sign up/i });
    expect(signUpButton).toBeInTheDocument();
    expect(signUpButton.tagName).toBe("BUTTON");
  });

  test("displays 'You don't have an account yet? Sign in' message", () => {
    const signInMessage = screen.getByText(/You don't have an account yet?/i);
    expect(signInMessage).toBeInTheDocument();
    expect(signInMessage.tagName).toBe("P");
    expect(signInMessage).toContainElement(screen.getByText("Sign in"));
    expect(screen.getByText("Sign in")).toHaveClass("text-orange-500 underline p-1");
  });

  test("displays 'Remember Me' checkbox", () => {
    const rememberMeCheckbox = screen.getByRole("checkbox");
    expect(rememberMeCheckbox).toBeInTheDocument();
    expect(rememberMeCheckbox).toHaveAttribute("type", "checkbox");
    expect(screen.getByText(/Remember Me/i)).toBeInTheDocument(); // Verify label text is displayed
  });



/*   test("displays 'Se ha registrado correctamente.' when valid credentials are submitted", async () => {
    const nameInput = screen.getByLabelText("Name");
    const lastNameInput = screen.getByLabelText("Last Name");
    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    const signUpButton = screen.getByRole("button", { name: /Sign up/i });

    fireEvent.change(nameInput, { target: { value: "Carlos" } });
    fireEvent.change(lastNameInput, { target: { value: "Saiz" } });
    fireEvent.change(emailInput, { target: { value: "carlos@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "StrongPassword123" } });

    fireEvent.click(signUpButton);

    expect(await screen.findByText(/Se ha registrado correctamente./i)).toBeInTheDocument();
  });
 */
  
}); 
