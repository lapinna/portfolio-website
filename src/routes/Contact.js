import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Hero2 from "../components/Hero2/Hero2";
import ContactForm from "../components/ContactForm/ContactForm";

const Contact = () => {
  return (
    <>
      <NavBar />
      <Hero2 title="CONTACT." text="Let's have a chat!" />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;
