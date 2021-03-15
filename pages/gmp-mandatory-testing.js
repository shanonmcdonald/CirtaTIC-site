import Head from 'next/head'

import Header from '../components/index/header'
import Footer from '../components/footer'
import { faBug, faCertificate, faFlask, faTimes, faExclamationTriangle, faPlusSquare } from '@fortawesome/free-solid-svg-icons'


const testingServices = [
    {
        title: 'Microbiology Screening',
        link: 'microbiology-screening',
        description: 'Microbiology screening for: Total aerobic plate count Methodology = USP chapter 2021, Total yeast and molds Methodology = USP chapter 2021, E. coli Methodology = USP (2022), Salmonella spp. Methodology = USP 2022, Enterbacterial count Methodology = USP chapter 2021, S. aureus USP chapter 2022',
        //description:"",
        icon: faBug
    }, {
        title: 'Pesticides Screening',
        link: 'pesticides-screening',
        //description: '96 pesticides as per cannabis list with limits',
        description:'Pesticides test of (96 pesticides), Methodology = GMP cannabis mandatory release cannabis pesticides limits list',
        icon: faTimes
    }, {
        title: 'Hemp Flower Potency',
        link: 'hemp-flower-potency',
        //description: 'Test for compliance DL=< 0.3%',
        description:'Hemp plant total THC potency test for compliance DL = <  0.3%, Instrumentation = Gas Chromatography (GC), Methodology = AFVAN-SLMF-0029',
        icon: faCertificate
    }, {
        title: 'Aflatoxin',
        link: 'aflatoxin',
        //description: 'B1, B2, G1, G2',
        description:'Aflatoxin test for B1 B2 G1 G2, Instrumentation = Liquid Chromatography + Mass spectrometry, Methodology = AFVAN-SLMF-0030',
        icon: faExclamationTriangle
    }, {
        title: 'Hemp Products Test',
        link: 'hemp-products-test',
        //description: 'Total THC potency test DL =< 4ppm',
        description:'Hemp products total THC potency test for compliance DL = 4ppm, Instrumentation = Gas Chromatography + Mass spectrometry, Methodology = AFVAN-SMF-0027',
        icon: faPlusSquare
    }, {
        title: 'Total Cannabis Cannabinoid Profile',
        link: 'total-cannabis-cannabinoid-profile',
        //description: 'THC (delta 8, 9) OH-THC,CBD, CBL, CBC, CBCA, CBDV, CBDVA, CBG, CBGA, CBN, CBNA, THCA-A, THCV, THCVA',
        description:'Cannabinoid profile of THC(delta 8, 9) OH-THC CBD CBG CBN CBL CBC CBCA CBDA CBDV CBDVA CBGA CBNA THCA-A THCV THCVA, Instrumentation = Liquid  Chromatography, Methodology = In house proprietary method',
        icon: faFlask
    }
]

const Services = () => {
    return testingServices.map(service => {
        return (
          <>
            <h3 style={{'margin': '200px 0'}} key={service.link} id={service.link}>{service.title}</h3>
            {service.description}
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
                <h1>cGMP mandatory release lab testing services</h1>

                <p> GMP mandatory release regulates the quality control of pharmaceuticals, medical plants and their derivatives to meet the “current best practiced standards” to meet domestic and global quality standards.  With our GMP accredited facilities and accredited procedures in pharmaceuticals to food safety testing, our services exceed expectations which guarantee consistency, traceability, integrity, quality and reliability.</p>

                <Services />
            </main>

            <Footer />
        </>
    )
}

export default Testing
