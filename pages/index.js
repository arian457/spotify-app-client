import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import lottie from "lottie-web/build/player/lottie_light";
import spotifyAnimation from "../public/spotify.json";
import { useEffect, useState } from "react";
import { Landing } from "../containers/Landing";

export default function Home() {
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
    <div className={styles.container}>
      <Head>
        <title>Spotify Searcher</title>
        <meta
          name="spotify api"
          content="spotify artist albums searcher and reproducer"
        />
        <link rel="icon" href="/spotify.svg" />
      </Head>

      <main className={styles.main}>
        <Landing />
      </main>

      <footer className={styles.footer}>
        Powered by{" "}
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </footer>
    </div>
  );
}
