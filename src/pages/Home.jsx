import React, { useState, useEffect } from "react";
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

  const [contents, setContents] = useState([]);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {

    // Fetching Contacts
    fetch('http://localhost:1337/api/contacts')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error fetching contacts: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setContacts(data.data[0]))
      .catch((error) => console.error('Error fetching contacts:', error));

    // Fetching Contents
    fetch('http://localhost:1337/api/contents?populate=*')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error fetching contents: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setContents(data.data[0]))
      .catch((error) => console.error('Error fetching contents:', error));
  }, [])

  return (
    <main className="wrapper">
      <div className="homeWrapper">
        <section>
          <NavBar />
        </section>
        <section>
          <Hero contacts={contacts} />
          <Background />
        </section>
        <section>
          <Experience contents={contents} />
        </section>
        <section>
          <Contract contents={contents} />
        </section>
        <section>
          <Project contents={contents} contacts={contacts} />
        </section>
        <section>
          <Clients contents={contents} />
        </section>
        <section>
          <Technologies contents={contents} />
        </section>
        <section>
          <Reviews contents={contents} contacts={contacts} />
        </section>
        <section>
          <Form contents={contents} />
        </section>
      </div>
    </main>
  );
};

export default Home;
