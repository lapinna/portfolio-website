import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Hero2 from "../components/Hero2/Hero2";
import Work from "../components/Work/Work";

const Project = () => {
  return (
    <>
      <NavBar />
      <Hero2 title="PROJECTS." text="Some of my recent works" />
      <Work />
      <Footer />
    </>
  );
};

export default Project;
