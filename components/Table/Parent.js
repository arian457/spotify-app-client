import React, { useState } from "react";
import styles from "./table.module.css";
import { Child } from "./Child";

export const Parent = ({ props }) => {
  const [buttonBar, setButtonBar] = useState(false);
  const [albums, setAlbums] = useState([]);
  const handleClick = e => {

  }
  return (
    <div >
      <div
        style={{
          background: `url(${props?.images[0]?.url})`,
          backgroundPosition: "center",
          backgroundSize: !buttonBar ? "cover" : "contain",
          backdropFilter: "blur(8px)",
        }}
        className={styles.tableItem}
      >
        <div className={styles.tableParent}>
          <a
            href={props.external_urls.spotify}
            style={{ alignSelf: "left" }}
            target="_blank"
          >
            <img src={props?.images[0]?.url} className={styles.avatar} />
          </a>
          <h1 className={styles.artistName}> {props.name}</h1>
          <ul
            className={styles.arrow}
            onClick={() => setButtonBar(!buttonBar)}
          >
            {"▼"}
          </ul>
        </div>
        {buttonBar && <Child albums={albums} setAlbums={setAlbums} id={props.id} />}
      </div>
    </div>
  );
};
