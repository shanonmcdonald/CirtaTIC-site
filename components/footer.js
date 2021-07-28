import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons'

const currentYear = new Date().getFullYear()

const Footer = () => {
    return (
        <footer>
            <div className="footer-area pt-110 pb-80 black-bg wows fadeInUps animateds">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 text-center text-md-left mb-4 mb-md-0">
                            <h4 className="white-color">Useful links</h4>
                            <ul className="footer-link-list white-color">
                                <li>
                                <   Link href="/services">
                                        <a>Services</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/preharvest-and-compliance-testing">
                                        <a>Preharvest & Compliance Testing</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/gmp-mandatory-testing">
                                        <a>GMP Mandatory Testing</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/soil-and-water-testing">
                                        <a>Soil & Water Testing</a>
                                    </Link>
                                </li>
                                <li>
                                    <a href="https://portal.cirtausa.com">
                                        Login / Signup
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 align-items-lg-center justify-content-center text-center">
                            <div className="footer-text">
                                <p>
                                    <a href="#">Cirta</a>
                                    <br />
                                    <span className="white-color">📱 +1-844-412-1435 </span>
                                    <br/>
                                    <a href="mailto:cirta@cirtausa.com" className="footer__a">📩 cirta@cirtausa.com</a>
                                    <br/>
                                    <span className="white-color">&#169; {currentYear} All Rights Reserved</span>
                                </p>
                            </div>
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
