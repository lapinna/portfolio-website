import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Hero2 from "../components/Hero2/Hero2";
import Projects from "../components/Projects/Projects";

const Project = () => {
  return (
    <>
      <NavBar />
      <Hero2 title="PROJECTS." text="Some of my recent works" />
      <Projects />
      <Footer />
    </>
  );
};

export default Project;
