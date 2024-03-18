import React from "react"
import { fireEvent, render, screen } from "@testing-library/react";
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
    expect(screen.getByRole("listbox")).toHaveClass("typeahead--suggest-wrapper-empty")
    expect(screen.getByRole("listbox").getAttribute("aria-hidden")).toEqual("true")
})

it('with text, the search suggest should be visible', () => {
    render(<TypeAhead data={mockData} />)
    const inputField = screen.getByLabelText("search")
    expect(screen.getByRole("listbox")).toHaveClass("typeahead--suggest-wrapper-empty")
    expect(screen.getByRole("listbox").getAttribute("aria-hidden")).toEqual("true")
    fireEvent.change(inputField, { target: {value: "de"}})
    expect(screen.getByRole("listbox")).toHaveClass("typeahead--suggest-wrapper")
    expect(screen.getByRole("listbox").getAttribute("aria-hidden")).toEqual("false")
})

xit('search suggestions only include search strings', () => {
    render(<TypeAhead data={mockData} />)
    const inputField = screen.getByLabelText("search")
    fireEvent.change(inputField, { target: {value: "de"}})
    expect(screen.getByRole("listbox")).toHaveLength(2)
    expect(screen.getByRole("listbox").getAttribute("aria-hidden")).toEqual("false")
})