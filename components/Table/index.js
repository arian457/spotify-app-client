import React from "react";
import { Parent } from "./Parent";


const Table = ({ data }) => {
  
  return (
    <div style={{ width: "90%" }}>
      {data?.map(p => <Parent props={p}/>)}
    </div>
  );
};

export default Table;
