import styles from "./About.module.css";
import MRBandageLogo from "../../../assets/MRbandage.png";
import DevLensLogo from "../../../assets/DevLens.png";
import { RevealOnScroll } from "../../revealOnScroll/RevealOnScroll";
import Resume from "../../../assets/EricChhour_Resume2025.pdf";

export const About = () => {
  const frontendSkills = ["React", "Typescript", "HTML/CSS"];

  const backendSkills = [
    "Node.js",
    "Express",
    "Laravel PHP",
    "MySQL",
    "Python",
    "Java",
    "REST API",
    "GraphQL",
  ];

  const toolsAndSystems = [
    "MacOS",
    "Windows",
    "Linux",
    "Docker",
    "Kubernetes",
    "Git",
    "Jest/JUnit/PHPUnit",
  ];

  const softSkills = [
    "Communication",
    "Adaptive",
    "Collaboration",
    "Quick Learner",
    "Organization",
    "Management",
  ];
  return (
    <section id="about" className={styles.aboutSection}>
      <RevealOnScroll>
        <div className={styles.content}>
          <h2>About Me</h2>

          <div className={styles.descriptionContainer}>
            <p>
              Enthusiastic and results-driven software engineering student with
              a passion for innovative problem-solving and a strong foundation
              in full-stack web development. <br /> <br /> Always exploring and
              learning new technologies.
            </p>
          </div>

          <div className={styles.aboutBtns}>
            <a href="#contact">
              <button>Get in touch</button>
            </a>
            <a href={Resume} download>
              <button className={styles.resumeBtn}>Download Resume/CV</button>
            </a>
          </div>

          <div className={styles.experienceContainer}>
            <div className={styles.experienceContent}>
              <h3 className={styles.experienceHeader}>Education</h3>

              <div className={styles.educationContent}>
                <img
                  src="https://i.namu.wiki/i/OYgc_GyK7T20ioRvStOxftcPteHcXhwZYWtFHQ9LEsQrPs6vrWV9u9aO1kMNE9Bi9dYce9txPgAWJ3vDYyDGrw.webp"
                  alt="University of Otttawa Logo"
                />
                <ul>
                  <li>
                    <strong>
                      BASc in Software Engineering (CO-OP), Engineering
                      Management and Entrepreneurship Option <br /> @ University
                      of Ottawa (2023-2028)
                    </strong>
                  </li>
                  <li>
                    Relevant Coursework: <br /> Data Structures & Algorithms,
                    Computer Architecture, Operating Systems, Quality Assurance,
                    Analysis and Design of UI
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.experienceContent}>
              <h3 className={styles.experienceHeader}>Work Experience</h3>

              <div className={styles.experienceWrapper}>
                <div className={styles.workExperience}>
                  <a href="https://www.distillersr.com/">
                    <img
                      src="https://media.licdn.com/dms/image/v2/C4E0BAQEr5f2w1VnsyQ/company-logo_200_200/company-logo_200_200/0/1663957084720/evidence_partners_logo?e=2147483647&v=beta&t=cz3DA1Vj_vwwIkHhgPBSYNORj59q3jgd547f5py-_eE"
                      alt="DistillerSR logo"
                    />
                  </a>
                  <ul>
                    <h4>
                      Software Developer Co-Op @ DistillerSR (Jan - April 2025)
                    </h4>
                    <li>
                      Collaborated within a cross-functional product engineering
                      team alongside Product Owners, UX Designers, QC Engineers,
                      Infrastructure, and other software development teams to
                      build and enhance SaaS product features using a full tech
                      stack.
                    </li>
                    <li>
                      Contributed to the entire development cycle by attending
                      sprint planning, stand-ups, retrospectives, and delivering
                      sprint demos to stakeholders.
                    </li>
                    <li>
                      Led a research initiative within a back-end engineering
                      group, exploring internal microservices to document
                      functionality, integration points, and improvement
                      opportunities.
                    </li>
                    <li>
                      Increased unit test coverage up to 90%, contributing to
                      system compliance and code quality standards.
                    </li>
                  </ul>
                </div>

                <div className={styles.workExperience}>
                  <a href="https://github.com/AXEZ-uottahack/DevLens">
                    <img src={DevLensLogo} alt="DevLens Team logo" />
                  </a>
                  <ul>
                    <h4>Student Developer @ uOttawa Hackathon (Feb 2025)</h4>
                    <li>
                      Worked with a team of engineering students during a
                      36-hour long hackathon to develop a web-application that
                      allows users to generate UML diagrams and code
                      documentation from source code in real-time
                    </li>
                    <li>
                      Integrated the Gemini AI model to analyze user-provided
                      source code and intelligently infer system components,
                      relationships, and documentation details.
                    </li>
                  </ul>
                </div>

                <div className={styles.workExperience}>
                  <a href="https://github.com/GNG2101-BAND1/MRBandage-App">
                    <img src={MRBandageLogo} alt="MRBandage team Logo" />
                  </a>
                  <ul>
                    <h4>Software Engineer @ MRBandage (Sep - Nov 2024)</h4>
                    <li>
                      Collaborated with fellow engineers to develop smart
                      bandage device that detects wound infections utilizing
                      both hardware and software. Incorporated Engineering
                      Design Process, prototyping and agile methodologies.
                    </li>
                    <li>
                      Developed a mobile application using React Native,
                      establish connection to hardware for data communication
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.skillsContainer}>
            <div className={styles.skillsContent}>
              <h3 className={styles.skillHeader}>Frontend</h3>
              <div className={styles.skillWrapper}>
                {frontendSkills.map((tech) => (
                  <span className={styles.skill}>{tech}</span>
                ))}
              </div>
            </div>

            <div className={styles.skillsContent}>
              <h3 className={styles.skillHeader}>Backend</h3>
              <div className={styles.skillWrapper}>
                {backendSkills.map((tech) => (
                  <span className={styles.skill}>{tech}</span>
                ))}
              </div>
            </div>

            <div className={styles.skillsContent}>
              <h3 className={styles.skillHeader}>Systems & Tools</h3>
              <div className={styles.skillWrapper}>
                {toolsAndSystems.map((tool) => (
                  <span className={styles.skill}>{tool}</span>
                ))}
              </div>
            </div>

            <div className={styles.skillsContent}>
              <h3 className={styles.skillHeader}>Soft Skills</h3>
              <div className={styles.skillWrapper}>
                {softSkills.map((skill) => (
                  <span className={styles.skill}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
