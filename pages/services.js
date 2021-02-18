import Head from 'next/head'

import Header from '../components/index/header'
import Footer from '../components/footer'

export default function Services () {
  return (
    <div>
        <Head>
          <title>Services - Cirtatic</title>
        </Head>

        <Header />
        
        <main className="services">
          <h1>Services</h1>
        </main>

        <Footer />
    </div>
  )
}