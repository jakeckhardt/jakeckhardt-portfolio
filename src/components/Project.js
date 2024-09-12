'use client';

import {useState, useEffect} from "react";

export default function Project({project, num, click}) {

    return (
        <div 
            className="project"
            onClick={(e) => click(num)}
        >
            <img src={project.image} />
        </div>
    );
}