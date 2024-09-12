'use client'

import { useState, useEffect } from "react";
import SkillsCarousel from "@/components/SkillsCarousel";

export default function Work({}) {

    const work = [
        {
            company: "Anheuser-Busch",
            title: "Front-End Developer",
            location: "St. Louis, MO.",
            time: "Jan. 2021 - present",
            description: [
                `Ah, yes, Anheuser-Busch, the biggest beer company in the world - owning more than 500 brands. 
                With a net that wide, they must have a lot of tech work, right? ...Yeah, you're absolutely 
                right.`,
                `I was hired on as a contractor in 2021 and eventually hired on full-time in 2022. I was 
                part of a small team expanding their web presence. We transitioned all of their top brand sites 
                - like Budweiser, Michelob Ultra, and Busch - over from Adobe Experience Manager or Drupal to a 
                Svelte/Builder.io environment.`,
                `During my time at the company, I've gotten the opportunity to take part in some pretty neat 
                projects and campaigns. I've set up merch stores on the brand sites using Shopify's API; 
                developed apps in collaboration with NFL, NHL, UFC, and other acronyms; and created brand 
                sites for newly aquired brands, such as Hoop Tea, Kona, and Los Sundays.`
            ],
            skillTags: [
                "E-Commerce",
                "CSS3",
                "RESTful API",
                "Node",
                "React",
                "Svelte",
                "SASS",
                "Shopify",
                "Github"
            ]
        },
        {
            company: "Second Street",
            title: "Front-End Developer",
            location: "St. Louis, MO.",
            time: "Nov. 2019 - Jan. 2021",
            description: [
                `Second Street is a interactive promotions company. They build apps to help companies engage and 
                grow their audience. You like voting for your favorite Office charactor? Setting up a tournament 
                pitting your favorite pizza restaurants against each other? How about testing your knowledge with 
                some geography quizzes? That's what we did, and it was rad.`,
                `This was my first full-time front-end developer position. I was hired in 2019 and dove right
                into learning Ember.js. I learned a lot in this position, and met a lot of talented people.`
            ],
            skillTags: [
                "HTML5",
                "Node",
                "Ember.js",
                "JavaScript",
                "RESTful API",
                "CSS3",
                "SASS",
                "Kanban",
                "UX/UI"
            ]
        },
        {
            company: "Air Force",
            title: "Web Master",
            location: "Scott Air Force Base, IL.",
            time: "May. 2011 - Oct. 2016",
            description: [
                `No, I didn't get to fly a plane. I did run the Scott Air Force Base website though! This was the job that
                started the passion. I wanted to give our visitors something interesting, so I learned HTML and CSS so I 
                could better learn how to design sites.`,
                `Soon after I started learning the stylistic building blocks of webites, I tried my hand at JavaScript.
                Not long after that, I was designing multiple components within our system, the American Forces Public Information 
                Management System. A year later, Scott AFB won the Air Force website of the year award.`,
                `I finished my term in the Air Force, and I used that time after that to learn more and more about web development.`
            ],
            skillTags: [
                "CSS3",
                "HTML5",
                "Bootstrap",
                "JavaScript",
                "jQuery",
                "CMS",
                "SASS",
                "UX/UI",
                "Communication"
            ]
        },
    ];

    const [selectedWork, setSelectedWork] = useState();

    function select(num) {

        if (num === selectedWork) {
            setSelectedWork();
        } else {
            setSelectedWork(num);
        }
    };

    return (
        <div className="workContainer">
            {work.map((w, i) => (
                <div 
                    className={selectedWork === i ? "work selected" : "work"}
                    onClick={(e) => select(i)}
                >
                    <div className="header">
                        <h3>{w.company}</h3>
                        <p>{w.title}</p>
                    </div>
                    <div className="workInfoContainer">
                        <div className="workTextContainer">
                            <div className="timeAndLocation">
                                <h3>{w.time}</h3>
                                <h3>{w.location}</h3>
                            </div>
                            <div className="jobDescription">
                                {w.description.map((d) => (
                                    <p>{d}</p>
                                ))}
                            </div>
                        </div>
                        <SkillsCarousel 
                            skills={w.skillTags}
                        />                          
                    </div>
                </div>
            ))}
        </div>
    );
}