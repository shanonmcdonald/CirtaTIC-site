import Head from 'next/head'

import Header from '../components/index/header'
import Footer from '../components/footer'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug, faLongArrowAltRight, faArrowRight, faCertificate, faFlask, faTimes, faExclamationTriangle, faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const servicesData = [
  {
      title: 'Microbiology Screening',
      link: 'microbiology-screening',
      description: 'Total aerobic plate count, total yeast and molds, E. coli, samonella spp., enterbacterial count, S. aureus, P. aueroginosa',
      icon: faBug
  }, {
      title: 'Pesticides Screening',
      link: 'pesticides-screening',
      description: '96 pesticides as per cannabis list with limits',
      icon: faTimes
  }, {
      title: 'Hemp Flower Potency',
      link: 'hemp-flower-potency',
      description: 'Test for compliance DL=< 0.3%',
      icon: faCertificate
  }, {
      title: 'Aflatoxin',
      link: 'aflatoxin',
      description: 'B1, B2, G1, G2',
      icon: faExclamationTriangle
  }, {
      title: 'Hemp Products Test',
      link: 'hemp-products-test',
      description: 'Total THC potency test DL =< 4ppm',
      icon: faPlusSquare
  }, {
      title: 'Total Cannabis Cannabinoid Profile',
      link: 'total-cannabis-cannabinoid-profile',
      description: 'THC (delta 8, 9) OH-THC,CBD, CBL, CBC, CBCA, CBDV, CBDVA, CBG, CBGA, CBN, CBNA, THCA-A, THCV, THCVA',
      icon: faFlask
  }
]

const Services = () => {
  const serviceElms = []

  for (let service of servicesData) {
      serviceElms.push(<div className="col-xl-4 col-lg-6 col-md-6" key={service.title}>
          <div className="services-wrapper pos-rel mb-30 wows fadeInUps animateds" data-wows-delay="0.3s">
              <div className="services-icon">
                  <Link href={"services/" + service.link}>
                      <a><i><FontAwesomeIcon icon={service.icon} /></i></a>
                  </Link>
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
    <div>
        <Head>
          <title>Services - Cirtatic</title>
        </Head>

        <Header />
        
        <main className="services">
          <h1>Services Page</h1>

          <section id="services">
            <div className="services-area grey-soft-bg pt-110 pb-95">
                <div className="container">
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
        </main>

        <Footer />
    </div>
  )
}

export default Services