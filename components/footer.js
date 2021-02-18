import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons'

const currentYear = new Date().getFullYear()

export default function Footer () {
    return (
        <footer>
            <div className="footer-area pt-110 pb-80 black-bg wows fadeInUps animateds">
                <div className="container">
                    <div className="row align-items-lg-center justify-content-center text-center">
                        <div className="footer-text">
                            <p>
                                <a href="#">CirtaTIC</a>
                                <br />
                                &#169; {currentYear} All Rights Reserved 
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div className="footer-wrapper mt-60 mb-40">
                                <div className="back-btn text-center">
                                    <a href="#" id="scrollToTop" className="btn transparent-btn" title="Scroll top">
                                        <i><FontAwesomeIcon icon={faLongArrowAltUp} /></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}