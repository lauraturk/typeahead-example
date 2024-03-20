import * as React from "react";
import TypeAhead from "../components/typeahead";

const aboutData = [
  "Aardvark",
  "Aardwolf",
  "Abyssinian",
  "Abyssinian Guinea Pig",
  "Acadian Flycatcher",
  "Beluga Sturgeon",
  "Bengal Tiger",
  "Bergamasco",
  "Berger Blanc Suisse",
  "Berger Picard",
  "Bernedoodle",
  "Bernese Mountain Dog",
  "Bernese Mountain Dog Mix",
  "Bernese Shepherd",
  "Betta Fish (Siamese Fighting Fish)",
  "Flying Fish",
  "Flying Lemur",
  "Flying Snake",
  "Flying Squirrel",
  "Football Fish",
  "Forest Cobra",
  "Forest Cuckoo Bumblebee",
  "Formosan Mountain Dog",
  "Fossa",
];

const About = () => {
  return (
    <div>
      <TypeAhead data={aboutData} ctaText="Search Animals" />
    </div>
  );
};

export default About;
