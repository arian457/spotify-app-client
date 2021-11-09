import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { Landing } from "../containers/Landing";
import { LandingBottom, Requests } from "../containers/LandingBottom";


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
      </Head>

      <main className={styles.main}>
        <Landing />
        <LandingBottom/>
      </main>
      <footer className={styles.footer}>
        Powered by{" "}
        <span className={styles.logo}>
          Arian Cejas
        </span>
      </footer>
    </div>
  );
}
