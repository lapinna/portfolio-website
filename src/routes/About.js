import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Hero2 from "../components/Hero2/Hero2";
import AboutContent from "../components/About/AboutContent";

const About = () => {
  return (
    <>
    <NavBar />
    <Hero2 title="ABOUT." text="Becoming a Web Developer" />
    <AboutContent />
    <Footer />
  </>
  )
}

export default About