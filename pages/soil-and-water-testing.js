{/*import Head from 'next/head'

import Header from '../components/index/header'
import Footer from '../components/footer'

const Testing = () => {
    return (
        <>
            <Head>
              <title>Soil and Water Testing - Cirta</title>
            </Head>

            <Header />

            <main className="main">
                <h1>Soil and Water Testing services</h1>
                <br/> <br/>

                <h3>Soil carbon to nitrogen ratio test</h3><br/>
                <ol>
                <li>SHSCN: C:N Ratio </li><br/>
                <li>Carbon to nitrogen ratio is the ratio of the molecular mass of
                carbon to the molecular mass of nitrogen in soil or compost</li>
                <li>Provides you with the contents of organic matter, which indicates information about
                the egology, climate and nutritions circlating within the soil</li>
                </ol>

                <br/> <br/>
                <h3>Soil texture test</h3><br/>
                <ol>
                <li> SHSTEXT: Texture </li><br/>
                <li> Testing for relative proportions of mineral particles
                of various soil fractions such as sand, slit and clay expressed in a percentage of overall sample</li>
                <li>Knowing the soil fraction content provides soil information of
                nutritional holding capacity, water retention, soil stability, drainage, aeration</li>
                </ol>

                <br/> <br/>
                <h3>Soil nitrogen level and different NH4(+) -N/NO3(-) -N ratios</h3><br/>
                <ol>
                <li>SHSTEXT2: NO3-N & NH4C.a </li><br/>
                <li>fertilizer nitrogen testing</li>
                <li>Nitrogen forms on nitrogen metabolism and main chemical composition of the soil</li>
                </ol>
                <br/> <br/>
                <h3>Soil health test</h3><br/>
                <ol>
                <li> A complete panel for testing the overall health of your soil</li>
                <li> OM, pH, BpH, P, K, Mg, Ca, Na, S, B, Cu, Mn, Fe, Zn, Al, CEC, % saturation of cations,
                 K:MG, EC, %P, %AL, Cl, Solvita CO2-C, PMN, Active C, Soil Health Index, NO3-N</li>
                </ol>
                 <br/> <br/>
                <h3>Physico-chemical analysis for tank water and irrigation</h3><br/>
                <ol>
                <li> Physico-chemical analysis rely on a wide variety of analysis techniques to know the intrinsic properties of molecules or atoms,
                 or their ability to react with specific reagents or when under defined stress</li>
                <li>Physico-chemical analysis rely on a wide variety of analysis techniques to know the intrinsic properties of molecules or atoms,
                 or their ability to react with specific reagents or when under defined stress</li>
                </ol>

            </main>

            <Footer />
        </>
    )
}

export default Testing
*/}


































import Head from 'next/head'

import Header from '../components/index/header'
import Footer from '../components/footer'
//import { faBug, faCertificate, faFlask, faTimes, faExclamationTriangle, faPlusSquare } from '@fortawesome/free-solid-svg-icons'


const testingServices = [
    {
        title: 'Gold profile package for soil and water tests',
        //link: 'microbiology-screening',
        description:`
        ⦿ Water pH              ⦿ Organic matter
        ⦿ Buffer pH             ⦿ Cation exchange capacity
                                           ⦿ Percent saturation
        ⦿ Phosphorus
        ⦿ Potassium
        ⦿ Calcium
        ⦿ Magnesium
        ⦿ Zinc
        ⦿ Manganese
        ⦿ Sulfur Boron
        ⦿ Iron
        ⦿ Copper
        ⦿ Sodium


        `,
        //description:"",
        //icon: faBug,
        //bg: ['/microbiology_bg.jpg']
    }, {
        title: 'Silver profile package for soil and water tests',
        //link: 'pesticides-screening',
        //description: '96 pesticides as per cannabis list with limits',
        description:`
        ⦿ Water pH                  ⦿ Organic matter
        ⦿ Buffer pH                 ⦿ Cation exchange capacity
                                                ⦿ Percent saturation
        ⦿ Phosphorus
        ⦿ Potassium
        ⦿ Calcium
        ⦿ Magnesium
          `,
        //icon: faTimes,
        //bg: ['/pesticide_bg.jpg']
    }, {
        title: 'Bronze profile package for soil and water tests',
        //link: 'hemp-flower-potency',
        //description: 'Test for compliance DL=< 0.3%',
        description:`
        ⦿ Water pH                   ⦿ Organic matter

        ⦿ Phosphorus
        ⦿ Potassium
        `,
        //icon: faCertificate,
        //bg: ['/gc_bg.jpg']
    },{
        title: 'Multi-elemental profile in (oils)',
        //link: 'hemp-flower-potency',
        //description: 'Test for compliance DL=< 0.3%',
        description:`
        ⦿ Calcium (Ca)
        ⦿ Copper (Cu)
        ⦿ Potassium (K)
        ⦿ Sodium (Na)
        ⦿ Iron (Fe)
        ⦿ Magnesium (Mg)
        ⦿ Manganese (Mn)
        ⦿ Zinc (Zn)
        `,
        //icon: faCertificate,
        //bg: ['/gc_bg.jpg']
    },
     {
        title: 'Micro-nutrient composite tests',
        //link: 'aflatoxin',
        //description: 'B1, B2, G1, G2',
        description:`
        ⦿ Zinc
        ⦿ Manganese
        ⦿ Sulfur
        ⦿ Boron
        ⦿ Iron
        ⦿ Copper
        ⦿ Sodium
      `,

      //icon: faExclamationTriangle,
        //bg: ['/lc_bg.jpg', '/mc_bg.jpg']
    }, {
        title: 'Gold package plant/soil pesticides testing',
        //link: 'hemp-products-test',
        //description: 'Total THC potency test DL =< 4ppm',
        description:`
        Plant tissue and soil pesticide test for 270 pesticides
        Organisation: GlobalGAP
        Methology:
        Intrumentation: Liquid chromatography + tandem mass
        spectrometry
        `,
        //icon: faPlusSquare,
        //bg: ['/gc_bg.jpg', '/mc_bg.jpg'] // TODO SHANON: put image name here
    }, {
        title: 'Silver package plant/soil pesticide testing',
        //link: 'total-cannabis-cannabinoid-profile',
        //description: 'THC (delta 8, 9) OH-THC,CBD, CBL, CBC, CBCA, CBDV, CBDVA, CBG, CBGA, CBN, CBNA, THCA-A, THCV, THCVA',
        description:`
        Plant tissue and soil pesticide test for 140 Pesticides
        Organisation: GlobalGAP
        Methology:
        Intrumentation: Gas chromatography + triple quadrupole mass spectrometer
        `,

        //icon: faFlask,
        //bg: ['/canna-anal_bg.jpg'] // TODO SHANON: put image name here
    },
    {
        title: 'Plant/soil heavy metal screening',
        //link: 'total-cannabis-cannabinoid-profile',
        //description: 'THC (delta 8, 9) OH-THC,CBD, CBL, CBC, CBCA, CBDV, CBDVA, CBG, CBGA, CBN, CBNA, THCA-A, THCV, THCVA',
        description:`
        Heavy metals testing for mercury(Hg) arsenic(As) cadmium(Cd) lead(Pb)
        Organisation: Association of Official Agricultural Chemists
        (International) + United States Pharmacopeia
        Methodology: AFVAN-SLMF-0022 + <USP> ch. 232
        Instrumentation: Inductively coupled plasma mass
        spectrometry
        `,
        //bg: ['/plasma_bg.jpg'] // TODO SHANON: put image name here
        //icon: faFlask
    },
    {
        title: 'Quaternary ammouium herbicides',
        //link: 'aflatoxin',
        description:`
        Tests for:
        ⦿ Chromequat
        ⦿ Mepiquat
        ⦿ Diquat
        ⦿ Paraquat

        Organisation: GlobalGAP
        Methology:
        Intrumentation: Liquid chromatography + tandem mass
        spectrometry

        `,
       // bg: ['/airoven_bg.jpg'] // TODO SHANON: put image name here
        //icon: faExclamationTriangle
    },
    {
        title: 'Radiation test',
        //link: 'aflatoxin',
        description:`
        Radiation test for plant tissue, soil and water
        Organisation: Association of Official Agricultural Chemists
        (International)
        Methodology: AOAC section 973.67
        Instrumentation: Gamma-ray spectroscopic`,
       //bg: ['/airoven_bg.jpg'] // TODO SHANON: put image name here
        //icon: faExclamationTriangle
    },
    {
        title: 'Specialty testing services',
        //link: 'aflatoxin',
        description:`
        ⦿ Phosphurus (P2 - Strong Bray)
        ⦿ Phosphurus (Sodium Bicarbonate, Olsen P)
        ⦿ Loss on Ignition (LOI)
        ⦿ Sodium absorption rate (SAR)
        ⦿ Bio assay

        Fertilizer analysis:
        ⦿ Total nitrogen, phosphorus and potassium
        ⦿ Total nitrogen, phosphate, poly-phosphate and pH
        ⦿ Total nitrogen, phosphate and potassium
        ⦿ Specific gravity
        ⦿ Sulfur and zinc
        ⦿ Urea
        ⦿ pH

        Limestone analysis
        ⦿ Sieve analysis (8,30,60 mesh screen scores)+percent
        calcium carbonate equivelent
        ⦿ Calcium and magnesium in limestone
        ⦿ Calcium and magnesium in limestone
        ⦿ % calcium and magnesium in limestone
        ⦿ Gypsum (calcium and sulfur)

        Soil nitrogen:
        ⦿ Nitrate-nitrogen (bench method)
        ⦿ Amino sugar nitrogen-ISNT
        ⦿ Ammonium

        Manure analysis package profile test:
        ⦿ Total nitrogen
        ⦿ Ammonia nitrogen
        ⦿ Phosphorus
        ⦿ Potassium
        ⦿ Total sulfur
        ⦿ Calcium
        ⦿ Magnesium
        ⦿ Sodium
        ⦿ Iron
        ⦿ Aluminum
        ⦿ Manganese
        ⦿ Copper
        ⦿ Zinc
        ⦿ Boron
        ⦿ % solid
        ⦿ % water pH








        `,
       // bg: ['/airoven_bg.jpg'] // TODO SHANON: put image name here
        //icon: faExclamationTriangle
    }

]

const Services = () => {
    return testingServices.map(service => {
        return (
            <div className="container mx60" key={service.title}>
                <div className="row">
                    <div className="col">
                            <h3 style={{'margin': '50px 0'}} key={service.link} id={service.link}>{service.title}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5 offset-md-1">
                        <p className="service--description">{service.description}</p>
                    </div>
                    <div className="col-md-6 text-center">
                        <div className="row">
                           {/* {service.bg.map(b => {
                                return (
                                    <div className="col" key={b}>
                                        <img src={b} className="service__img" />
                                    </div>
                                )}
                            )}*/}
                        </div>
                    </div>
                </div>
            </div>
        )
    })
}

const Testing = () => {
    return (
        <>
            <Head>
              <title>GMP Mandatory Testing - Cirta</title>
            </Head>

            <Header />

            <main className="main gmp__testing">
                <section className="">
                    <div className="section-title text-center pt-60 mb-60 wows fadeInUps animateds">
                        <h1>Best practices soil and water testing services</h1>
                    </div>

                    <div className="">
                        <div className="container">
                            <div className="row">
                                {<div className="col-md-5">
                                    <img src="/soilseedpage_logo.jpg" />
                                </div>}
                                <div className="col-md-5 offset-md-1">
                                    <p>
                                    As we know soil and water is the frontier to cannabis farming and is arguably the most important aspect of cannabis production. Most farmers and cannabis producer are passionate about their soil and water content so we match their passion for soil and water through our testing services. Soil is made up of complex living organisms and a single sample of soil contains billions of microorganisms which are feed, digestion, breath, being born and dying. Soil dives into more of a complex systems interacting with water nutritions systems, converting nutrients from water to soil and beneficial organisms living within. Having a healthy soil systems protects your soil from being more susceptible to pests and parasites
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <Services />
                </section>
            </main>

            <Footer />
        </>
    )
}

export default Testing
