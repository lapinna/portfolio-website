import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Hero1 from "../components/Hero1/Hero1";
import ProjectsSlider from "../components/ProjectsSlider/ProjectsSlider";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero1 />
      <ProjectsSlider />
      <Footer />
    </>
  );
};

export default Home;
