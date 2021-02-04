import Image from 'next/image'

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
                                        <Image
                                            src="/CirtaTIC_Logo_web.png"
                                            alt="CirtaTIC logo"
                                            width={75}
                                            height={75}
                                        />
                                    { /* </a> */ }
                                </div>
                                { /* <div className="header-top-info f-left d-none d-lg-block">
                                </div> */ }
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-8 col-6">
                            <div className="header-right-wrapper">
                                <div className="menu-bar info-bar f-right">
                                    <ul className="list-inline">
                                        <li className="list-inline-item">Log in</li>
                                    </ul>
                                </div>
                                <div className="header-icon f-right d-none d-md-block">
                                    <ul className="list-inline">
                                        <li className="list-inline-item"><a href="#about">About us</a></li>
                                        <li className="list-inline-item"><a href="/services">Services</a></li>
                                        <li className="list-inline-item"><a href="/services">Contact</a></li>
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