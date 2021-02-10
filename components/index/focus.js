import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faCreditCard } from '@fortawesome/free-solid-svg-icons'

let counter = 1;
const steps = [
    { title: 'Schedule an appointment for a free consultation' },
    { title: 'Reviewing your customized strategic scenario-based testing plan' },
    { title: 'Deployment' },
    { title: 'Results with certification approval stamps' }
]

export default function Focus () {
    const stepElms = []
    
    for (let step of steps) {
        stepElms.push(<div className="col-xl-3 col-md-3 col-6" key={counter}>
            <div className="counter-wrapp text-center mb-30">
                <div className="counter-image mb-40">
                    <span></span>
                </div>
                <div className="counter-content">
                    <h1 className="counter">{counter}</h1>
                    <span>{step.title}</span>
                </div>
            </div>
        </div>);
        counter++;
    }
    return (
        <section id="about" className="pb-90">
            <div className="about-area pt-110" >
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="about-wrapper mb-30 wows fadeInUps animateds" data-wows-delay="0.2s">
                                <div className="section-title mb-40">
                                    <h2> <span className="heading-fill">What We</span> <span className="heading-color">Do</span></h2>
                                </div>
                                { /* <div className="about-info">
                                    <p>We Have 25+ Years Of Experience In Design & Development</p>
                                </div> */ }
                                <div className="about-content">
                                    <div className="row">
                                        <div className="col">
                                            <p className="about-info"><span className="border-left-1"></span>
                                            Our passion is to welcome the rapidly growing cannabis industry into our world of testing, inspection, certification and verification
                                            <br /><br />
                                            We provide the highest level of testing certifications and compliance tailored to clients unique and required testing needs. We believe in the power of quality products to improve businesses and people’s lives. We pride ourselves on the ability to deploy testing services regardless of your geographical location.
                                            </p>
                                        </div>
                                        { /* <div className="col-lg-6 d-flex">
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
                                        </div> */ }
                                    </div>
                                    <div className="about-social-icon">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="counter-area pt-40 wows fadeInUps animateds" data-wows-delay="0.3s">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                        <div className="line-bar d-none d-md-block"></div>
                        </div>
                    </div>
                    <div className="row">
                        {stepElms}
                    </div>
                </div>
            </section>
        </section>
    )
}
