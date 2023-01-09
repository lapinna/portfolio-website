import "./contactForm.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('Leafy.io', 'template_4gx6wtp', form.current, 'bqq819FhBxf93jTo6')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type="text" name="user_name"/>
        <label>Email </label>
        <input type="email" name="user_email"/>
        <label>Subject</label>
        <input type="text" name="message_subject"/>
        <label>Message</label>
        <textarea rows="6" placeholder="Type Your Message Here" name="message"/>
        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
