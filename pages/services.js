import Head from 'next/head'

import Header from '../components/index/header'
import Footer from '../components/footer'

const Services = () => {
  return (
    <div>
        <Head>
          <title>Services - Cirtatic</title>
        </Head>

        <Header />
        
        <main className="services">
          <h1>Services Page</h1>
        </main>

        <Footer />
    </div>
  )
}

export default Services