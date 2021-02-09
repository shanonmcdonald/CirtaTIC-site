import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug, faLongArrowAltRight, faCertificate, faSearchPlus, faCheckSquare } from '@fortawesome/free-solid-svg-icons'

export default function Services () {
    return (
        <section>
            <div className="services-area grey-soft-bg pt-110 pb-95">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 offset-xl-2 col-lg-8 offset-lg-2">
                            <div className="section-title text-center mb-60 wows fadeInUps animateds" data-wows-delay="0.2s">
                                <h5> <span className="border-left-1"></span>Let’s Talk<span className="border-right-1"></span></h5>
                                <h2> <span className="heading-fill">Our</span> <span className="heading-color">SERVICES</span> </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <p>
                                We provide solutions through our testing, inspection and certification services we ensure to businesses, growers, processors, manufacturer, distributors and retailers with navigating legal compliance and opening barriers to global business opportunities.  Through our testing, inspection and certification services we ensure clients meet all legal requirements while maximizing quality assurance and minimizing risk.
                                <br /><br />
                                We comply with complex global compliance legislation in accordance with the FDA, EU GMP, Federal Regulations, state regulations, and Health Canada. We develop systems and quality assurance programs to provide an accelerated approach to incorporating (GMPs) good manufacturing practices to fit your specific business needs.</p>
                        </div>
                    </div>
                    <div className="row">
                        { /* Start of TESTING service */ }
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="services-wrapper pos-rel mb-30 wows fadeInUps animateds" data-wows-delay="0.3s">
                                <div className="services-icon">
                                    <i><FontAwesomeIcon icon={faBug} /></i>
                                </div>
                                <div className="services-text">
                                    <h3>Testing</h3>
                                    <p>Some testing text here</p>
                                </div>
                                <div className="services-link">
                                    <a href="#contact"><i><FontAwesomeIcon icon={faLongArrowAltRight} /></i></a>
                                </div>
                            </div>
                        </div>
                        { /* End of TESTING service */ }
                        { /* Start of INSPECTION service */ }
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="services-wrapper pos-rel mb-30 wows fadeInUps animateds" data-wows-delay="0.3s">
                                <div className="services-icon">
                                    <i><FontAwesomeIcon icon={faSearchPlus} /></i>
                                </div>
                                <div className="services-text">
                                    <h3>Inspection</h3>
                                    <p>Some inspection text here</p>
                                </div>
                                <div className="services-link">
                                    <a href="#contact"><i><FontAwesomeIcon icon={faLongArrowAltRight} /></i></a>
                                </div>
                            </div>
                        </div>
                        { /* End of INSPECTION service */ }
                        { /* Start of CERTIFICATION service */ }
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="services-wrapper pos-rel mb-30 wows fadeInUps animateds" data-wows-delay="0.3s">
                                <div className="services-icon">
                                    <i><FontAwesomeIcon icon={faCheckSquare} /></i>
                                </div>
                                <div className="services-text">
                                    <h3>Certification</h3>
                                    <p>Some certificate text here</p>
                                </div>
                                <div className="services-link">
                                    <a href="#contact"><i><FontAwesomeIcon icon={faLongArrowAltRight} /></i></a>
                                </div>
                            </div>
                        </div>
                        { /* End of CERTIFICATION service */ }
                    </div>
                </div>
            </div>
        </section>
    )
}
