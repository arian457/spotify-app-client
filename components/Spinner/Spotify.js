import React, { useEffect, useState } from 'react'
import lottie from "lottie-web/build/player/lottie_light";
import spotifyAnimation from "../../public/spotify.json";

export const Spinner = () => {
    const [animation, setAnimation] = useState(false);
  useEffect(() => {
    if (!animation) {
      lottie.loadAnimation({
        container: document.querySelector("#spotify-logo"),
        animationData: spotifyAnimation,
      });
      setAnimation(!animation);
    }
  }, []);
    return (
        <div id="spotify-logo" style={{width:"200px"}} />
    )
}
