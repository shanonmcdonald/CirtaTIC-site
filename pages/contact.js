import Head from 'next/head'

import Header from '../components/index/header'
import Footer from '../components/footer'


import React, { Component } from 'react';


export default function Contact () {
    return (
        <>
        <Head >
              <title>Contact - Cirta</title>
        </Head>

        <Header />

        <main className="main contact">
            <header>
                <div className="section-title text-center pt-60 wows fadeInUps animateds contact-page">
                    <h1>Contact</h1>
                </div>
            </header>

            <div id="contact" className="contact-area instame-theme-bg pos-rel">
                {/*<div className="contact-bg-img" >*/}
                {/*</div>&*/}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="contact-wrapper wows fadeInUps animateds" data-wows-delay="0.3s">
                                <div className="section-title section-title-white mb-70">
                                    <h5> <span className="border-left-1"></span>send a message</h5>
                                    <h2> <span className="heading-fill">Contact</span> Us</h2>
                                </div>
                                <form id="contacts-us-form" className="contacts-us-form" action="#">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="contacts-icon contactss-name">
                                                <input type="text" placeholder="Your  Full Name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="contacts-icon contactss-email">
                                                <input type="email" placeholder="Enter Your Email" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="contacts-icon contactss-website">
                                                <input type="text" placeholder="Your Phone Number" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="contacts-icon contactss-message">
                                                <textarea name="comments" id="comments" cols="30" rows="10"
                                                    placeholder="Writte Message"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="contacts-us-form-button text-center">
                                                <button>send your message
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>





        <Footer />
        </>
    )
  }




