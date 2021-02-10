import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug, faLongArrowAltRight, faSearchPlus, faCheckDouble, faCertificate, faFlask, faTimes, faExclamationTriangle, faPlusSquare } from '@fortawesome/free-solid-svg-icons'

const services = [
    {
        title: 'Microbiology Screening',
        description: 'Total aerobic plate count, total yeast and molds, E. coli, samonella spp., enterbacterial count, S. aureus, P. aueroginosa',
        icon: faBug
    }, {
        title: 'Pesticides Screening',
        description: '96 pesticides as per cannabis list with limits',
        icon: faTimes
    }, {
        title: 'Hemp Flower Potency',
        description: 'Test for compliance DL=< 0.3%',
        icon: faCertificate
    }, {
        title: 'Aflatoxin',
        description: 'B1, B2, G1, G2',
        icon: faExclamationTriangle
    }, {
        title: 'Hemp Products Test',
        description: 'Total THC potency test DL =< 4ppm',
        icon: faPlusSquare
    }, {
        title: 'Total Cannabis Cannabinoid Profile',
        description: 'THC (delta 8, 9) OH-THC,CBD, CBL, CBC, CBCA, CBDV, CBDVA, CBG, CBGA, CBN, CBNA, THCA-A, THCV, THCVA',
        icon: faFlask
    }
]

export default function Services () {
    const serviceElms = []

    for (let service of services) {
        serviceElms.push(<div className="col-xl-4 col-lg-6 col-md-6" key={service.title}>
            <div className="services-wrapper pos-rel mb-30 wows fadeInUps animateds" data-wows-delay="0.3s">
                <div className="services-icon">
                    <i><FontAwesomeIcon icon={service.icon} /></i>
                </div>
                <div className="services-text">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                </div>
                <div className="services-link">
                    <a href="#contact"><i><FontAwesomeIcon icon={faLongArrowAltRight} /></i></a>
                </div>
            </div>
        </div>)
    }

    return (
        <section id="services">
            <div className="services-area grey-soft-bg pt-110 pb-95">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 offset-xl-2 col-lg-8 offset-lg-2">
                            <div className="section-title text-center mb-60 wows fadeInUps animateds" data-wows-delay="0.2s">
                                <h2> <span className="heading-fill">Our Analytical</span> <span className="heading-color">Services</span> </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-md-8 offset-md-2">
                            <div className="service-info">
                                <p>
                                    Our analytical Lab testing services are accredited by the highest industry standards
                                </p>
                                <p>
                                    Insuring every quantifiable step in your schema is executed to the highest level of competence and technicality
                                </p>
                            </div>
                        </div>
                    </div>
                    { /* <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <p>
                                We provide solutions through our testing, inspection and certification services we ensure to businesses, growers, processors, manufacturer, distributors and retailers with navigating legal compliance and opening barriers to global business opportunities.  Through our testing, inspection and certification services we ensure clients meet all legal requirements while maximizing quality assurance and minimizing risk.
                                <br /><br />
                                We comply with complex global compliance legislation in accordance with the FDA, EU GMP, Federal Regulations, state regulations, and Health Canada. We develop systems and quality assurance programs to provide an accelerated approach to incorporating (GMPs) good manufacturing practices to fit your specific business needs.
                            </p>
                        </div>
                    </div> */ }
                    <div className="row">
                        {serviceElms}
                    </div>
                </div>
            </div>
        </section>
    )
}
