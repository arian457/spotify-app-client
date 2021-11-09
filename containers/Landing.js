import React, { useContext, useEffect, useState }  from 'react'
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Table from "../components/Table"
import { Search } from '../components/Search';
import AppContext from "../AppContext";
import { Spinner } from '../components/Spinner/Spotify';

export const Landing = () => {
    const value = useContext(AppContext);
    const { loading, artists } = value.state
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
        {!loading ? <Table data={artists}  /> : <Spinner />}
        </div>
        </div>
    )
}
