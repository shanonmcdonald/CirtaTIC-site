import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug, faLongArrowAltRight, faArrowRight, faCertificate, faFlask, faTimes, faExclamationTriangle, faPlusSquare } from '@fortawesome/free-solid-svg-icons'

// import Shipping from '../../public/shipping.png'

import Link from 'next/link'


const services = [
    {
        title: 'Microbiology screening',
        link: '/gmp-mandatory-testing#microbiology-screening',
        description: 'Total aerobic plate count, total yeast and molds, E. coli, samonella spp., enterbacterial count, S. aureus, P. aueroginosa',
        //description:"",
        icon: 'micro'
    }, {
        title: 'Pesticides screening',
        link: '/gmp-mandatory-testing#pesticides-screening',
        //description: '96 pesticides as per cannabis list with limits',
        description:"",
        icon: 'pesticide'
    }, {
        title: 'GMP',
        link: '/gmp-mandatory-testing',
        //description: 'Test for compliance DL=< 0.3%',
        description:"",
        icon: 'hemp-flowery-test'
    }, {
        title: 'Aflatoxin',
        link: '/gmp-mandatory-testing#aflatoxin',
        //description: 'B1, B2, G1, G2',
        description:"",
        icon: 'aflatoxin'
    }, {
        title: 'Preharvest',
        link: '/preharvest-and-compliance-testing',
        //description: 'Total THC potency test DL =< 4ppm',
        description:"",
        icon: 'hemp-product-test'
    }, {
        title: 'Total cannabinoid profile',
        link: '/gmp-mandatory-testing#total-cannabis-cannabinoid-profile',
        //description: 'THC (delta 8, 9) OH-THC,CBD, CBL, CBC, CBCA, CBDV, CBDVA, CBG, CBGA, CBN, CBNA, THCA-A, THCV, THCVA',
        description:"",
        icon: 'profile'
    }
]

function ServiceElements ({ service }) {
    return (
        <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="services-wrapper pos-rel mb-30 wows fadeInUps animateds" data-wows-delay="0.3s">
                <div className="services-icon">
                    <Link href={service.link}>
                        <a className={'service-icon service-icon--' + service.icon}></a>
                    </Link>
                </div>
                <div className="services-text">
                    <h3>{service.title}</h3>
                </div>
                <div className="services-link">
                    <Link href={service.link}>
                        <a>
                            <i><FontAwesomeIcon icon={faLongArrowAltRight} /></i>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default function Services () {
    return (
        <section id="services">
            <div className="services-area grey-soft-bg pt-110 pb-95">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 offset-xl-2 col-lg-8 offset-lg-2">
                            <div className="section-title text-center mb-60 wows fadeInUps animateds" data-wows-delay="0.2s">
                                <h2> <span className="heading-fill">Our testing</span> <span className="heading-color">services</span> </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-md-8 offset-md-2">
                            <div className="service-info">
                                <p>Our state of the art pharmaceutical testing facilities are accredited by global & domestic regulating bodies ensuring every step is executed to the highest level of analytical processes in accordance with industry's 🌟gold standard🌟 certifications</p>
                                <p>In the accredited testing industry, at Cirta, "tested or certified once - accepted everywhere"</p>
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        { services.map((service, index) => <ServiceElements service={service} key={index} />) }
                    </div>

                    <div className="row mt-30">
                        <div className="col-12">
                            <div className="sv-link-info text-center">
                                <p>
                                    <span></span>
                                    <Link href="/services">
                                        <a>View all services <i><FontAwesomeIcon icon={faLongArrowAltRight} /></i></a>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
