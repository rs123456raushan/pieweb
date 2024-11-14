import React from "react";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Contract from "../components/Contract";
import Project from "../components/Project";
import Clients from "../components/Clients";
import Technologies from "../components/Technologies";
import Reviews from "../components/Reviews";
import Form from "../components/Form";

const Home = () => {
  return (
    <main className="wrapper">
      <div className="homeWrapper">
        <section>
          <Hero />
        </section>
        <section>
          <Experience />
        </section>
        <section>
          <Contract />
        </section>
        <section>
          <Project />
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
