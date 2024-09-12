'use client'

import { useState, useEffect } from "react";

export default function MobileNav({}) {

    const [open, setOpen] = useState(false);

    function openNav() {
        setOpen(!open);
    };

    return (
        <div className="navContainer">
            <div className="nav">
              <a href="#work">
                work
              </a>
              <a href="#projects">
                projects
              </a>
              <a href="#contact">
                contact
              </a>
            </div>
            <div className="mobileNav">
                <div 
                    className="burger"
                    onClick={openNav}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
                </div>
                <div className={open ? "navContainer open" : "navContainer"}>
                    <div className="mobileHeader">
                        <h3>Jake Eckhardt</h3>
                        <p>front-end dev</p>
                    </div>
                    <div className="links">
                        <a href="#work">
                            work
                        </a>
                        <a href="#projects">
                            projects
                        </a>
                        <a href="#contact">
                            contact
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}