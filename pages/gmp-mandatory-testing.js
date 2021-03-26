import Head from 'next/head'

import Header from '../components/index/header'
import Footer from '../components/footer'
import { faBug, faCertificate, faFlask, faTimes, faExclamationTriangle, faPlusSquare } from '@fortawesome/free-solid-svg-icons'


const testingServices = [
    {
        title: 'Microbiology Screening',
        link: 'microbiology-screening',
        description:`
        Microbiology screening for: Total aerobic plate count
        Organization: United States Pharmacopeia
        Methodology: <USP> chapter 2021-2022-(62)
        Total yeast = <USP> ch. 2021
        E. coli = <USP> ch. 2022
        Salmonella spp. = <USP> ch. 2022
        Enterbacterial count = <USP> ch. 2021
        S. aureus = <USP> ch. 2022`,
        //description:"",
        icon: faBug,
        bg: ['/microbiology_bg.jpg']
    }, {
        title: 'Pesticides Screening',
        link: 'pesticides-screening',
        //description: '96 pesticides as per cannabis list with limits',
        description:`
        Pesticides test of (96 pesticides)
        Organisation: Food and Drug Administration
        Methodology: GMP cannabis mandatory release cannabis
        pesticides limits list`,
        icon: faTimes,
        bg: ['/pesticide_bg.jpg']
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
        bg: ['/gc_bg.jpg']
    }, {
        title: 'Aflatoxin',
        link: 'aflatoxin',
        //description: 'B1, B2, G1, G2',
        description:`
        Aflatoxin test for (B1) (B2) (G1) (G2)
        Organisation: Association of Official Agricultural Chemists
        (International)
        Methodology: AFVAN-SLMF-0030
        Instrumentation: Liquid Chromatography + Mass
        spectrometry`,
        icon: faExclamationTriangle,
        bg: ['/lc_bg.jpg', '/ms_logo.png']
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
        bg: ['/gc_bg.jpg', '/ms_logo.png'] // TODO SHANON: put image name here
    }, {
        title: 'Total Cannabis Cannabinoid Profile',
        link: 'total-cannabis-cannabinoid-profile',
        //description: 'THC (delta 8, 9) OH-THC,CBD, CBL, CBC, CBCA, CBDV, CBDVA, CBG, CBGA, CBN, CBNA, THCA-A, THCV, THCVA',
        description:`
        Cannabinoid profile of:
        (THC delta 8, 9) (OH-THC CBD) (CBG) (CBN) (CBL) (CBC)
        (CBCA) (CBDA) (CBDV) (CBDVA) (CBGA) (CBNA) (THCA-A)
        (THCV) (THCVA)
        Organisation: SGS
        Methodology: SGS proprietary method
        Instrumentation: Liquid Chromatography
        `,

        icon: faFlask,
        bg: ['/canna-anal_bg.jpg','/cannaresults_logo.png'] // TODO SHANON: put image name here
    },
    {
        title: 'Heavy metals',
        //link: 'total-cannabis-cannabinoid-profile',
        //description: 'THC (delta 8, 9) OH-THC,CBD, CBL, CBC, CBCA, CBDV, CBDVA, CBG, CBGA, CBN, CBNA, THCA-A, THCV, THCVA',
        description:`
        Heavy metals testing for (Hg) (As) (Cd) (Pb)
        Organisation: Association of Official Agricultural Chemists
        (International) + United States Pharmacopeia
        Methodology: AFVAN-SLMF-0022 + <USP> ch. 232
        Instrumentation: Inductively coupled plasma mass
        spectrometry
        `,
        bg: ['/plasma_bg.jpg'] // TODO SHANON: put image name here
        //icon: faFlask
    },
    {
        title: 'Moisture content',
        //link: 'aflatoxin',
        description:`
        Moister content for plant
        Organisation: Association of Official Agricultural Chemists
        (International)
        Methodology: AFVAN-SLMF-0013
        Instrumentation: Scientific air oven`,
        bg: ['/airoven_bg.jpg'] // TODO SHANON: put image name here
        //icon: faExclamationTriangle
    }
]

const Services = () => {
    return testingServices.map(service => {
        return (
            <div className="container mx60" key={service.title}>
                <div className="row">
                    <div className="col">
                            <h3 style={{'margin': '50px 0'}} key={service.link} id={service.link}>{service.title}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5 offset-md-1">
                        <p className="service--description">{service.description}</p>
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
            </div>
        )
    })
}

const Testing = () => {
    return (
        <>
            <Head>
              <title>GMP Mandatory Testing - Cirta</title>
            </Head>

            <Header />

            <main className="main gmp__testing">
                <section className="">
                    <div className="section-title text-center pt-60 mb-60 wows fadeInUps animateds">
                        <h1>cGMP mandated cannabis testing services</h1>
                    </div>

                    <div className="">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5">
                                    <img src="/service_bg.jpg" />
                                </div>
                                <div className="col-md-5 offset-md-1">
                                    <p>
                                        cGMP mandates the systems of quality control standards in pharmaceuticals, medical plants and their derivatives to meet the current best and most referenced industry practices to ensure global quality assurance.
                                        <br /><br />
                                        Our testing facilities are fully GMP compliant and accredited to proform tasks in every cannabis related industry from pharmaceuticals to food safety testing.
                                        <br /><br />
                                        Our services exceed expectations guaranteeing consistency traceability integrity quality and reliability.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <Services />
                </section>
            </main>

            <Footer />
        </>
    )
}

export default Testing
