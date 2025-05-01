import styles from "./MobileMenu.module.css";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`${styles.container} ${
        menuOpen ? styles.open : styles.closed
      }`}
    >
      <a
        className={styles.link}
        href="#home"
        onClick={() => setMenuOpen(false)}
      >
        Home
      </a>
      <a
        className={styles.link}
        href="#about"
        onClick={() => setMenuOpen(false)}
      >
        About
      </a>
      <a
        className={styles.link}
        href="#projects"
        onClick={() => setMenuOpen(false)}
      >
        Projects
      </a>
      <a
        className={styles.link}
        href="#contact"
        onClick={() => setMenuOpen(false)}
      >
        Contact
      </a>

      <button
        className={styles.closeBtn}
        onClick={() => setMenuOpen(false)}
        aria-label="Close menu"
      >
        &times;
      </button>
    </div>
  );
};
