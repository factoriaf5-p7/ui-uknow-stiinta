import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from "react-router-dom";
import Header from '@/components/Header'


describe("<Header />", () => {
  beforeEach(async () => {
    render(
        <MemoryRouter initialEntries={["/"]}>
            <Header />
        </MemoryRouter>
    )   
  });

test('loads logo image', async () => {
  // render(<Header />)
  const logo = await screen.getByAltText('Logo')
  console.log(logo)
  expect(logo).toMatch(/Logo image/i)
})
})