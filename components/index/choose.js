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
            <div className="col-md-4 col-lg-4 pt-20">
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
                  <p>We strive to build a trusting, collaborative and efficient relationships with our clients worldwide creating innovative testing solutions for every phase of the cannabis production cycle while supporting you and your products within the global compliance network</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-lg-4 pt-20">
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
            <div className="col-md-4 col-lg-4 pt-20">
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
                  <p>We offer an unrivaled cannabis testing experience. Using the latest technologies in digitalization and latest laboritory equipement we aim to ensuring clients get the most leverage from our testing services to thrive in the growing increasingly competitive and global cannabis marketplace </p>
                </div>
              </div>
            </div>

          </div>

          <div className="row">
            <div id="marquee">
              <div className="photobanner">
                <div className="img-wrapper">
                  <img src="/effci_logo.jpeg" alt="" />
                </div>
                <div className="img-wrapper">
                  <img src="/ctpat_logo.png" alt="" />
                </div>
                <div className="img-wrapper">
                  <img src="/who_gmp_logo.png" alt="" />
                </div>
                <div className="img-wrapper">
                  <img src="/fda_logo.png" alt="" />
                </div>
                <div className="img-wrapper">
                  <img src="/fsa_logo.jpeg" alt="" />
                </div>
                <div className="img-wrapper">
                  <img src="/fsma_logo.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
