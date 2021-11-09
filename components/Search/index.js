import React, { useContext } from "react";
import AppContext from "../../AppContext";
import { getService } from "../../services";
import styles from "./search.module.css";

export const Search = () => {
  const value = useContext(AppContext);
  const { setLoading, setArtists } = value;
  const handleChange = async (e) => {
    setLoading(true);
    if (e.target.value) {
      const request = await getService("/spotify/artist", {
        artist_name: e.target.value,
      });
      setArtists(request.data);
    } else setArtists([]);
    setLoading(false);
  };
  return (
    <div className={styles.searchContainer}>
      <h1>Find your favorites Artist!</h1>
      <input onChange={(e) => handleChange(e)} type="text" />
    </div>
  );
};
