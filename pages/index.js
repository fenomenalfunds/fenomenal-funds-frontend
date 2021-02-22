import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return <div className={styles.homepage}>
    <Head>
      <title>Fenomenal Funds</title>
    </Head>
    <img src="/fenomenal-funds-logo.svg" alt="Fenomenal Funds Logo" />
  </div>
}
