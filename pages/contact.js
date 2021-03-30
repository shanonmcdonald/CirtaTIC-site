import Head from 'next/head'

import Header from '../components/index/header'
import Footer from '../components/footer'

export default function Contact () {
    return (
        <>
        <Head>
              <title>Contact - Cirta</title>
        </Head>

        <Header />

        <main className="main contact">
            <header>
                <div className="section-title text-center pt-60 mb-60 wows fadeInUps animateds">
                    <h1>Contact Page</h1>
                </div>
            </header>
        </main>

        <Footer />
        </>
    )
  }