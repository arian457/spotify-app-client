import React, { useContext, useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Table from "../components/Table";
import { Search } from "../components/Search";
import AppContext from "../AppContext";
import { Spinner } from "../components/Spinner/Spotify";
import { Forms } from "../components/Forms";

export const Landing = () => {
  const [props, setProps] = useState(false);
  const value = useContext(AppContext);
  const { loading, artists } = value.state;
  useEffect(() => {
    if (artists[0]) setProps(true);
    else setProps(false);
  }, [artists]);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Forms />
      <div className={!props ? "" : "flex-row"}>
      <span className={`${styles.title} container-green`}>
        Spotify Searcher
        <span className={styles.logo} style={{ marginLeft: "2rem" }}>
          <Image src="/spotify.svg" alt="Spotify Logo" width={66} height={66} />
        </span>
      </span>
      <div style={{ height:"max-content", width: "100%", display: "flex", justifyContent: "center"}}>
        <Search />
        </div>
        </div>
      <div className={props ? `${styles.grid} container-green` : "container-collapsed"}>
        {!loading ? <Table data={artists} /> : <Spinner />}
      </div>
    </div>
  );
};
