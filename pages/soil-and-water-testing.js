import Head from 'next/head'

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



                <p></p>

                <h3>Soil carbon to nitrogen ratio test</h3>
                <ol>
                <il>SHSCN: C:N Ratio </il>
                <il>Carbon to nitrogen ratio is the ratio of the molecular mass of
                carbon to the molecular mass of nitrogen in soil or compost</il>
                <il>Provides you with the contents of organic matter, which indicates information about
                the egology, climate and nutritions circlating within the soil</il>
                </ol>
                <h3>Soil texture test</h3>
                <ol>
                <il> SHSTEXT: Texture </il>
                <il> Testing for relative proportions of mineral particles
                of various soil fractions such as sand, slit and clay expressed in a percentage of overall sample</il>
                <il>Knowing the soil fraction content provides soil information of
                nutritional holding capacity, water retention, soil stability, drainage, aeration</il>
                </ol>
                <h3>Soil nitrogen level and different NH4(+) -N/NO3(-) -N ratios</h3>
                <ol>
                <il>SHSTEXT2: NO3-N & NH4C.a </il>
                <il>fertilizer nitrogen testing</il>
                <il>Nitrogen forms on nitrogen metabolism and main chemical composition of the soil</il>
                </ol>
                <h3>Soil health test</h3>
                <ol>
                <il> A complete panel for testing the overall health of your soil</il>
                <il> OM, pH, BpH, P, K, Mg, Ca, Na, S, B, Cu, Mn, Fe, Zn, Al, CEC, % saturation of cations,
                 K:MG, EC, %P, %AL, Cl, Solvita CO2-C, PMN, Active C, Soil Health Index, NO3-N</il>
                </ol>
                <h3>Physico-chemical analysis for tank water and irrigation</h3>
                <ol>
                <il> Physico-chemical analysis rely on a wide variety of analysis techniques to know the intrinsic properties of molecules or atoms,
                 or their ability to react with specific reagents or when under defined stress</il>
                <il>Physico-chemical analysis rely on a wide variety of analysis techniques to know the intrinsic properties of molecules or atoms,
                 or their ability to react with specific reagents or when under defined stress</il>
                </ol>

            </main>

            <Footer />
        </>
    )
}

export default Testing
