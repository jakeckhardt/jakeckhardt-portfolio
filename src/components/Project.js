'use client';

export default function Project({project, num, click}) {

    return (
        <div 
            className="project"
            onClick={() => click(num)}
        >
            <img src={project.image} />
        </div>
    );
}