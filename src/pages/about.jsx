import * as React from "react";
import TypeAhead from "../components/typeahead";

const aboutData = [
  "Alexa",
  "Amber",
  "Benjamin",
  "Beyoncé",
  "Cameron",
  "Dennis",
  "Emily",
  "François",
  "Gonzalo",
  "Henry",
  "Icarus",
  "Jean-Fredirec",
  "Jessica",
  "John-Jefferson",
  "Kenneth",
  "Katie",
  "Laura",
  "Mateo",
  "Maximina",
  "Madison",
  "Nicholas",
  "Olivero",
  "Pamela",
  "Pablo",
  "Quinten",
  "Rodrigo",
  "Stella",
  "Tomas",
  "Usher",
  "Veronica",
  "Washington",
  "Xochitl",
  "Yvonne",
  "Zenon"
]

const About = () => {
  return (
    <div>
      <TypeAhead data={aboutData} ctaText="Let's get the party started"/>
    </div>
  )
}

export default About