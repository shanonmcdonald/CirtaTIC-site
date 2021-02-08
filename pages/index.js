import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import Header from '../components/index/header'
import About from '../components/index/focus'
import Focus from '../components/index/about'
import Services from '../components/index/services'
import Whychooseus from '../components/index/Why-choose-us'

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Head>
          <title>CIRTATIC - Cannabis Testing, Inspection and Certification</title>
        </Head>

        <main className={styles.main}>
          <section className={styles.hero}>
            <div class="container">
              <div class="row">
                <div className="col col-xl-10 offset-xl-2">
                  <div className="hero-slider-caption">
                    <h1 data-animation="fadeInUps" data-delay=".3s">Cirta</h1>
                    <span data-animation="fadeInUps" data-delay=".4s">&nbsp;Cannabis Testing, Inspection and Certification</span>
                  </div>
                  <div className="slider-button" data-animation="fadeInUps" data-delay=".5s">
                    <a className="c-btn" href="#contact">contact me</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-tag">
              <div className="container">
                <div className="hero-tag-text">
                  <p>Some text here</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <About />
            <Focus />
            <Services />
            <Whychooseus />
          </section>
        </main>
      </div>
    </>
    /* <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div> */
  )
}
