import Head from 'next/head'

import Header from '../components/index/header'
import Footer from '../components/footer'
import { faBug, faCertificate, faFlask, faTimes, faExclamationTriangle, faPlusSquare } from '@fortawesome/free-solid-svg-icons'


const testingServices = [
    {
        title: 'Microbiology Screening',
        link: 'microbiology-screening',
        description: 'Total aerobic plate count, total yeast and molds, E. coli, samonella spp., enterbacterial count, S. aureus, P. aueroginosa',
        //description:"",
        icon: faBug
    }, {
        title: 'Pesticides Screening',
        link: 'pesticides-screening',
        //description: '96 pesticides as per cannabis list with limits',
        description:"",
        icon: faTimes
    }, {
        title: 'Hemp Flower Potency',
        link: 'hemp-flower-potency',
        //description: 'Test for compliance DL=< 0.3%',
        description:"",
        icon: faCertificate
    }, {
        title: 'Aflatoxin',
        link: 'aflatoxin',
        //description: 'B1, B2, G1, G2',
        description:"",
        icon: faExclamationTriangle
    }, {
        title: 'Hemp Products Test',
        link: 'hemp-products-test',
        //description: 'Total THC potency test DL =< 4ppm',
        description:"",
        icon: faPlusSquare
    }, {
        title: 'Total Cannabis Cannabinoid Profile',
        link: 'total-cannabis-cannabinoid-profile',
        //description: 'THC (delta 8, 9) OH-THC,CBD, CBL, CBC, CBCA, CBDV, CBDVA, CBG, CBGA, CBN, CBNA, THCA-A, THCV, THCVA',
        description:"",
        icon: faFlask
    }
]

const Services = () => {
    return testingServices.map(service => {
        return (
            <h3 style={{'margin': '200px 0'}} key={service.link} id={service.link}>{service.title}</h3>
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
                <h1>GMP Mandatory Testing</h1>

                <Services />
            </main>

            <Footer />
        </>
    )
}

export default Testing