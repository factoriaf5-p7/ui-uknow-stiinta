import { beforeEach, describe, test, screen, expect } from "vitest";
import CardHome from "../components/CardHome";
import { render } from "vitest/dom"; // Asegúrate de importar render desde vitest/dom


describe("CardHome", () => {
  beforeEach(async () => {
    // Renderiza el componente
    render(<CardHome />);
    // Espera a que se carguen los cursos (Loading... se ha ido)
    await screen.findByText("Loading...", { exact: false });
  });

  test("should render CardHome page", async () => {
    // Verifica que los cursos se rendericen correctamente
    const courseNames = ["Curso", "Curso2"]; // Cambia esto con los nombres reales de los cursos
    for (const courseName of courseNames) {
      const elementsWithText = screen.getAllByText(courseName, { exact: false });
      expect(elementsWithText).toHaveLength(1);
      expect(elementsWithText[0]).toBeInTheDocument();
    }

    // Verifica que se rendericen los botones de "Comprar"
    const buttonsComprar = screen.getAllByText("Comprar", { exact: false });
    expect(buttonsComprar).toHaveLength(2); // Debería haber dos botones con el texto "Comprar"
    for (const button of buttonsComprar) {
      expect(button).toBeInTheDocument();
    }
  });
});
