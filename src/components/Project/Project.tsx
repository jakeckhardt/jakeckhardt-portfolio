'use client';

import styles from "./styles.module.scss";

interface ProjectProps {
    image: string;
    title: string;
    link: string;
    description: string[];
    skillTags: string[];
}

export default function Project({
    project, 
    num, 
    click
} : {
    project: ProjectProps;
    num: number;
    click: (num: number) => void;
}) {

    return (
        <div 
            className={styles.project}
            onClick={() => click(num)}
        >
            <img src={project.image} />
        </div>
    );
}