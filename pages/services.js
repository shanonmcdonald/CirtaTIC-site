import React from "react"
import Head from 'next/head'
import Link from 'next/link'

import Header from '../components/index/header'
import Footer from '../components/footer'
import Scripts from '../components/headScripts'

const Services = () => {

  return (
    <div>
        <Head>
          <title>Services - Cirtatic</title>
          <meta name="description" content="GMP Cannabis Testing" />
          <Scripts />
        </Head>

        <Header />

        <main className="services">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1 className="my-5">All analytical testing services</h1>
                <p className="about-info">
                  🌱Welcome to our all-in-one suite of cannabis testing & certification services - from seed to soil/water to pre-harvest testing to full GMP cannabis mandatory release testing certification 🌱<br />

                </p>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <h3 className="my-5">
                  <Link href="/preharvest-and-compliance-testing">
                    <a className="c-btn service__title">Pre-harvest & Compliance Testing</a>
                  </Link>
                </h3>

                <div className="container-fluid">
                  <div className="row">
                    <div className="col">
                      <Link href="/preharvest-and-compliance-testing#preharvest-test"><button className="service__btn service__btn--green">Preharvest test</button></Link>
                    </div>
                    <div className="col">
                      <Link href="/preharvest-and-compliance-testing#hemp-flower-compliance"><button className="service__btn service__btn--green">Hemp flower compliance test</button></Link>
                    </div>
                    <div className="col">
                      <Link href="/preharvest-and-compliance-testing#hemp-products-compliance"><button className="service__btn service__btn--green">Hemp products compliance test</button></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <h3 className="my-5">
                  <Link href="/gmp-mandatory-testing">
                    <a className="c-btn service__title">GMP Mandatory Testing</a>
                  </Link>
                </h3>

                <div className="container-fluid">
                  <div className="row">
                    <div className="col">
                      <Link href="/gmp-mandatory-testing#microbiology-screening"><button className="service__btn">Microbiology screening</button></Link>
                      <Link href="/gmp-mandatory-testing#pesticides-screening"><button className="service__btn">Pesticides screening</button></Link>
                    </div>
                    <div className="col">
                      <Link href="/gmp-mandatory-testing#aflatoxin"><button className="service__btn">Aflatoxin</button></Link>
                      <Link href="/gmp-mandatory-testing#total-cannabis-cannabinoid-profile"><button className="service__btn">Total cannabis profile</button></Link>
                    </div>
                    <div className="col">
                      <Link href="/gmp-mandatory-testing#heavy-metals"><button className="service__btn">Heavy metals</button></Link>
                      <Link href="/gmp-mandatory-testing#moisture-content"><button className="service__btn">Moisture content</button></Link>
                    </div>
                  </div>
                </div>

                <h3 className="my-5">
                  <Link href="/soil-and-water-testing">
                   <a className="c-btn service__title">Soil and Water Testing</a>
                  </Link>
                </h3>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col">
                      <Link href="/soil-and-water-testing#gold-profile-package-for-soil-and-water-tests"><button className="service__btn service__btn--blue">Gold package for soil and water</button></Link>
                      <Link href="/soil-and-water-testing#silver-profile-package-for-soil-and-water-tests"><button className="service__btn service__btn--blue">Silver package for soil and water</button></Link>
                      <Link href="/soil-and-water-testing#bronze-profile-package-for-soil-and-water-tests"><button className="service__btn service__btn--blue">Bronze package for soil and water</button></Link>
                      <Link href="/soil-and-water-testing#multi-elemental-profile-in-oils"><button className="service__btn service__btn--blue">Multi-elemental profile in (oils)</button></Link>
                    </div>
                    <div className="col">
                      <Link href="/soil-and-water-testing#micro-nutrient-composite-tests"><button className="service__btn service__btn--blue">Micro-nutrient composite test</button></Link>
                      <Link href="/soil-and-water-testing#gold-package-plant-soil-pesticides-testing"><button className="service__btn service__btn--blue">Gold package plant/soil pesticides test</button></Link>
                      <Link href="/soil-and-water-testing#silver-package-plant-soil-pesticide-testing"><button className="service__btn service__btn--blue">Silver package plant/soil pesticide test</button></Link>
                      <Link href="/soil-and-water-testing#plant-soil-heavy-metal-screening"><button className="service__btn service__btn--blue">PLant/soil heavy metal screening</button></Link>
                    </div>
                    <div className="col">
                      <Link href="/soil-and-water-testing#quaternary-ammouium-herbicides"><button className="service__btn service__btn--blue">Quaternary ammouium herbicides</button></Link>
                      <Link href="/soil-and-water-testing#radiation-test"><button className="service__btn service__btn--blue">Radiation test</button></Link>
                      <Link href="/soil-and-water-testing#specialty-testing-services"><button className="service__btn service__btn--blue">Specialty testing services</button></Link>
                    </div>
                  </div>
                </div>

                <h3 className="my-5">
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
        </main>

        <Footer />
    </div>
  )
}

export default Services
