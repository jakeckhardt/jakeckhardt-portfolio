'use client';

import { useState, useEffect } from "react";
import MastheadTitles from "@/components/MastheadTitles";
import Work from "@/components/Work";
import Projects from "@/components/Projects";
import Tools from "@/components/Tools";
import Nav from "@/components/Nav";

export default function Home() {

  return (
    <div className="home">
      <div className="masthead">
        <div className="mastheadContainer">
          <div className="mastheadTextContainer">
            <h1>Jake</h1>
            <h1>Eckhardt</h1>
            <MastheadTitles />
            <Nav />
          </div>
          <img src="/jake1.png" />
        </div>
      </div>
      <div className="philosophy">
        <h2>Things should look pretty and work good.</h2>
        <p>- a thing I say a lot</p>
      </div>
      <div id="work">
        <div className="allWorkContainer">
          <h2>Work</h2>
          <Work />
        </div>
      </div>
      <div id="projects">
        <div className="allProjectsContainer">
          <h2>Projects</h2>
          <Projects />
        </div>
      </div>
      <div id="tools">
        <div className="toolsContainer">
          <h2>Tools</h2>
          <Tools />
        </div>
      </div>
      <div id="contact">
        <div className="contactContainer">
          <div className="contactInfoContainer">
            <h2>Contact</h2>
            <div className="contactInnerContainer">
              <div className="contactText">
                <p>Got a project in mind?</p>
                <p>Let's chat.</p>
              </div>
              <div className="contactLinks">
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
              {/* <div className="legalText">

              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
