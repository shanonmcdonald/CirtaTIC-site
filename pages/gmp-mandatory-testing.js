import React, { useState } from 'react'
import Head from 'next/head'

import Header from '../components/index/header'
import Footer from '../components/footer'
import { faBug, faCertificate, faFlask, faTimes, faExclamationTriangle, faPlusSquare } from '@fortawesome/free-solid-svg-icons'

const testingServices = [
    {
        title: 'Microbiology Screening',
        link: 'microbiology-screening',
        description:`
        Full panel microbiology screening
        Organization: United States Pharmacopeia
        Methodology: <USP> chapter 2021-2022-(62)
        Total yeast = <USP> ch. 2021
        Total aerobic plate count = <USP> ch. 2021
        E. coli = <USP> ch. 2022
        Salmonella spp. = <USP> ch. 2022
        Enterbacterial count = <USP> ch. 2021
        S. aureus = <USP> ch. 2022`,
        read: 'GMP monitors certain microbes such as E. coli and Salmonella to be dangerous pathogens in cannabis flower, extracts and in a variety of infused products. Our GMP lab facility utilizes a GMP guidlined micro suitability pour plate method to detect unique DNA sequences of the harmful pathogens ',
        icon: faBug,
        bg: ['/microbiology_bg.jpg']
    }, {
        title: 'Pesticides Screening',
        link: 'pesticides-screening',
        //description: '96 pesticides as per cannabis list with limits',
        description:`
        Pesticides test of (96 pesticides)
        Organisation: Food and Drug Administration
        Methodology:(LC/MS/MS and GC/MS/MS)-GMP cannabis
        mandatory release cannabis
        pesticides limits list`,
        icon: faTimes,
        bg: ['/pesticide_bg.jpg'],
        read: 'GMP internationally regulates the complex matrix of cannabis pesticides limits. We achieve this GMP standard by utilizing a certified dual platform method using a triple quadrupole mass spectrometry coupled to both liquid and gas chromatography ensuring cannabis products are compliant to GMP limits and are safe to public health and consumers.',
    }, {
        title: 'Hemp flower compliance test',
        link: 'hemp-flower-potency',
        //description: 'Test for compliance DL=< 0.3%',
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
        title: 'Aflatoxin',
        link: 'aflatoxin',
        //description: 'B1, B2, G1, G2',
        description:`
        Aflatoxin screening for (B1) (B2) (G1) (G2)
        Organisation: Association of Official Agricultural Chemists
        (International)
        Methodology: AFVAN-SLMF-0030
        Instrumentation: Liquid Chromatography + Mass
        spectrometry`,
        icon: faExclamationTriangle,
        bg: ['/lc_bg.jpg', '/ms_logo.png'],
        read: 'Aflaxtoxins are a type of mycotoxins which acts as potent carcinogens and even a small doses of exposure can be life threatening. We detect aflatoxins using GMP methologies and limits utilizing a complex combination of liquid chromatography with mass spectrometry to accurately detect amounts down to the parts per billion ',
    }, {
        title: 'Hemp products compliance test',
        link: 'hemp-products-test',
        //description: 'Total THC potency test DL =< 4ppm',
        description:`
        Hemp products total THC potency test for compliance DL =
        4ppm
        Organisation: Association of Official Agricultural Chemists
        (International)
        Methodology = AFVAN-SMF-0027
        Instrumentation = Gas Chromatography + Mass
        spectrometry
        `,
        icon: faPlusSquare,
        bg: ['/gc_bg.jpg', '/ms_logo.png'],
        read: 'Utilizing the latest (GC) in tangent with (MS) analytical tools we verify that your hemp product is below the GMP hemp technical manual required limit of no more than 4ppm in THC content ',
    }, {
        title: 'Total Cannabis Cannabinoid Profile',
        link: 'total-cannabis-cannabinoid-profile',
        //description: 'THC (delta 8, 9) OH-THC,CBD, CBL, CBC, CBCA, CBDV, CBDVA, CBG, CBGA, CBN, CBNA, THCA-A, THCV, THCVA',
        description:`
        Cannabinoid profile of:
        🔬tetrahydrocannabinol (THC delta-8-&-9)
        🔬11-hydroxy-tetrahydrocannabinol(OH-THC)
        🔬cannabidiol(CBD)
        🔬cannabigerol(CBG)
        🔬cannabinol(CBN)
        🔬cannabicyclol(CBL)
        🔬cannabichromene(CBC)
        🔬cannabichromenic acid(CBCA)
        🔬cannabidiolic acid(CBDA)
        🔬cannabidivarin(CBDV)
        🔬cannabidivarinic acid(CBDVA)
        🔬cannabigerolic acid(CBGA)
        🔬cannabinol acid(CBNA)
        🔬tetrahydrocannabinolic acid(THCA-A)
        🔬tetrahydrocannabivarin(THCV)
        🔬tetrahydrocannabivarin acid(THCVA)
        Organisation: SGS
        Methodology: SGS proprietary method
        Instrumentation: Ultra-performance Liquid Chromatography
        `,
        bg: ['/canna-anal_bg.jpg','/cannaresults_logo.png'],
        read: 'There are more than 60 cannabinoids compounds unique to the cannabis plant. We use an in house SGS proprietary (UPLC) method to chemically seperate, identify and quantify each cannabinoid compenent with in the sample mixture ',
    },
    {
        title: 'Heavy metals',
        link: 'heavy-metals',
        //description: 'THC (delta 8, 9) OH-THC,CBD, CBL, CBC, CBCA, CBDV, CBDVA, CBG, CBGA, CBN, CBNA, THCA-A, THCV, THCVA',
        description:`
        Heavy metals testing for Mercury(Hg) Arsenic(As)
        Cadmium(Cd) Lead(Pb)
        Organisation: Association of Official Agricultural Chemists
        (International) + United States Pharmacopeia
        Methodology: AFVAN-SLMF-0022 + <USP> ch. 232
        Instrumentation: Inductively coupled plasma mass
        spectrometry
        `,
        bg: ['/plasma_bg.jpg'],
        read: 'GMP guidlines dictate limits to exposure of harmful heavy metals including lead, arsenic, mercury and cadmium to pose a serious safety risk and require heavy metals screening prior to cannabis products reaching commercial markets ',
    },
    {
        title: 'Moisture content',
        link: 'moisture-content',
        description:`
        Moister content for plant
        Organisation: Association of Official Agricultural Chemists
        (International)
        Methodology: AFVAN-SLMF-0013
        Instrumentation: Scientific air oven`,
        bg: ['/airoven_bg.jpg'],
        read: 'GMP limits moisture content for cannabis flowers/buds. Using our scientific infrared air oven we can detect the smallest measurements of plant moisture content up-to 4-plate analytical readouts',
    }
]

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

const Testing = () => {
    return (
        <>
            <Head>
                <title>GMP Mandatory Testing - Cirta</title>

                <meta name="description" content="GMP Cannabis Testing" />

                <script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=ce5ca488-8b2e-45fd-bdad-474184244d32"> </script>
            </Head>

            <Header />

            <main className="main gmp__testing">
                <section className="">
                    <div className="section-title text-center pt-60 mb-60 wows fadeInUps animateds">
                        <h1>cGMP mandatory release cannabis testing services</h1>
                    </div>

                    <div className="">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5">
                                    <img src="/service_bg.jpg" />
                                </div>
                                <div className="col-md-5 offset-md-1">
                                    <p>
                                        Our testing services and lab facilities are fully GMP compliant and accredited by international and domestic governing bodies. At Cirta, we are certified to provide our clients with an all-in-one cannabis testing suite that is approved and compliant with GMP cannabis regulations.
                                        <br /><br />
                                        In order for cannabis products to be considered high quality or for medical purposes it must satisfy the stringent pharmaceutical quality standards guaranteeing consistency, traceability, integrity and quality assurance. Good Manufacturing Practices(GMP) are guidlines and practices released by the World Health Organization(WHO) in order to conform with international pharmaceutical regulators and international industry segment regulators which are deliberatly harmanized with government regulatory agencies and the International Organization for Standards(ISO) achieving a total quality systems of standards and regulations.

                                    </p>
                                </div>
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

export default Testing
