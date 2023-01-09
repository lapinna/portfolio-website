import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Hero1 from "../components/Hero1/Hero1";
import Projects from "../components/Projects/Projects";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero1 />
      <Projects />
      <Footer />
    </>
  );
};

export default Home;
