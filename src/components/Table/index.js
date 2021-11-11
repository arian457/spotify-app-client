import React from "react";
import { Parent } from "./Parent";
import styles from "./table.module.css"

const Table = ({ data }) => {
 
  return (
    <div className={styles.tableContainer}>
      {data[0] ? data?.map((p) =>  <Parent key={p.id} props={p} />) : <p className="container-green">Search something!</p>}
      
    </div>
  );
};

export default Table;
