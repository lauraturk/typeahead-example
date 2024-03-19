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
    expect(screen.getByRole('button')).toHaveTextContent("Search");
})

it('should render an alternate button text', () => {
    render(<TypeAhead ctaText="Zebra"/>);
    expect(screen.getByRole('button')).toHaveTextContent("Zebra");
})

it('with no input, the search suggest should be empty', () => {
    render(<TypeAhead data={mockData} />)
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument()
})

it('with text, the search suggest should be visible', () => {
    render(<TypeAhead data={mockData} />)
    const inputField = screen.getByLabelText("search")
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument()
    fireEvent.change(inputField, { target: {value: "de"}})
    expect(screen.getByRole("listbox")).not.toHaveClass("typeahead--suggest-wrapper-empty")
    expect(screen.getByRole("listbox").getAttribute("aria-hidden")).toEqual("false")
})

it('search suggestion only returns names with substring', () => {
    render(<TypeAhead data={mockData} />)
    const searchString = "je"
    const inputField = screen.getByLabelText("search")
    fireEvent.change(inputField, { target: {value: searchString}})

})

it('search suggestion is case insenstive', () => {
    render(<TypeAhead data={mockData} />)
    const searchString = "Je"
    const inputField = screen.getByLabelText("search")
    fireEvent.change(inputField, { target: {value: searchString}})
    expect(screen.queryAllByRole("option")).toHaveLength(3)
})

it('search suggestions return names with highlighted sub string', () => {
    render(<TypeAhead data={mockData} />)
    const searchString = "de"
    const inputField = screen.getByLabelText("search")
    fireEvent.change(inputField, { target: {value: searchString}})
    const subString = screen.getByText(searchString)
    const resultString = screen.getByText(/Jean/)
    expect(resultString).toContainElement(subString)
    expect(subString).toHaveClass("suggest--highlight")
    expect(screen.getByRole("listbox")).toContainElement(resultString)
    expect(screen.queryAllByRole("option")).toHaveLength(1)
})
