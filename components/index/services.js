import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug, faLongArrowAltRight, faArrowRight, faCertificate, faFlask, faTimes, faExclamationTriangle, faPlusSquare } from '@fortawesome/free-solid-svg-icons'

// import Shipping from '../../public/shipping.png'

import Link from 'next/link'

function ServiceElements ({ service }) {
    return (
        <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="services-wrapper pos-rel mb-30 wows fadeInUps animateds" data-wows-delay="0.3s">
                <div className="services-icon">
                    <Link href={"gmp-mandatory-testing#" + service.link}>
                        <a class={'service-icon service-icon--' + service.icon}></a>
                    </Link>
                </div>
                <div className="services-text">
                    <h3>{service.title}</h3>
                </div>
                <div className="services-link">
                    <a href="#contact"><i><FontAwesomeIcon icon={faLongArrowAltRight} /></i></a>
                </div>
            </div>
        </div>
    )
}

export default function Services () {

    const services = [
        {
            title: 'Microbiology screening',
            link: 'microbiology-screening',
            description: 'Total aerobic plate count, total yeast and molds, E. coli, samonella spp., enterbacterial count, S. aureus, P. aueroginosa',
            //description:"",
            icon: 'micro'
        }, {
            title: 'Pesticides screening',
            link: 'pesticides-screening',
            //description: '96 pesticides as per cannabis list with limits',
            description:"",
            icon: 'pesticide'
        }, {
            title: 'Hemp flower compliance test',
            link: 'hemp-flower-potency',
            //description: 'Test for compliance DL=< 0.3%',
            description:"",
            icon: 'hemp-flowery-test'
        }, {
            title: 'Aflatoxin',
            link: 'aflatoxin',
            //description: 'B1, B2, G1, G2',
            description:"",
            icon: 'aflatoxin'
        }, {
            title: 'Hemp products compliance test',
            link: 'hemp-products-test',
            //description: 'Total THC potency test DL =< 4ppm',
            description:"",
            icon: 'hemp-product-test'
        }, {
            title: 'Total cannabinoid profile',
            link: 'total-cannabis-cannabinoid-profile',
            //description: 'THC (delta 8, 9) OH-THC,CBD, CBL, CBC, CBCA, CBDV, CBDVA, CBG, CBGA, CBN, CBNA, THCA-A, THCV, THCVA',
            description:"",
            icon: 'profile'
        }
    ]

    return (
        <section id="services">
            <div className="services-area grey-soft-bg pt-110 pb-95">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 offset-xl-2 col-lg-8 offset-lg-2">
                            <div className="section-title text-center mb-60 wows fadeInUps animateds" data-wows-delay="0.2s">
                                <h2> <span className="heading-fill">Our analytical</span> <span className="heading-color">services</span> </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-md-8 offset-md-2">
                            <div className="service-info">
                                <p>
                            Our state of the art pharmaceutical grade lab testing facilities are accredited by the highest global regulatory governing bodies

                                </p>
                                <p>
                                    We ensure every step in your testing schema is executed at the highest level of scientific processes to the industry's "gold standard" of certifications
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <p>
                                We provide solutions through our testing, inspection and certification services we ensure to businesses, growers, processors, manufacturer, distributors and retailers with navigating legal compliance and opening barriers to global business opportunities.  Through our testing, inspection and certification services we ensure clients meet all legal requirements while maximizing quality assurance and minimizing risk.
                                <br /><br />
                                We comply with complex global compliance legislation in accordance with the FDA, EU GMP, Federal Regulations, state regulations, and Health Canada. We develop systems and quality assurance programs to provide an accelerated approach to incorporating (GMPs) good manufacturing practices to fit your specific business needs.
                            </p>
                        </div>
                    </div> */}

                    <div className="row">
                        { services.map(service => <ServiceElements service={service} key={service.title} />) }
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
