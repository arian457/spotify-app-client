import Head from "next/head";
import styles from "../../styles/Home.module.css";

import { Landing } from "../containers/Landing";
import { LandingBottom } from "../containers/LandingBottom";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Spotify Searcher</title>
        <meta
          name="spotify api"
          content="spotify artist albums searcher and reproducer"
        />
        <link rel="icon" href="/spotify.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>

      <main className={styles.main}>
        <Landing />
        <LandingBottom />
      </main>
      <footer className={styles.footer}>Powered by Arian Cejas</footer>
    </div>
  );
}
