import Layout from '../components/layout'
import Hero from '../components/hero'
import CtaTitle from '../components/ctaTitle'
import CtaAct from '../components/ctaAct'
import Script from 'next/script'

export default function Home() {
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
      <Layout>
        <Hero />
        <CtaTitle />
        <CtaAct />
      </Layout>
    </>
  )
}
