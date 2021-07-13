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
                <title>Pre-harvest and hemp compliance - Cirta</title>

                <meta name="description" content="Pre-harvest and hemp compliance Testing" />

                <Scripts />
            </Head>

            <Header />

            <main className="main gmp__testing">
                <section>
                    <div className="section-title text-center pt-60 mb-60 wows fadeInUps animateds">
                        <h1>Pre-harvest & hemp compliance testing</h1>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <img src="/Legal_hemp.png" />
                            </div>
                            <div className="col-md-5 offset-md-1">
                                <p>
                                     The pre-harvest compliance testing for cannabis/ hemp is a test identifying plants legally as hemp under the language in the 2018 Farm Bill and anticipated requirements requiring pre-harvest testing hemp as less than 0.3% for total THC. Pre-harvest testing for determining cannabis as hemp must be done with-in 30 days prior to planned harvest for eligibility to perform harvest by law
                                    <br /><br />
                                    Globalize your hemp products to harness the competitive advantage of differing markets around the world with our hemp flower and hemp product compliance testing certification. Our certifiable hemp comliance testing is in conformity with the International Narcotics Control Board, governing the international trade of cannabis, for your hemp products to be certified for global import/export requirements
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
        title: 'Pre-harvest test',
        link: 'preharvest-test',
        description:`Pre-harvest compliance testing must be done by a state accredited 17025 laboratory to ensure crop is less than 0.3% total thc levels. We work with in our network of pre-screened state accredited labs to ensure lab legitimacy to qualify your crop as hemp `,
        icon: faPlusSquare,
        bg: ['/17025_badge.png'],
        read: 'Our in network labs use gas chromatography to determine total thc plant levels',
    }, {
        title: 'Hemp flower compliance test',
        link: 'hemp-flower-compliance',
        description:`
        ‣ Hemp plant total THC potency test for
        compliance DL =<0.3%
        ‣ Organisation: Association of Official Agricultural
        Chemists (International)
        ‣ Methodology: AFVAN-SLMF-0029
        ‣ Instrumentation: Gas Chromatography (GC)`,
        icon: faCertificate,
        bg: ['/gc_bg.jpg'],
        read: 'Utilizing the latest (GC) analytical tools we verify that your hemp flower/buds are below the GMP hemp technical manual required limit of less than 0.3% THC content ',
    }, {
        title: 'Hemp products compliance test',
        link: 'hemp-products-compliance',
        description:`
        ‣ Hemp products total THC potency test for
        compliance DL = 4ppm
        ‣ Organisation: Association of Official Agricultural
        Chemists (International)
        ‣ Methodology = AFVAN-SMF-0027
        ‣ Instrumentation = Gas Chromatography + Mass
        spectrometry`,
        icon: faPlusSquare,
        bg: ['/gc_bg.jpg', '/ms_logo.png'],
        read: 'Utilizing the latest (GC) in tangent with (MS) analytical tools we verify that your hemp product is below the GMP hemp technical manual required limit of no more than 4ppm in THC content ',
    }
]

export default Testing
