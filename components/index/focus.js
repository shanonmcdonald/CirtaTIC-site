import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faCreditCard } from '@fortawesome/free-solid-svg-icons'

export default function Focus () {
    return (
        <section id="about">
            <div className="about-area pb-90 pt-110" >
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="about-wrapper mb-30 wows fadeInUps animateds" data-wows-delay="0.2s">
                                <div className="section-title mb-40">
                                    <h5> <span className="border-left-1"></span>Let’s Talk<span className="border-right-1"></span></h5>
                                    <h2> <span className="heading-fill">Our</span> <span className="heading-color">FOCUS</span></h2>
                                </div>
                                { /* <div className="about-info">
                                    <p>We Have 25+ Years Of Experience In Design & Development</p>
                                </div> */ }
                                <div className="about-content">
                                    <div className="row">
                                        <div className="col-lg-6 d-flex">
                                            <div className="about-icon">
                                                <i><FontAwesomeIcon icon={faList} /></i>
                                            </div>
                                            <div className="about-text">
                                                <h3>Testing Certification & Compliance</h3>
                                                <p>Our goal is to provide the highest level of testing certifications and compliance tailored to clients unique and required testing needs. We believe in the power of quality products to improve businesses and people’s lives. We pride ourselves on the ability to deploy testing services regardless of your geographical location.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 d-flex">
                                            <div className="about-icon">
                                                <i><FontAwesomeIcon icon={faCreditCard} /></i>
                                            </div>
                                            <div className="about-text">
                                                <h3>Cost Reduction</h3>
                                                <p>We focus on providing customers cost reduction to their bottomline while ensuring product quality and mitigating asymmetries that would otherwise distort trade or block trade.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="about-social-icon">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
