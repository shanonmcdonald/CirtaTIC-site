// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faList, faCreditCard } from '@fortawesome/free-solid-svg-icons'

export default function Focus () {
    let counter = 1;
    const steps = [
        { title: 'Create an account on Cirta portals' },
        { title: 'Select or create your testing schema' },
        { title: 'We pick up samples from your door step' },
        { title: 'View your results on Cirta portals' }
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
        <section id="about" className="">
            <div className="about-area pt-110 pb-110" >
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="about-wrapper mb-30 wows fadeInUps animateds" data-wows-delay="0.2s">
                                <div className="section-title mb-40">
                                    <h2> <span className="heading-fill">What we</span> <span className="heading-color">do</span></h2>
                                </div>
                                { /* <div className="about-info">
                                    <p>We Have 25+ Years Of Experience In Design & Development</p>
                                </div> */ }
                                <div className="about-content">
                                    <div className="row">
                                        <div className="col">
                                            <p className="about-info"><span className="border-left-1"></span>
                                            Our mission- facilitating the legitimacy of the rapidly growing cannabis industry in conformity with scientific global societies in testing inspection certification and verification
                                            <br /><br />
                                            We employ & develop the best analytical testing technologies while simultaneously utilizing the industries highest global & domestic certifications tailored to our clients unique cannabis testing needs all housed & delivered on our automated cloud platform. We believe in superior testing services as the key driving forces for cannabis innovation and market segment growth
                                            </p>
                                        </div>
                                    </div>

                                    <div className="row mt-4">
                                        <div className="col">
                                            <div className="mb-3">
                                                <img src="/service-research.svg" class="" alt="Alt text" />
                                            </div>
                                            <h5>Regulations</h5>
                                            <p>description 1</p>
                                        </div>
                                        <div className="col">
                                            <div className="mb-3">
                                                <img src="/service-strategy.svg" class="img-fluid" alt="Alt text" />
                                            </div>
                                            <h5>Strategy</h5>
                                            <p>description 1</p>
                                        </div>
                                        <div className="col">
                                            <div className="mb-3">
                                                <img src="/service-development.svg" class="" alt="Alt text" />
                                            </div>
                                            <h5>Development</h5>
                                            <p>description 1</p>
                                        </div>
                                        <div className="col">
                                            <div className="mb-3">
                                                <img src="/service-design.svg" class="" alt="Alt text" />
                                            </div>
                                            <h5>column 1</h5>
                                            <p>description 1</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="counter-area pt-90 pb-90 wows fadeInUps animateds black-soft-bg" data-wows-delay="0.3s">
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
