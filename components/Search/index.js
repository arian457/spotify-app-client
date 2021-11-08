import React from 'react'
import styles from "./search.module.css";

export const Search = () => {
    return (
        <div className={styles.searchContainer}>
            <h1>Find your favorites Artist!</h1>
            <input type="text" />
        </div>
    )
}
