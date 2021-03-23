import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriver } from '@fortawesome/free-solid-svg-icons';
import { faReceipt } from '@fortawesome/free-solid-svg-icons'

export default function Choose () {
  return (
    <section>
      <section id="why" className="exp-area pt-110 pb-90" >
        <div className="container">
          <div className="row">
            <div className="col-xl-8 offset-xl-2 col-lg-8 offset-lg-2">
              <div className="section-title text-center mb-60">
                <h2>
                  <span className="heading-fill">Why choose</span> <span className="heading-color">Cirta</span>
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-4 pt-20">
              <div className="test-wrapper">
                <div className="clientsay-name d-flex">
                  <div className="client-say-icon">
                    <i><FontAwesomeIcon icon={faScrewdriver}/></i>
                  </div>
                  <div className="client-say-content align-self-center">
                    <h4>Collaborative Relationship</h4>
                  </div>
                </div>
                <div className="test-text">
                  <p>We strive to build a trusting, collaborative and efficient relationships with our clients creating innovative testing solutions for every phase of the cannabis production cycle while you in the most cost effective methods without sacrificing quality </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 pt-20">
              <div className="test-wrapper">
                <div className="clientsay-name d-flex">
                  <div className="client-say-icon">
                    <i><FontAwesomeIcon icon={faReceipt}/></i>
                  </div>
                  <div className="client-say-content align-self-center">
                    <h4> World class standards</h4>
                  </div>
                </div>
                <div className="test-text">
                  <p>Using the highest regulatory standards and "best practice" certifcations, technologies and methodologies extensively used in established industries from pharmaceuticals, food, agriculture to nutraceuticals which we implemented into the cannabis market segment</p>
                </div>
              </div>
            </div>
            <div className="offset-md-3 col-md-6 offset-lg-0 col-lg-4 pt-20">
              <div className="test-wrapper">
                <div className="clientsay-name d-flex">
                  <div className="client-say-icon">
                    <i><FontAwesomeIcon icon={faReceipt}/></i>
                  </div>
                  <div className="client-say-content align-self-center">
                    <h4> Technologies and laboratories</h4>
                  </div>
                </div>
                <div className="test-text">
                  <p>We offer an unrivaled testing experience. Utilizing latest technologies in equipement and software we ensure that clients get the most leverage from our testing services to thrive in the growing increasingly competitive and global cannabis marketplace </p>
                </div>
              </div>
            </div>

          </div>

          <div className="row">
            <div id="marquee">
              <div className="photobanner">
                <div className="img-wrapper">
                  <img src="/ctpat_logo.png" alt="" />
                </div>
                <div className="img-wrapper">
                  <img src="/usp_logo.png" alt="" />
                </div>
                <div className="img-wrapper">
                  <img src="/who_logo.png" alt="" />
                </div>
                <div className="img-wrapper">
                  <img src="/iso9001_logo.png" alt="" />
                </div>
                <div className="img-wrapper">
                  <img src="/fda_logo.png" alt="" />
                </div>
                <div className="img-wrapper">
                  <img src="/aoac_logo.png" alt="" />
                </div>
                <div className="img-wrapper">
                  <img src="/healthcanada_logo.png" alt="" />
                </div>
                <div className="img-wrapper">
                  <img src="/ISO45001_logo.png" alt="" />
                </div>
                <div className="img-wrapper">
                  <img src="/glp_logo.png" alt="" />
                </div>
                <div className="img-wrapper">
                  <img src="/fsa_logo.png" alt="" />
                </div>
                <div className="img-wrapper">
                  <img src="/dea_logo.png" alt="" />
                </div>
                <div className="img-wrapper">
                  <img src="/ psci_logo.png" alt="" />
                </div>
                <div className="img-wrapper">
                  <img src="/fsma_logo.png" alt="" />
                </div>
                <div className="img-wrapper">
                  <img src="/govcloud_logo.png" alt="" />
                </div>
                <div className="img-wrapper">
                <img src="/gmp_logo.png" alt="" />
              </div>
              <div className="img-wrapper">
                <img src="/HACCP_logo.png" alt="" />
              </div>
              <div className="img-wrapper">
                <img src="/globalgap_logo.png" alt="" />
              </div>

              <div className="img-wrapper">
                <img src="/gfsi_logo.png" alt="" />
              </div>
              <div className="img-wrapper">
                <img src="/iso17025_logo.png" alt="" />
              </div>
              <div className="img-wrapper">
                <img src="/iso28000_logo.png" alt="" />
              </div>
              <div className="img-wrapper">
                <img src="/iso45001_logo.png" alt="" />
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
