'use client'

import { useState, useEffect } from "react";
import Project from "@/components/Project";
import SkillsCarousel from "./SkillsCarousel";

export default function Projects({}) {

    const projects = [
        {
            image: "/dungeoneerDesigner.png",
            title: "Dungeoneer Designer",
            link: "https://dnd-create-character-pbx6p9r6t-jake-eckhardts-projects.vercel.app/",
            description: [
                `See, in my head, this was supposed to be a weekend project. I like D&D.
                I wanted to have a user-friendly, information-driven platform that my
                friends and I could use during our quests. However, like any good campaign, 
                there is more than meets the eye. This is a constant work in progress.`,
                `I knew going into this project, there was no way I could go through and 
                manually input all the data that's needed, so I found a D&D 5E API to 
                connect to. However, I quickly realized it wasn't a complete database.
                Therein lies the big commitment to the project. I came up with a plan 
                to augment the data from the 5E API, create and store my own data, and 
                combine the two.`,
                `This passion project was build with React, Next.js, MongoDB, and hosted 
                on Vercel.`
            ],
            skillTags: [
                "CSS3",
                "RESTful API",
                "Vercel",
                "React.js",
                "Next.js",
                "SASS",
                "NPM",
                "Github",
                "MongoDB"
            ]
        },
        {
            image: "/jakeeckhardtportfolio.png",
            title: "My Portfolio",
            link: "https://dnd-create-character.vercel.app/",
            description: [
                `Pretty meta, right? This one is pretty self-explanitory. I needed an updated portfolio
                site - show off more modern knowledge and demonstrate my relevency.`,
                `Style and making things catch the eye was the name of the game. This was all set up 
                with React and Next.js.`,
                `That being said, don't click the link for this project...because it's literally this
                page.`
            ],
            skillTags: [
                "CSS3",
                "Vercel",
                "React.js",
                "Next.js",
                "SASS",
                "NPM",
                "Github",
            ]
        }
    ];

    const [selectedWork, setSelectedWork] = useState();

    function select(num) {

        if (num === selectedWork) {
            setSelectedWork();
        } else {
            setSelectedWork(num);
        }
    };

    function selectProject (projectNum) {
        setSelectedWork(projects[projectNum]);
    };

    return (
        <div className="projectsContainer">
            {projects.map((p, i) => (
                <Project 
                    project={p}
                    num={i}
                    click={selectProject}
                />
            ))}
            {selectedWork ? (
                <div className="projectModalContainer">
                    <div className="projectModal">
                        <div className="mobileTitleContainer">
                            <a href={selectedWork.link} target="_blank">
                                <h3>{selectedWork.title}</h3>
                            </a>
                            <div className="closeModal">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 384 512"
                                    onClick={(e) => setSelectedWork()}
                                >
                                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                                </svg>
                            </div>
                        </div>
                        <a className="imageLink" href={selectedWork.link} target="_blank">
                            <h3>View</h3>
                            <img src={selectedWork.image} />
                        </a>
                        <div className="modalInformation">
                            <div className="titleContainer">
                                <a href={selectedWork.link} target="_blank">
                                    <h3>{selectedWork.title}</h3>
                                </a>
                                <div className="closeModal">
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 384 512"
                                        onClick={(e) => setSelectedWork()}
                                    >
                                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                                    </svg>
                                </div>
                            </div>
                            <SkillsCarousel 
                                skills={selectedWork.skillTags}
                            />
                            {selectedWork.description.map((d) => (
                                <p className="descriptionText">
                                    {d}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                ""
            )}
        </div>
    );
}