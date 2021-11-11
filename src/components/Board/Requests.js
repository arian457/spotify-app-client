import React from 'react'
import styles from "./board.module.css";
import moment from "moment";

export const Requests = ({requests}) => {
    return (
        <div>
           { requests.map((req) => (
          <div
            key={req.id}
            className={`${styles.drawerItem} container-green`}
          >
               <div className="flex-row" style={{ justifyContent: "space-between", margin: "0.5rem" }}>
               <b style={{color:"#FAFAFA"}}>{!req.UserId ? <i style={{color:"#868585e1"}}>Anonymous</i> : req.User.userName} </b>
                 <label>
                   
                <b>IP</b> {req.ip_address}{" "}
              </label>
              <b style={{color:"#ff8400"}}>{req.artist_name}   </b>
              <i>{moment(req.createdAt).startOf().fromNow()}</i>
              </div>
            <div
              style={{ justifyContent: "space-around", marginTop:"0.5rem" }}
              className="flex-row"
            >
              
              
            </div>
          </div>))}
        </div>
    )
}
