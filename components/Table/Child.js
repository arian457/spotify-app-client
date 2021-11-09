import React, { useEffect, useState } from "react";
import styles from "./table.module.css";
import { getService } from "../../services";
import axios from "axios";

import { Rounded } from "../Spinner/Rounded";

export const Child = ({albums, setAlbums, id }) => {
  const [loading, setLoading] = useState(false)
  
  useEffect(async () => {
    if (albums.length === 0) {
      setLoading(true)
      const publicIp = await axios.get("https://geolocation-db.com/json/");
      const request = await getService(`/spotify/albums/${id}`, {
        ip_address: publicIp.data.IPv4,
      });
      setAlbums(request.data);
      setLoading(false)
    }
  }, [albums]);
  return (
    <div
      className={`${styles.tableChild} ${styles.surveyContainerSurveyListAnimate}`}
    >
      {loading ? <Rounded/> : albums?.map((album) => (
        <div   style={{
          background: `url(${album.image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%",
          borderRadius:"0.5rem"
          }}>
           <div className={styles.divContent} style={{
          width: "100%",
          }}>
            <img src={album.image} />
            <label className={styles.albumName}> {album.name} </label>
            <ul className={styles.arrow}>{"▼"}</ul>
            </div>
          </div>
       
      ))}
    </div>
  );
};
