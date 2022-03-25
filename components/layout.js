import Head from 'next/head'
import Header from './header'
import Footer from './footer'

export default function Layout({children}) {

    return (

        <div className=''>
             <Head>
                <title>Cordoverse</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </div>
    )
}


