import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons'

const currentYear = new Date().getFullYear()

const Footer = () => {
    return (
        <footer>
            <div className="footer-area pt-110 pb-80 black-bg wows fadeInUps animateds">
                <div className="container">
                    <div className="row align-items-lg-center justify-content-center text-center">
                        <div className="footer-text">
                            <p>
                                <a href="#">Cirta</a>
                                <br />
                                <span className="white-color">📱 +1-844-412-1435 </span>
                                <br/>
                                <a href="mailto:cirta@cirtausa.com" className="footer__a">📩 sales@cirtausa.com</a>
                                <br/>
                                <span>&#169; {currentYear} All Rights Reserved</span>
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

export default Footer
