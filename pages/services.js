import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <div>
        <Head>
            <title>Services - Cirtatic</title>
        </Head>
        
        <main className={styles.container}>
            <header>
                <h1 className={styles.title}>Services</h1>
            </header>
        </main>
    </div>
  )
}