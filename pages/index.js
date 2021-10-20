import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ASKY DEMO APPLICATION</title>
        <meta name="description" content="Created by Pikai.io with NEXT.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the ASKY Demo application
        </h1>
      </main>
    </div>
  )
}
