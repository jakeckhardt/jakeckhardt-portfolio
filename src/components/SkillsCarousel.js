'use client';

import { useState, useEffect } from "react";

export default function SkillsCarousel({skills}) {

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
        
        window.addEventListener("resize", (e) => {
            adjustSize();
        });
    }, []);

    return (
        <div className="skillsContainer">
            <div 
                className="skills"
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
                className="skills"
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