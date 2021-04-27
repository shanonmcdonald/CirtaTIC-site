import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Sidebar = ({sidebarOpen, setSidebarOpen}) => {
    return(
        <React.Fragment>
            <div id="menu-overlay" className={sidebarOpen ? "menu-overlay main-menu active" : "menu-overlay main-menu"}>
                <div className="mt-3 text-right pr-4 menu-close">
                    <a onClick={() => setSidebarOpen(!sidebarOpen)}>
                        <i><FontAwesomeIcon icon={faTimes} /></i> Close
                    </a>
                </div>
                <nav className="primary-nav">
                    <ul>
                        <li><Link href="/">🏡 Home</Link></li>
                        <li><Link href="/services">🧑🏻‍🔬 Services</Link></li>
                        <li><Link href="/contact">📇 Contact</Link></li>
                        <li><a href="https://portal.cirtausa.com">🖥️ Login/Sign up</a></li>
                    </ul>
                </nav>
                <div className="company-info">
                    { /* <a href="#" className="info-email link-underline cursor-link">hello@bdevs.com</a>
                    <a href="#" className="info-tel link-underline cursor-link">(888) 524-3624</a>
                    <div className="info-address">
                        <p>6WWH556 - issued in California (CA) in year 2012.</p>
                    </div> */ }
                </div>
            </div>
            <div className="offcanvas-overly"></div>
        </React.Fragment>
    )
}

export default Sidebar;
