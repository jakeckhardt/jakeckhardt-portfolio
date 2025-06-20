'use client';

import { useState, useEffect } from "react";
import styles from "./styles.module.scss"

export default function MastheadTitles() {

    const titles = [
        "web developer",
        "dad",
        "d&d enthusiast",
        "coffee drinker",
        "nerd",
        "fun guy",
        "Dungeon Master",
    ];

    const [moveup, setMoveup] = useState(false);
    const [titleList, setTitleList] = useState([
        {
            id: 0,
            title: "web developer",
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
        <div className={styles.mastheadTitles}>
            <div className={moveup ? [styles.titles, styles.up].join(" ") : styles.titles}>
                {titleList.map((t) => (
                    <p className={styles.titleText}>{t.title}</p>
                ))}
            </div>
        </div>
    );
}