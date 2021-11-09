import { useState } from "react";
import AppContext from "../AppContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const [artists, setArtists] = useState([])

  return (
    <AppContext.Provider
      value={{
        state: {
          loading: loading,
          artists: artists,
          
        },
        setLoading: setLoading,
        setArtists: setArtists
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
