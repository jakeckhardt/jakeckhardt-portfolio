'use client';

import { useState, useEffect } from "react";
import styles from "./styles.module.scss";

export default function SkillsCarousel({skills, modal=false}: {skills: string[], modal?: boolean}) {

    const [skillSize, setSkillSize] = useState(150);
    const [width, setWidth] = useState(skills.length * 150);

    function adjustSize() {
        if (screen.width < 768) {
            setSkillSize(100);
            setWidth(skills.length * 100);
        } else {
            setSkillSize(150);
            setWidth(skills.length * 150);
        }
    };

    useEffect(() => {
        adjustSize();  
        
        window.addEventListener("resize", () => {
            adjustSize();
        });
    }, []);

    return (
        <div className={!modal ? styles.skillsContainer : [styles.skillsContainer, styles.modalSkillsContainer].join(" ")}>
            <div 
                className={styles.skills}
                style={{width: width}}
            >
                {skills.map((s) => (
                    <h3
                        style={{width: skillSize}}
                    >
                        {s}
                    </h3>
                ))}
            </div>
            <div 
                className={styles.skills}
                style={{
                    width: width,
                    left: width
                }}
            >
                {skills.map((s) => (
                    <h3
                        style={{width: skillSize}}
                    >
                        {s}
                    </h3>
                ))}
            </div>
        </div>
    );
}