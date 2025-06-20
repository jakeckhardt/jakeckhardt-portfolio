'use client';

import styles from "./styles.module.scss"

import { ReactNode } from "react";

export default function CookieContainer({ children }: { children: ReactNode }) {

    return (
        <div className={styles.container}>
            {children}
        </div>
    );
}