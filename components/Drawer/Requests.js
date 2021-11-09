import React, { useEffect, useState } from 'react'
import { Rounded } from '../Spinner/Rounded'
import styles from "./drawer.module.css"
export const Requests = ({ requests }) => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        if (!requests) {
          setLoading(true)
      }else setLoading(false)
    },[requests])
    return (
        <div className={styles.drawer}>
        {!loading ? requests.map((req) => (
          <div className={styles.drawerItem}> 
                <h6>{req.artist_name} </h6>
                <label>{req.ip_address} </label>
                <span>{!req.UserId ? "anónimo" : req.UserId} </span>
          </div>
      )) : <Rounded/>}
        </div>
    )
}
