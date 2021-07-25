import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriver } from '@fortawesome/free-solid-svg-icons';
import { faReceipt } from '@fortawesome/free-solid-svg-icons'
// import RelationshipImg from '../../public/collab-relationship.png'

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
                    <img src="/collab-relationship.png" alt="Collaborative Relationship Icon"/>
                  </div>
                  <div className="client-say-content align-self-center">
                    <h4>An industry of trust</h4>
                  </div>
                </div>
                <div className="test-text">
                  <p>✅ Beyond your typical compliance <br />
                  ✅ Trusting, collaborative and efficient testing solutions for every phase of the cannabis supply chain.
                  <br />✅ Fully certified by the appropriate authorities and corresponding with GMP, GDP, GACP guidelines
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 pt-20">
              <div className="test-wrapper">
                <div className="clientsay-name d-flex">
                  <div className="client-say-icon">
                    <img src="/world-standards.png" alt="World Class Standards Icon" />
                  </div>
                  <div className="client-say-content align-self-center">
                    <h4>World class certification</h4>
                  </div>
                </div>
                <div className="test-text">
                  <p>✅ Utilizing cGMP and best practices used in established global markets
                   <br /> ✅ Safeguarding consumer health and providing cannabis testing certification under good practices
                   <br /> ✅
                  </p>
                </div>
              </div>
            </div>
            <div className="offset-md-3 col-md-6 offset-lg-0 col-lg-4 pt-20">
              <div className="test-wrapper">
                <div className="clientsay-name d-flex">
                  <div className="client-say-icon">
                    { /* <i><FontAwesomeIcon icon={faReceipt}/></i> */ }
                    <img src="/tech-lab.png" alt="Technologies and Laboratories Icon" />
                  </div>
                  <div className="client-say-content align-self-center">
                    <h4>Technologies and laboratories</h4>
                  </div>
                </div>
                <div className="test-text">
                  <p> ✅ Prioritizing innovation, technology, IT and logistics ensuring high standards.
                  < br/>✅ Automation in the cloud to optimizate services for a competitive edge in the global cannabis marketplace
                  < br/> ✅ Laboratories that provide GMP level certification for cannabis</p>
                </div>
              </div>
            </div>

          </div>

          <div className="row mt-60">
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
