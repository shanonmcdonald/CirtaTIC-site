import Head from 'next/head'

import Header from '../components/index/header'
import Footer from '../components/footer'

const Testing = () => {
    return (
        <>
            <Head>
              <title>Soil and Water Testing - Cirta</title>
            </Head>

            <Header />

            <main className="main">
                <h1>Soil and Water Testing services</h1>

                <p>Content goes here</p>
            </main>

            <Footer />
        </>
    )
}

export default Testing