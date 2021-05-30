import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>they call me wolf | home</title>
        <meta
          name="description"
          content="They call me wolf is the web portfolio of Bruno Lobato, a designer since 2001 that felt in love with coding around 2016."
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href=".">Hello, Wolf!</a>
        </h1>
      </main>
    </div>
  );
}
