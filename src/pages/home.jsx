import * as React from "react";
import TypeAhead from "../components/typeahead";

const homeData = [
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

const Home = () => {
  return (
    <div>
      <TypeAhead data={homeData} />
    </div>
  )
}

export default Home