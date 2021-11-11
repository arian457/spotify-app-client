
import React, { useEffect, useState } from "react";
import { Bars } from "../Spinner/Bars";
import styles from "./board.module.css";
import { Requests } from "./Requests";
export const Board = ({ requests }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!requests) {
      setLoading(true);
    } else setLoading(false);
  }, [requests]);
  return (
    <div className={`${styles.drawer} container-green`}>
      <div className="flex-row">
        <h1>Requests record </h1>{" "}
        <button style={{cursor:"pointer"}} onClick={() => setOpen(!open)}> {"˅"} </button>
      </div>
      {!loading ? (
        <div style={{ display: open ? "block" : "none"}}>
        <Requests requests={requests} />
     </div>
      ) : (
        <Bars />
      )}
    </div>
  );
};
