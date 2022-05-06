import Head from 'next/head'
import Main from '../components/events/cryptoweekend/main'

export default function Page() {
  return (
    <>
      {/* <Script
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
      </Script> */}
      <Head>
        <title>Finde Cripto CBA</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:title"
          content="Finde Cripto CBA"
          key="title"
        />
        <meta
          property="og:description"
          content=""
        />
        <meta property="og:url" content="https://cordoverse.com/findecriptocba" />
        <meta
          property="og:image"
          content="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F255662309%2F181688482528%2F1%2Foriginal.20220328-125956?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C54%2C750%2C375&s=aee7913b9532fe1c0eac576b2da522a5"
        />
        <meta name="twitter:title" content="Finde Cripto CBA" />
        <meta name="twitter:site" content="https://cordoverse.com/findecriptocba" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="cordoverse" />
        <meta
          name="twitter:image"
          content="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F255662309%2F181688482528%2F1%2Foriginal.20220328-125956?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C54%2C750%2C375&s=aee7913b9532fe1c0eac576b2da522a5"
        />
        <meta
          name="twitter:description"
          content=""
        />
      </Head>
      <Main />
    </>
  )
}
