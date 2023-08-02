import { beforeEach, describe, test, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import  HeroImg  from "../pages/HeroImg";

describe("HeroImg", () => {
    beforeEach(async () => {
      render(
        <MemoryRouter initialEntries={["/"]}>
          <HeroImg showHeroImage={true} setShowHeroImage={() => {}} />
        </MemoryRouter>
      );
    });
    
  
    test("renders the logo", () => {
        const logo = screen.getByAltText("logo");
        expect(logo).toBeInTheDocument();
        expect(logo.tagName).toBe("IMG");
      });

     test("displays the hero image", () => {
        const heroImage = screen.getByAltText("");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage.tagName).toBe("IMG");
      });
});