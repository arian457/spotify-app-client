import React, { useContext, useEffect, useState } from "react";
import styles from "./table.module.css";
import { getService } from "../../services";
import axios from "axios";
import AppContext from "../../AppContext";
import { Bars } from "../Spinner/Bars";

export const Child = ({ albums, setAlbums, id }) => {
  const [loading, setLoading] = useState(false);
  const  value  = useContext(AppContext)
  const { user } = value.state 
  useEffect(() => {
    if (!albums[0]) {
      setLoading(true);
      async function fetchPublicIP() {
        const publicIp = await axios.get("https://geolocation-db.com/json/");
        const request = await getService(`/spotify/albums/${id}`, {
          ip_address: publicIp.data.IPv4,
          UserId:user.id ?? ""
        });
        setAlbums(request.data);
        setLoading(false);
      }
      fetchPublicIP()

    }
  }, [albums, setAlbums, id]);
  return (
    <div
      className={`${styles.tableChild} ${styles.surveyContainerSurveyListAnimate}`}
    >
      {loading ? (
        <Bars />
      ) : (
        albums?.map((album) => (
          <div
            key={album.id}
            style={{
              background: `url(${album.image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundPositionY: "-18rem",
              width: "100%",
              borderRadius: "0.5rem",
            }}
          >
            <div
              className={styles.divContent}
              style={{
                width: "100%",
              }}
            >
              <img src={album.image} />
              <label className={styles.albumName}> {album.name} </label>
              <ul className={styles.arrow}>{"▼"}</ul>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
