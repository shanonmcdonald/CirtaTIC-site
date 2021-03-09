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
          <h1>All services and testing schemas</h1>
          <ul>
          <li> Reducing barriers to complex compliance regulations with our digitial compliance platform to monitor and manage testing services, security, product certification and beyond</li>
          <li> We ensure your testing services align with current good manufacturing practices requirements and expectations</li>
          <li> Our team's expertise helps you stay ahead of changing complex compliance regulations and accelerated market technologoy</li>
          <li> We verify your brand and provide you a competetive edge by comfirming claims, allowing you to better communicate with you clients</li>
          </ul>
          <section id="services">
            <div className="services-area grey-soft-bg pt-110 pb-95">
                <div className="container">
                    { /* <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <p>
                                We provide solutions through our testing, inspection and certification services we ensure to businesses, growers, processors, manufacturer, distributors and retailers with navigating legal compliance and opening barriers to global business opportunities.  Through our testing, inspection and certification services we ensure clients meet all legal requirements while maximizing quality assurance and minimizing risk.
                                <br /><br />
                                We comply with complex global compliance legislation in accordance with the FDA, EU GMP, Federal Regulations, state regulations, and Health Canada. We develop systems and quality assurance programs to provide an accelerated approach to incorporating (GMPs) good manufacturing practices to fit your specific business needs.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        {serviceElms}
                    </div> */ }
                </div>
            </div>
          </section>
        </main>

        <Footer />
    </div>
  )
}

export default Services
