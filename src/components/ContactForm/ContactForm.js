import "./contactForm.css";
import { useRef, useState } from "react";
import { Modal, Box, Typography } from "@mui/material";
import emailjs from "@emailjs/browser";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

const ContactForm = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "Leafy.io",
        "template_4gx6wtp",
        form.current,
        "bqq819FhBxf93jTo6"
      )
      .then((result) => {
        try {
          form.current.reset();
          console.log(result.text);
        } catch (error) {
          console.log(error.text);
        }
      })
      handleOpen();
  };
  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type="text" name="user_name" required />
        <label>Email </label>
        <input type="email" name="user_email" required />
        <label>Subject</label>
        <input type="text" name="message_subject" required />
        <label>Message</label>
        <textarea
          rows="6"
          placeholder="Please Type Your Message Here"
          name="message"
          required
        />
        <button className="btn" type="submit">
          Submit
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Thank you! <br /> Email was successfully sent!
            </Typography>
          </Box>
        </Modal>
      </form>
    </div>
  );
};

export default ContactForm;
