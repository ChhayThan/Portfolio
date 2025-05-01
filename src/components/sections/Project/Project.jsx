import { RevealOnScroll } from "../../revealOnScroll/RevealOnScroll";
import styles from "./Project.module.css";

export const Project = () => {
  return (
    <section className={styles.projectSection} id="projects">
      <RevealOnScroll>
        <div className={styles.projectContainer}>
          <h2>Featured Projects</h2>
          <div className={styles.projectContent}>
            <div className={styles.projectWrapper}>
              <h3>Garage Management Application</h3>
              <p>Coming soon!!!</p>
              <div className={styles.projectTechs}>
                {["React Native", "Node/Express.Js", "SQL"].map((tech) => (
                  <span className={styles.tech}>{tech}</span>
                ))}
              </div>
            </div>

            <div className={styles.projectWrapper}>
              <h3>Member Mumble - Authenticated Message Board</h3>
              <p>
                An exclusive clubhouse message board application that implements
                user authentication. Incorporated different types of user as
                well as user form sanitization and validations. Integrated
                passportJS to handle authentication and sessions. Implemented
                localStrategy. Utilized bcrypt library and PostgreSQL database
                to store encrypted user information and messages
              </p>
              <div className={styles.projectTechs}>
                {[
                  "PassportJS",
                  "Authentication",
                  "Node/Express.JS",
                  "PostgreSQL",
                ].map((tech) => (
                  <span className={styles.tech}>{tech}</span>
                ))}
              </div>

              <div className={styles.viewBtn}>
                <a href="https://github.com/ChhayThan/members_only">
                  View Project →
                </a>
              </div>
            </div>

            <div className={styles.projectWrapper}>
              <h3>Eric's Garage - Inventory Management</h3>
              <p>
                CRUD application to manage inventory of car parts built using
                backend technologies. Implemented MVC pattern, created and
                validated user interactions, built forms, routes, and
                controllers. Built and implemented PostgreSQL Database on
                third-party PaaS provider - Koyeb
              </p>
              <div className={styles.projectTechs}>
                {[
                  "PostgreSQL",
                  "Node/Express.JS",
                  "Express/Node.JS",
                  "EJS",
                ].map((tech) => (
                  <span className={styles.tech}>{tech}</span>
                ))}
              </div>

              <div className={styles.viewBtn}>
                <a href="https://github.com/ChhayThan/TOP_InventoryApp">
                  View Project →
                </a>
              </div>
            </div>

            <div className={styles.projectWrapper}>
              <h3>Eric's Ecommerce Store</h3>
              <p>
                Implemented React features - Hooks (states, effect, context),
                components, react-router/router-dom. Responsive Design using CSS
                media query, flexbox and grid. Incorporated PropTypes to type
                check and validate React props. Worked with react data fetching
                and API usage
              </p>
              <div className={styles.projectTechs}>
                {["ReactJS", "RestAPI", "HTML/CSS", "Git"].map((tech) => (
                  <span className={styles.tech}>{tech}</span>
                ))}
              </div>

              <div className={styles.viewBtn}>
                <a href="https://github.com/ChhayThan/TOP_shoppingCart">
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
