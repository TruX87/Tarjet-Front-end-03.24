import React from "react";
import Title from "../home/Title";
import AboutMe from "./AboutMe";
import FunFact from "./FunFact";
import MyServices from "./MyServices";

const About = () => {
  return (
    <section id="about" className="w-full">
      <Title title="Minust" subTitle="Endast" />
      <AboutMe />
      <Title title="Minu" subTitle="Teenused" />
      <MyServices />
      <Title title="Lõbus" subTitle="Fakt" />
      <FunFact />
    </section>
  );
};

export default About;