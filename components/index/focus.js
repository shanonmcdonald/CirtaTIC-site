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
                                            We are dedicated to legitimizing the cannabis industry by bringing testing, certification, quality assurance, safety and sustainability to life in conformity with global scientific testing & regulating societies
                                            <br /><br />
                                             We strive to exceed customer expectations by offering a superior testing service and believe this to be the key driving force for cannabis innovation and industry growth
                                            </p>
                                        </div>
                                    </div>

                                    <div className="row mt-4">
                                        <div className="col">
                                            <div className="mb-3">
                                                <img src="/service-research.svg" class="" alt="Alt text" />
                                            </div>
                                            <h5>Regulations</h5>
                                            <p>Specializing in government regulation processes, guaranteeing organizational compliance to regulations in all aspects of the cannabis industry. Rest assured that products reaching consumers meet the required standards  </p>
                                        </div>
                                        <div className="col">
                                            <div className="mb-3">
                                                <img src="/service-strategy.svg" class="img-fluid" alt="Alt text" />
                                            </div>
                                            <h5>Strategy</h5>
                                            <p>Leveraging an extensive network of global and local accredited labs in a seemless approach to manage your entire cannabis supply chain from seed to sale, the most comprehensive spectrum of cannabis services developed in industry </p>
                                        </div>
                                        <div className="col">
                                            <div className="mb-3">
                                                <img src="/service-design.svg" class="" alt="Alt text" />
                                            </div>
                                            <h5>SaaS</h5>
                                            <p>All services implemented and managed by cloud native portal hosted on highly secure AWS GOVCLOUD(US). Offering the-all-in-one digital cannabis platform for testing & certification all-in-one platform </p>
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
