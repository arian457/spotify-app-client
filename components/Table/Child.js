import React from "react";
import styles from "./table.module.css";
import data from "./data.json";

export const Child = ({ id }) => {
  return (
    <div className={`${styles.tableChild} ${styles.surveyContainerSurveyListAnimate}`}>
      {data?.map((d) => (
        <div
         
          style={{
            background: `url(${d.image})`,
            backgroundPosition: "center",
                  backgroundSize: "cover",
            width:"100%"
          }}
        ><div  className={styles.tableChildRow}>
          <img src={d.image} />
          <label className={styles.albumName}> {d.name} </label>
                  <ul>{"▼"}</ul>
         </div>
        </div>
      ))}
    </div>
  );
};
