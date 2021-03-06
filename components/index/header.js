import Image from 'next/image'
import Link from 'next/link'

function alert (e) {
    e.preventDefault();
    window.alert('Contact us alert box');
}

export default function Header () {
    return (
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
                                            <Image
                                                src="/CirtaTIC_Logo_web.png"
                                                alt="CirtaTIC logo"
                                                width={75}
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
                                { /* <div className="menu-bar info-bar f-right">
                                    <ul className="list-inline">
                                        <li className="list-inline-item">Log in</li>
                                    </ul>
                                </div> */ }
                                <div className="header-icon f-right d-none d-md-block">
                                    <ul className="list-inline">
                                        <li className="list-inline-item"><Link href="/services"><a>Services</a></Link></li>
                                        { /* <li className="list-inline-item"><a href="#about">About</a></li> */ }
                                        <li className="list-inline-item"><a href="#" onClick={alert}>Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}