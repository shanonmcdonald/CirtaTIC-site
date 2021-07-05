import React, { useState } from 'react'
import Head from 'next/head'

import Header from '../components/index/header'
import Footer from '../components/footer'
import Scripts from '../components/headScripts'

import { faCertificate, faPlusSquare } from '@fortawesome/free-solid-svg-icons'


const Testing = () => {
    return (
        <>
            <Head>
                <title>Preharvest and Compliance - Cirta</title>

                <meta name="description" content="Preharvest and Compliance Testing" />

                <Scripts />
            </Head>

            <Header />

            <main className="main gmp__testing">
                <section>
                    <div className="section-title text-center pt-60 mb-60 wows fadeInUps animateds">
                        <h1>Preharvest & Compliance Testing</h1>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <img src="/service_bg.jpg" />
                            </div>
                            <div className="col-md-5 offset-md-1">
                                <p>
                                    Preharvest and compliance test description paragraph
                                    <br /><br />
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    { testingServices.map(service => <ServiceElement service={service} key={service.title} />) }
                </section>
            </main>

            <Footer />
            </>
    )
}

function ServiceElement ({ service }) {
    const [isOpen, setIsOpen] = useState(false)

    function handleSetIsOpen (e) {
        e.preventDefault()
        setIsOpen(true)
    }

    return (
        <div className="container mx60">
            <div className="row">
                <div className="col">
                    <h3 style={{'margin': '50px 0'}} key={service.link} id={service.link}>{service.title}</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5 offset-md-1">
                    <p className="service--description">{service.description}</p>
                    <div className="lb-btn mt-35">
                        { !isOpen && <a className="service__readmore" href="#" onClick={handleSetIsOpen} title="Click to read more">Read More</a> }
                    </div>
                </div>
                <div className="col-md-6 text-center">
                    <div className="row">
                        {service.bg.map(b => {
                            return (
                                <div className="col" key={b}>
                                    <img src={b} className="service__img" />
                                </div>
                            )}
                        )}
                    </div>
                </div>
            </div>
            <div className="row">
                { isOpen && <div className="col-md-5 offset-md-1">
                    <p className="service--description">{service.read}</p>
                </div> }
            </div>
        </div>
    )
}

const testingServices = [
    {
        title: 'Preharvest test',
        link: 'preharvest-test',
        description:`Preharvest test description`,
        icon: faPlusSquare,
        bg: ['/ms_logo.png'],
        read: 'dummy description description',
    }, {
        title: 'Hemp flower compliance test',
        link: 'hemp-flower-compliance',
        description:`
        Hemp plant total THC potency test for compliance DL =<
        0.3%
        Organisation: Association of Official Agricultural Chemists
        (International)
        Methodology: AFVAN-SLMF-0029
        Instrumentation: Gas Chromatography (GC)`,
        icon: faCertificate,
        bg: ['/gc_bg.jpg'],
        read: 'Utilizing the latest (GC) analytical tools we verify that your hemp flower/buds are below the GMP hemp technical manual required limit of less than 0.3% THC content ',
    }, {
        title: 'Hemp products compliance test',
        link: 'hemp-products-compliance',
        description:`
        Hemp products total THC potency test for compliance DL =
        4ppm
        Organisation: Association of Official Agricultural Chemists
        (International)
        Methodology = AFVAN-SMF-0027
        Instrumentation = Gas Chromatography + Mass spectrometry`,
        icon: faPlusSquare,
        bg: ['/gc_bg.jpg', '/ms_logo.png'],
        read: 'Utilizing the latest (GC) in tangent with (MS) analytical tools we verify that your hemp product is below the GMP hemp technical manual required limit of no more than 4ppm in THC content ',
    }
]

export default Testing