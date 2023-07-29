import { beforeEach, describe, expect, test } from "vitest";
import CardHome from "./CardHome";
import {  render, screen } from "@testing-library/react";

describe("CardHome", () => {
    beforeEach(() => {
        render(
            <CardHome />
        );
    });

    test("should render CardHome page", () => {
        expect(screen.getByText(/testing/i)).toBeCalled();
    });

});