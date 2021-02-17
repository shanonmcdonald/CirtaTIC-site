import Head from 'next/head'

import Header from 'components/index/header'
import Footer from 'components/footer'

export default function Service () {

  return (
    <div>
        <Head>
          <title>Aflatoxin - Services | Cirtatic</title>
        </Head>

        <Header />
        
        <main className="services">
          <h1>Aflatoxin</h1>
        </main>

        <Footer />
    </div>
  )
}