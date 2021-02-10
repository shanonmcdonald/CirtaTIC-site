import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriver } from '@fortawesome/free-solid-svg-icons';
import { faReceipt } from '@fortawesome/free-solid-svg-icons'

export default function WhyChooseUs () {
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
            <div className="col-md-6 col-lg-4 offset-lg-2 pt-20">
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
                  <p>We strive to build a trusting, collaborative and efficient relationship with our clients to create creative innovative work space for compliance and testing.</p>
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
                    <h4>Regulations & Standards</h4>
                  </div>
                </div>
                <div className="test-text">
                  <p>Using current highest standards we help clients adapt and comply with complex cannabis regulations while simutaniously reducing cost and improving product quality</p>
                </div>
              </div>
            </div>
          </div>                        
        </div>
      </section>
    </section>
  )
}