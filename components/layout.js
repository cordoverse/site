import Head from 'next/head'
import Header from './header'
import Footer from './footer'

export default function Layout({children}) {

    return (

        <div className=''>
             <Head>
                <title>Cordoverse</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="title" content="cordoverse" />
                <meta name="description" content="El layer cero del crypto espacio cordobes." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.cordoverse.com/" />
                <meta property="og:title" content="cordoverse" />
                <meta property="og:description" content="El layer cero del crypto espacio cordobes" />
                <meta property="og:image" content="https://www.cordoverse.com/images/og.png" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.cordoverse.com/" />
                <meta property="twitter:title" content="cordoverse" />
                <meta property="twitter:description" content="El layer cero del crypto espacio cordobes." />
                <meta property="twitter:image" content="https://www.cordoverse.com/images/og.png" />
            </Head>
            {/* <Header></Header> */}
            <main>{children}</main>
            <Footer></Footer>
        </div>
    )
}


