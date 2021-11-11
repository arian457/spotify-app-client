import { useEffect, useState } from "react";
import AppContext from "../AppContext";
import "../../styles/globals.css";
import { postService } from "../services";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const [artists, setArtists] = useState([]);
  const [user, setUser] = useState({
    token: "",
    dataUser: {},
  });
  const [search, setSearch] = useState("")
  useEffect(() => {
    const token = localStorage.getItem("token_id");
     token === "undefined" && localStorage.removeItem("token_id")
    if (token) {
      async function setToken() {
        const { data } = await postService("/auth/me", "", token);
        setUser({ token: token, dataUser: data.userInfo });
      }
      setToken();
    }
  }, []);
  return (
    <AppContext.Provider
      value={{
        state: {
          loading: loading,
          artists: artists,
          user: user.dataUser,
          token: user.token,
          search:search
        },
        setLoading: setLoading,
        setArtists: setArtists,
        setUser: setUser,
        setSearch:setSearch
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
