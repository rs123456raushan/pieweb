import React from "react";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Contract from "../components/Contract";
import Project from "../components/Project";
import Clients from "../components/Clients";
import Technologies from "../components/Technologies";
import Reviews from "../components/Reviews";
import Form from "../components/Form";
import Background from "../components/Background";
import NavBar from "../components/NavBar";

const Home = () => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <main className="wrapper">
      <div id="home" className="homeWrapper">
        <section>
          <Background />
        </section>
        <section>
          <NavBar scrollToSection={scrollToSection} />
        </section>
        <section>
          <Hero />
        </section>
        <section>
          <Experience scrollToSection={scrollToSection} />
        </section>
        <section>
          <Contract />
        </section>
        <section>
          <Project scrollToSection={scrollToSection} />
        </section>
        <section>
          <Clients />
        </section>
        <section>
          <Technologies />
        </section>
        <section>
          <Reviews />
        </section>
        <section>
          <Form />
        </section>
      </div>
    </main>
  );
};

export default Home;
