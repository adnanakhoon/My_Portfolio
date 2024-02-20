import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "./contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Contact() {
  const form = useRef();


  const notify = ()=>{
   
    toast("message sent successfully")
  }
  const sendEmail = () => {
   

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_ID,
          form.current,
         {
          publicKey : import.meta.env.VITE_APP_PUBLIC_KEY
         }
           )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="contact__section section">
      <h2 className="section__title">
        Get in <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be shy !</h3>
          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">adnanakhoon08@gmail.com</h4>
              </div>
            </div>
            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">9149860676</h4>
              </div>
            </div>
          </div>
          <div className="contact__socials">
            <a
              href="https://twitter.com/adnanakhoon08"
              className="contact__social-link"
              target="blank"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/adnan-ashraf08/"
              className="contact__social-link"
              target="blank"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/adnanakhoon"
              className="contact__social-link"
              target="blank"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/adnanakhoon39/"
              className="contact__social-link"
              target="blank"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <form className="contact__form" ref={form} onSubmit={sendEmail}>
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Name"
                className="form__control"
                name="user_name"
              />
            </div>
            <div className="form__input-div">
              <input
                type="email"
                placeholder="Your Email"
                className="form__control"
                name="user_email"
              />
            </div>
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Subject"
                className="form__control"
                name="user_subject"
              />
            </div>
          </div>
          <div className="form__input-div">
            <textarea
              placeholder="Your Message"
              className="form__control textarea"
              name="message"
            ></textarea>
          </div>
          <button className="button" type="submit" value='send' onClick={notify}>
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
      <ToastContainer/>
    </section>
  );
}

export default Contact;
