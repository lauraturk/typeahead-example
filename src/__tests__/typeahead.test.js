import React from "react"
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import TypeAhead from "../components/typeahead"

it('should render a search button by default', () => {
    render(<TypeAhead />);
    expect(screen.getByTestId('submitBtn')).toHaveTextContent("Search");
})

it('should render an alternate button text', () => {
    render(<TypeAhead ctaText="Zebra"/>);
    expect(screen.getByTestId('submitBtn')).toHaveTextContent("Zebra");
})