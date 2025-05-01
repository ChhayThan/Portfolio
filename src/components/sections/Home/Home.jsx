import { RevealOnScroll } from "../../revealOnScroll/RevealOnScroll";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <section id="home" className={styles.homeSection}>
      <RevealOnScroll>
        <div className={styles.content}>
          <h1>
            Hi, I'm Chhay Than <i>Eric</i> Chhour, and I am a{" "}
            <span>Software Engineer</span>
          </h1>

          <p className={styles.description}>
            Developed a deep passion for problem solving and crafting innovative
            solutions through code. <br /> My fascination with software
            engineering lies in its power to create innovative solutions and
            bring ideas to life through lines of code.
          </p>

          <div class={styles.scrollDownIndicator}>
            Scroll <span>↓</span>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
