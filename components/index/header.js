import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Sidebar from '../sidebar'

import Link from 'next/link'

function alert (e) {
    e.preventDefault();
    window.alert('Contact us alert box');
}

export default function Header () {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <>
            <header id="sticky-header" className="header-transparent">
                <div className="header-top-area header-area pl-55 pr-55">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xl-5 col-lg-5 col-md-4 col-6">
                                <div className="header-top-wrapper">
                                    <div className="logo f-left">
                                        { /* <a href="index.html"> */ }
                                        <Link href="/">
                                            <a>
                                                <img
                                                    src="Cirta-logo-final.png"
                                                    alt="Cirta_logo"
                                                    width={65}
                                                    height={75}
                                                />
                                            </a>
                                        </Link>
                                        { /* </a> */ }
                                    </div>
                                    { /* <div className="header-top-info f-left d-none d-lg-block">
                                    </div> */ }
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-7 col-md-8 col-6">
                                <div className="header-right-wrapper">
                                    <div className="menu-bar info-bar f-right">
                                        <a onClick={() => setSidebarOpen(!sidebarOpen)} className="menu-tigger">
                                            <i><FontAwesomeIcon icon={faBars} /></i>
                                        </a>
                                    </div>
                                    <div className="header-icon f-right d-none d-md-block">
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><a href="https://portal.cirtausa.com" target="_blank">Cirta client portal</a></li>
                                        </ul>
                                    </div>
                                    <div className="logo f-right pt-1">
                                        <Link href="/">
                                            <a>
                                                <img
                                                    src="americanflag_logo.png"
                                                    alt="Cirta_logo"
                                                    width={60}
                                                    height={35}
                                                />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </>
    )
}
