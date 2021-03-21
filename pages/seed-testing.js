import Head from 'next/head'

import Header from '../components/index/header'
import Footer from '../components/footer'

const Testing = () => {
    return (
        <>
            <Head>
              <title>Seed Testing - Cirta</title>
            </Head>

            <Header />

            <main className="main">
                <h1>Seed Testing services</h1>

                <p> content</p>
                <h3> seed test 1 </h3>
                <p> content</p>
                <h3> seed test 2</h3>
                <p> content</p>
                <h3> seed test 2</h3>
                <p> content </p>
                <h3> seed test 3 </h3>
        </main>

            <Footer />
        </>
    )
}

export default Testing
