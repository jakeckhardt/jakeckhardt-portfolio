'use client';

import MastheadTitles from "@/components/MastheadTitle/MastheadTitles";
import Work from "@/components/Work/Work";
import Projects from "@/components/Projects/Projects";
import Tools from "@/components/Tools/Tools";
import Nav from "@/components/Nav/Nav";
import styles from "./styles.module.scss";

export default function Home() {

  return (
    <div className={styles.home}>
      <div className={styles.masthead}>
        <div className={styles.mastheadContainer}>
          <div className={styles.mastheadTextContainer}>
            <h1>Jake</h1>
            <h1>Eckhardt</h1>
            <MastheadTitles />
            <Nav />
          </div>
          <img src="/jake1.png" />
        </div>
      </div>
      <div className={styles.philosophy}>
        <h2>Things should look pretty and work good.</h2>
        <p>- a thing I say a lot</p>
      </div>
      <div id="work" className={styles.work}>
        <div className={styles.allWorkContainer}>
          <h2>Work</h2>
          <Work />
        </div>
      </div>
      <div id="projects" className={styles.projects}>
        <div className={styles.allProjectsContainer}>
          <h2>Projects</h2>
          <Projects />
        </div>
      </div>
      <div id="tools" className={styles.tools}>
        <div className={styles.toolsContainer}>
          <Tools />
        </div>
      </div>
      <div id="contact" className={styles.contact}>
        <div className={styles.contactContainer}>
          <div className={styles.contactInfoContainer}>
            <h2>Contact</h2>
            <div className={styles.contactInnerContainer}>
              <div className={styles.contactText}>
                <p>Got a project in mind?</p>
                <p>Let's chat.</p>
              </div>
              <div className={styles.contactLinks}>
                <a href="https://www.linkedin.com/in/jake-eckhardt-62a7a882/" target="_blank">
                  <p>
                    LinkedIn
                  </p>
                </a>
                <a href="mailto:jake.c.eckhardt@gmail.com">
                  <p>Email</p>
                </a>
                <a href="/JakeEckhardtWebDevResume.pdf" download="JakeEckhardtDeveloperResume">
                  <p>Resume</p>
                </a>
                <a href="https://github.com/jakeckhardt" target="_blank">
                  <p>Github</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
