import { useEffect } from "react";
import styles from "./Navbar.module.css";
import { RevealOnScroll } from "../revealOnScroll/RevealOnScroll";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className={styles.navbar}>
      <RevealOnScroll>
        <div className={styles.container}>
          <div className={styles.content}>
            <a href="#home" className={styles.logo}>
              CT
            </a>

            {/* mobile menu */}
            <div
              className={styles.mobileMenu}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              &#9776;
            </div>

            {/* desktop menu */}
            <div className={styles.desktopMenu}>
              <a className={styles.link} href="#home">
                Home
              </a>
              <a className={styles.link} href="#about">
                About
              </a>
              <a className={styles.link} href="#projects">
                Projects
              </a>
              <a className={styles.link} href="#contact">
                Contact
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </nav>
  );
};
