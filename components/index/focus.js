// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faList, faCreditCard } from '@fortawesome/free-solid-svg-icons'

export default function Focus () {
    let counter = 1;
    const steps = [
        { title: 'Register to our client portal' },
        { title: 'Select and review your testing schema' },
        { title: 'Select a date for sample pick up' },
        { title: 'Log back in to view your test results and product certification' }
    ]
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
                                            Our mission is to help mature and legitimize the rapidly growing cannabis industry with in the overall scientific global society of testing inspection certification and verification
                                            <br /><br />
                                            We provide the highest technological laboratory services utilizing the highest industry certifications tailored to your cannabis testing requirements while all managed and deployed with our digital cloud compliance platform. We believe in superior testing services as a critical driving force for innovation and market segment growth.
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
