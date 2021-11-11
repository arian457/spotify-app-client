import React, { useContext } from "react";
import AppContext from "../../AppContext";
import { getService } from "../../services";
import styles from "./search.module.css";

export const Search = () => {
  const value = useContext(AppContext);
  const { setLoading, setArtists, setSearch } = value;
  const handleChange = async (e) => {
    const {value} = e.target
    setLoading(true);
    if (value) {
      setSearch(value)
      const request = await getService("/spotify/artist", {
        artist_name: value,
      });
      setArtists(request.data);
    } else {
      setArtists([]);
      setSearch("")
    }
    setLoading(false);
  };
  return (
    <div className={`${styles.searchContainer} container-green`}>
      <input onChange={(e) => handleChange(e)} type="text" />
    </div>
  );
};
