'use client';

import { useState, useEffect } from "react";
import Cookies from 'universal-cookie';

const cookies = new Cookies(null, { path: '/' });

let darkCookie = cookies.get('dark');

if (darkCookie === undefined) {
  cookies.set("dark", false);
  darkCookie = cookies.get('dark');
};

export default function CookieContainer({children}) {

    let [show, setShow] = useState(false);
    let [dark, setDark] = useState(false);

    function toggleDark(e) {
        e.preventDefault();
        setDark(!dark);
        cookies.set('dark', !dark);
    };

    useEffect(() => {
        setDark(darkCookie);
        setShow(true);
    }, []);

    return (
        <>
            <div className="backgroundPattern"></div>
            {show ? (
                <div className={dark ? "container dark" : "container light"}>
                    {/* <button
                        onClick={(e) => toggleDark(e)}
                    >
                        DARK
                    </button> */}
                    {children}
                </div>
            ) : (
                ""
            )}
        </>
    );
}