import React, { useState } from 'react'
import Head from 'next/head'

import Header from '../components/index/header'
import Footer from '../components/footer'
import Scripts from '../components/headScripts'


const Testing = () => {
    return (
        <>
            <Head>
                <title>FAQ - Cirta</title>

                <meta name="description" content="Frequently asked questions" />

                <Scripts />
            </Head>

            <Header />

            <main className="main gmp__testing">
                <section>
                    <div className="section-title text-center pt-60 mb-60 wows fadeInUps animateds">
                        <h1>FAQ</h1>
                    </div>

                </section>
            </main>

            <Footer />
            </>
    )
}
export default Testing