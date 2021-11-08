import React, { useState } from 'react'
import styles from "./table.module.css";
import { Child } from "./Child";
export const Parent = ({props }) => {
    const [buttonBar, setButtonBar] = useState(false);
    return (
        <div> 
        <div className={styles.tableItem}>
          <div className={styles.tableParent}>
            <a
              href={props.external_urls.spotify}
              style={{ alignSelf: "left" }}
              target="_blank"
            >
              <img src={props.images[0].url} className={styles.avatar} />
            </a>
            <h1 className={styles.artistName}> {props.name}</h1>
            <ul className={buttonBar && styles.open} onClick={() => setButtonBar(!buttonBar)}>{"▼"}</ul>
          </div>
          {buttonBar && <Child/>}
        </div>
        </div>
    )
}
