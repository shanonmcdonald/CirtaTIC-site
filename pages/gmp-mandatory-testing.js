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
        icon: faBug
    }, {
        title: 'Pesticides Screening',
        link: 'pesticides-screening',
        //description: '96 pesticides as per cannabis list with limits',
        description:`
        Pesticides test of (96 pesticides)
        Organisation: Food and Drug Administration
        Methodology: GMP cannabis mandatory release cannabis pesticides limits list`,
        icon: faTimes
    }, {
        title: 'Hemp flower compliance test',
        link: 'hemp-flower-potency',
        //description: 'Test for compliance DL=< 0.3%',
        description:`
        Hemp plant total THC potency test for compliance DL =<  0.3%
        Organisation: Association of Official Agricultural Chemists (International)
        Methodology: AFVAN-SLMF-0029
        Instrumentation: Gas Chromatography (GC)`,
        icon: faCertificate
    }, {
        title: 'Aflatoxin',
        link: 'aflatoxin',
        //description: 'B1, B2, G1, G2',
        description:`
        Aflatoxin test for (B1) (B2) (G1) (G2)
        Organisation: Association of Official Agricultural Chemists (International)
        Methodology: AFVAN-SLMF-0030
        Instrumentation: Liquid Chromatography + Mass spectrometry`,
        icon: faExclamationTriangle
    }, {
        title: 'Hemp products compliance test',
        link: 'hemp-products-test',
        //description: 'Total THC potency test DL =< 4ppm',
        description:`
        Hemp products total THC potency test for compliance DL = 4ppm
        Organisation: Association of Official Agricultural Chemists (International)
        Methodology = AFVAN-SMF-0027
        Instrumentation = Gas Chromatography + Mass spectrometry
        `,
        icon: faPlusSquare
    }, {
        title: 'Total Cannabis Cannabinoid Profile',
        link: 'total-cannabis-cannabinoid-profile',
        //description: 'THC (delta 8, 9) OH-THC,CBD, CBL, CBC, CBCA, CBDV, CBDVA, CBG, CBGA, CBN, CBNA, THCA-A, THCV, THCVA',
        description:`
        Cannabinoid profile of:
        (THC delta 8, 9) (OH-THC CBD) (CBG) (CBN) (CBL) (CBC) (CBCA) (CBDA) (CBDV) (CBDVA) (CBGA) (CBNA) (THCA-A) (THCV) (THCVA)
        Organisation: SGS
        Methodology: SGS proprietary method
        Instrumentation: Liquid Chromatography
        `,

        icon: faFlask
    },
    {
        title: 'Heavy metals',
        //link: 'total-cannabis-cannabinoid-profile',
        //description: 'THC (delta 8, 9) OH-THC,CBD, CBL, CBC, CBCA, CBDV, CBDVA, CBG, CBGA, CBN, CBNA, THCA-A, THCV, THCVA',
        description:`
        Heavy metals testing for (Hg) (As) (Cd) (Pb)
        Organisation: Association of Official Agricultural Chemists (International) + United States Pharmacopeia
        Methodology: AFVAN-SLMF-0022 + <USP> ch. 232
        Instrumentation: Inductively coupled plasma mass spectrometry
        `,

        //icon: faFlask
    },
    {
        title: 'Moister content',
        //link: 'aflatoxin',
        description:`
        Moister content for plant
        Organisation: Association of Official Agricultural Chemists (International)
        Methodology: AFVAN-SLMF-0013
        Instrumentation: Scientific air oven`,
        //icon: faExclamationTriangle
    }
]

const Services = () => {
    return testingServices.map(service => {
        return (
          <>
            <h3 style={{'margin': '200px 0'}} key={service.link} id={service.link}>{service.title}</h3>
            <p className="service--description">{service.description}</p>
          </>
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

            <main className="main">
                <h1>cGMP mandated cannabis testing services</h1>

                <p> cGMP mandates the systems of quality control standards in pharmaceuticals,
                medical plants and their derivatives to meet the current best and most referenced industry practices to ensure global quality assurance.
                 Our testing facilities are fully GMP compliant and accredited to proform tasks in every cannabis related industry from pharmaceuticals to food safety testing.
                 Our services exceed expectations guaranteeing consistency traceability integrity quality and reliability.</p>

                <Services />
            </main>

            <Footer />
        </>
    )
}

export default Testing
