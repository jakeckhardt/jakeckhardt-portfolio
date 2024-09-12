'use client';

import { useState, useEffect } from "react";

export default function MastheadTitles({}) {

    const titles = [
        "front-end dev",
        "dad",
        "d&d enthusiast",
        "coffee drinker",
        "nerd",
    ];

    const [moveup, setMoveup] = useState(false);
    const [titleList, setTitleList] = useState([
        {
            id: 0,
            title: "front-end dev",
        },
        {
            id: 1,
            title: "dad",
        },
    ]);

    function updateTitle() {
        setTimeout(() => {
            setMoveup(true);
            let newTitleList = titleList.slice(1);
    
            let lastId = newTitleList[0].id;
    
            newTitleList.push({
                id: lastId === titles.length - 1 ? 0 : lastId + 1,
                title: lastId === titles.length - 1 ? titles[0] : titles[lastId + 1],
            });
            setTimeout(() => {
                setTitleList(newTitleList);
                setMoveup(false);
            }, 200);
        }, 3000)
    }

    useEffect(() => {
        updateTitle();
    }, [titleList]);

    return (
        <div className="mastheadTitles">
            <div className={moveup ? "titles up" : "titles"}>
                {titleList.map((t, i) => (
                    <p>{t.title}</p>
                ))}
            </div>
        </div>
    );
}