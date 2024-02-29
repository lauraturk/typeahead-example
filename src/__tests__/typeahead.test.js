import React from "react"
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import TypeAhead from "../components/typeahead"

const mockData = [
    "Jean-Frederic",
    "Jonathan",
    "Jessica",
    "Dominic",
    "John-Jefferson",
    "Cathryn",
    "Kaelig",
    "Monica",
    "Cynthia",
    "Peter",
    "Justin"
  ]

it('should render a search button by default', () => {
    render(<TypeAhead />);
    expect(screen.getByTestId('submitBtn')).toHaveTextContent("Search");
})

it('should render an alternate button text', () => {
    render(<TypeAhead ctaText="Zebra"/>);
    expect(screen.getByTestId('submitBtn')).toHaveTextContent("Zebra");
})

it('with no input, the search suggest should be empty', () => {
    render(<TypeAhead data={mockData} />)
    expect(screen.getByTestId("suggestList")).toHaveClass("typeahead--suggest-wrapper-empty")
    expect(screen.getByTestId("suggestList").getAttribute("aria-hidden")).toEqual("true")
})

xit('with text, the search suggest should be visible', () => {
    render(<TypeAhead data={mockData} />)
    const inputField = screen.getByLabelText("search").inputMode
    expect(screen.getByTestId("suggestList")).toHaveClass("typeahead--suggest-wrapper-empty")
    expect(screen.getByTestId("suggestList").getAttribute("aria-hidden")).toEqual("true")
})