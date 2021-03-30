import React from "react"
import Head from 'next/head'
import Link from 'next/link'

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
          <div className="container">
            <div className="row">
              <div className="col">
                <h1 className="my-4">All services and testing schemas</h1>
                <p>
                  Reducing barriers to complex compliance regulations with our digitial compliance platform to monitor and manage testing services, security, product certification and beyond<br />
                  We ensure your testing services align with current good manufacturing practices requirements and expectations<br />
                  Our team's expertise helps you stay ahead of changing complex compliance regulations and accelerated market technology<br />
                  We verify your brand and provide you a competetive edge by comfirming claims, allowing you to better communicate with you clients
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <h3 className="my-4">
                  <Link href="/gmp-mandatory-testing">
                    <a className="c-btn service__title">GMP Mandatory Testing</a>
                  </Link>
                </h3>

                <div className="container-fluid">
                  <div className="row">
                    <div className="col">
                      <button className="service__btn">Microbiology screening</button>
                      <button className="service__btn">Pesticides screening</button>
                      <button className="service__btn">Hemp flower compliance test</button>
                    </div>
                    <div className="col">
                      <button className="service__btn">Aflatoxin</button>
                      <button className="service__btn">Hemp products compliance test</button>
                      <button className="service__btn">Total cannabis profile</button>
                    </div>
                    <div className="col">
                      <button className="service__btn">Heavy metals</button>
                      <button className="service__btn">Moisture content</button>
                    </div>
                  </div>
                </div>
                
                <h3 className="my-4"> 
                  <Link href="/soil-and-water-testing">
                   <a className="c-btn service__title">Soil and Water Testing</a>
                  </Link>
                </h3>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col">
                      <button className="service__btn service__btn--blue">Gold package for soil and water</button>
                      <button className="service__btn service__btn--blue">Silver package for soil and water</button>
                      <button className="service__btn service__btn--blue">Bronze package for soil and water</button>
                      <button className="service__btn service__btn--blue">Multi-elemental profile in (oils)</button>
                    </div>
                    <div className="col">
                      <button className="service__btn service__btn--blue">Micro-nutrient composite test</button>
                      <button className="service__btn service__btn--blue">Gold package plant/soil pesticides test</button>
                      <button className="service__btn service__btn--blue">Silver package plant/soil pesticide test</button>
                      <button className="service__btn service__btn--blue">PLant/soil heavy metal screening</button>
                    </div>
                    <div className="col">
                      <button className="service__btn service__btn--blue">Quaternary ammouium herbicides</button>
                      <button className="service__btn service__btn--blue">Radiation test</button>
                      <button className="service__btn service__btn--blue">Specialty testing services</button>
                    </div>
                  </div>
                </div>

                <h3 className="my-4">
                  <a className="c-btn service__title" href="/seed-testing">Seed Testing</a>
                </h3>

                
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-4">
                      <button className="service__btn service__btn--black">Coming soon</button>
                    </div>
                  </div>
                </div>

                </div>
            </div>
          </div>
          {/*<section id="services">
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
                    </div>
                </div>
            </div>
          </section> */}
        </main>

        <Footer />
    </div>
  )
}

export default Services
