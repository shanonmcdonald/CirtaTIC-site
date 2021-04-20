import Head from 'next/head'

import Header from '../components/index/header'
import Footer from '../components/footer'

const testingServices = [
    {
        title: 'Gold profile package for soil and water tests',
        link: 'gold-profile-package-for-soil-and-water-tests',
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
        bg: ['/goldseal_logo.png']
    }, {
        title: 'Silver profile package for soil and water tests',
        link: 'silver-profile-package-for-soil-and-water-tests',
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
        bg: ['/silverseal_logo.png']
    }, {
        title: 'Bronze profile package for soil and water tests',
        link: 'bronze-profile-package-for-soil-and-water-tests',
        //description: 'Test for compliance DL=< 0.3%',
        description:`
        ⦿ Water pH                   ⦿ Organic matter

        ⦿ Phosphorus
        ⦿ Potassium
        `,
        //icon: faCertificate,
        bg: ['/bronzeseal_logo.png']
    },{
        title: 'Multi-elemental profile in (oils)',
        link: 'multi-elemental-profile-in-oils',
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
        bg: ['/multielement_logo.png']
    },
     {
        title: 'Micro-nutrient composite tests',
        link:  'micro-nutrient-composite-tests',
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
        bg: ['/micronutrient_logo.png']
    }, {
        title: 'Gold package plant/soil pesticides testing',
        link:  'gold-package-plant-soil-pesticides-testing',
        //description: 'Total THC potency test DL =< 4ppm',
        description:`
        Plant tissue and soil pesticide test for 270 pesticides
        Organisation: GlobalGAP
        Methology:
        Intrumentation: Liquid chromatography + tandem mass
        spectrometry
        `,
        //icon: faPlusSquare,
        bg: ['/goldpesticide_logo.png'] // TODO SHANON: put image name here
    }, {
        title: 'Silver package plant/soil pesticide testing',
        link:  'silver-package-plant-soil-pesticide-testing',
        //description: 'THC (delta 8, 9) OH-THC,CBD, CBL, CBC, CBCA, CBDV, CBDVA, CBG, CBGA, CBN, CBNA, THCA-A, THCV, THCVA',
        description:`
        Plant tissue and soil pesticide test for 140 Pesticides
        Organisation: GlobalGAP
        Methology:
        Intrumentation: Gas chromatography + triple quadrupole mass spectrometer
        `,

        //icon: faFlask,
        bg: ['/silverpesticide_logo.png'] // TODO SHANON: put image name here
    },
    {
        title: 'Plant/soil heavy metal screening',
        link:  'plant-soil-heavy-metal-screening',
        //description: 'THC (delta 8, 9) OH-THC,CBD, CBL, CBC, CBCA, CBDV, CBDVA, CBG, CBGA, CBN, CBNA, THCA-A, THCV, THCVA',
        description:`
        Heavy metals testing for mercury(Hg) arsenic(As) cadmium(Cd) lead(Pb)
        Organisation: Association of Official Agricultural Chemists
        (International) + United States Pharmacopeia
        Methodology: AFVAN-SLMF-0022 + <USP> ch. 232
        Instrumentation: Inductively coupled plasma mass
        spectrometry
        `,
        bg: ['/plasma_bg.jpg'] // TODO SHANON: put image name here
        //icon: faFlask
    },
    {
        title: 'Quaternary ammouium herbicides',
        link:  'quaternary-ammouium-herbicides',
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
       bg: ['/Quaternary2_logo.png','/Quaternary1_logo.png'] // TODO SHANON: put image name here
        //icon: faExclamationTriangle
    },
    {
        title: 'Radiation test',
        link:  'radiation-test',
        description:`
        Radiation test for plant tissue, soil and water
        Organisation: Association of Official Agricultural Chemists
        (International)
        Methodology: AOAC section 973.67
        Instrumentation: Gamma-ray spectroscopic`,
       bg: ['/radiation_logo.png'] // TODO SHANON: put image name here
        //icon: faExclamationTriangle
    },
    {
        title: 'Specialty testing services',
        link:  'specialty-testing-services',
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
        bg: ['/speciality_logo.png'] // TODO SHANON: put image name here
        //icon: faExclamationTriangle
    }

]

const Services = () => {
    return testingServices.map(service => {
        return (
            <div className="container mt-4 py20" key={service.title}>
                <div className="row">
                    <div className="col">
                        <h3 style={{'margin': '50px 0'}} id={service.link}>{service.title}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5 offset-md-1">
                        <p className="service--description">{service.description}</p>
                    </div>
                    <div className="col-md-6 text-center">
                        <div className="row">
                           {service.bg && service.bg.map(b => {
                                return (
                                    <div className="col" key={b}>
                                        <img src={b} className="service__img" />
                                    </div>
                                )}
                            )}
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
                <div className="section-title text-center pt-60 mb-60 wows fadeInUps animateds">
                    <h1>Best practices soil and water testing services</h1>
                </div>

                <div className="">
                    <div className="container">
                            <div className="row">
                                {<div className="offset-md-1 col-md-5">
                                    <img src="/soilseedpage_logo.jpg" alt="Soil and Seed Testing" />
                                </div>}
                                <div className="col-md-5">
                                    <p>
                                    As we know soil and water is the frontier to cannabis farming and is arguably the most important aspect of cannabis production. Most farmers and cannabis producer are passionate about their soil and water content so we match their passion for soil and water through our testing services.
                                    <br />
                                    Soil is made up of complex living organisms and a single sample of soil contains billions of microorganisms which are feed, digestion, breath, being born and dying.
                                    <br />
                                    Soil dives into more of a complex systems interacting with water nutritions systems, converting nutrients from water to soil and beneficial organisms living within. Having a healthy soil systems protects your soil from being more susceptible to pests and parasites
                                    </p>
                                </div>
                            </div>
                        </div>
                </div>
                <section>
                    <Services />
                </section>
            </main>

            <Footer />
        </>
    )
}

export default Testing
