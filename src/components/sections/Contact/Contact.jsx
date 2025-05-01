import { useState } from "react";
import { RevealOnScroll } from "../../revealOnScroll/RevealOnScroll";
import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <RevealOnScroll>
        <div className={styles.formContainer}>
          <h2 className={styles.title}>Get In Touch</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className={styles.input}
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className={styles.inputWrapper}>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className={styles.input}
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className={styles.textarea}
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>

          <div className={styles.connect}>
            <p>Connect with me</p>
            <div className={styles.links}>
              <a href="https://www.linkedin.com/in/chhay-than-chhour">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/1200px-LinkedIn_icon_circle.svg.png"
                  alt="LinkedIn Logo"
                />
              </a>
              <a href="https://github.com/ChhayThan">
                <img
                  src="https://cdn.freebiesupply.com/logos/thumbs/2x/github-icon-1-logo.png"
                  alt="Github logo"
                />
              </a>
              <a
                href="mailto:chhaythan.eric@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
                  alt="Mail"
                />
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
