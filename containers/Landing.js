import React from 'react'
import styles from "../styles/Home.module.css";
import Image from "next/image";
import data from "./data.json"
import Table from "../components/Table"
import { Search } from '../components/Search';

export const Landing = () => {
    return (
        <div>
            <h1 className={`${styles.title}`}>
                Spotify Artists Searcher
                <span className={styles.logo} style={{marginLeft:"2rem"}}>
            <Image src="/spotify.svg" alt="Spotify Logo"  width={72} height={72} />
          </span>
            </h1>
            <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
                <Search />
                </div>
        <div className={styles.grid}>
        <Table data={data} />
        </div>
        </div>
    )
}
