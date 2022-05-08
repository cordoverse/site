import Hero from '../components/events/crypto-weekend/hero'
import Summary from '../components/events/crypto-weekend/summary'
import Day1 from '../components/events/crypto-weekend/day-1'
import Day2 from '../components/events/crypto-weekend/day-2'
import Location from '../components/events/crypto-weekend/location-bithouse'
import Social from '../components/events/v1/social'
import Head from 'next/head'
import Script from 'next/script'

export default function Page() {
    return (
        <>
            <Script
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
            />

            <Script strategy="lazyOnload">
                {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
      `}
            </Script>
            <Head>
                <title>Finde Crypto CBA</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta
                    property="og:title"
                    content="Cordoverse: Finde crypto cba"
                    key="title"
                />
                <meta
                    property="og:description"
                    content="Findecriptocba."
                />
                <meta property="og:url" content="https://cordoverse.com/findecryptocba" />
                <meta
                    property="og:image"
                    content="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F255662309%2F181688482528%2F1%2Foriginal.20220328-125956?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C54%2C750%2C375&s=aee7913b9532fe1c0eac576b2da522a5"
                />
                <meta name="twitter:title" content="Cordoverse: Finde crypto cba" />
                <meta name="twitter:site" content="https://cordoverse.com/findecryptocba" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content="cordoverse" />
                <meta
                    name="twitter:image"
                    content="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F255662309%2F181688482528%2F1%2Foriginal.20220328-125956?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C54%2C750%2C375&s=aee7913b9532fe1c0eac576b2da522a5"
                />
                <meta
                    name="twitter:description"
                    content="Findecriptocba."
                />
            </Head>
            <Hero />
            <Summary />
            <Day1 />
            <Day2 />
            <Location />
            <Social />
        </>
    )
}
