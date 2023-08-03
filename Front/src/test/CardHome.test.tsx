import { beforeEach, describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CardHome from "../components/CardHome";

describe("CardHome", () => {
  beforeEach(async () => {
    render(
      <MemoryRouter>
        <CardHome _id={""} name={""} price={0} topic={""} difficulty={""} tags={[]} bought={false} average={undefined} content={""} />
      </MemoryRouter>
    );
  });

  test("renders CardHome component without errors", () => {
    render(<CardHome _id={""} name={""} price={0} topic={""} difficulty={""} tags={[]} bought={false} average={undefined} content={""} />);
  });
  






});
