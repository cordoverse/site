import Hero from '../components/events/v1/hero'
import Talks from '../components/events/v1/talks'
import Location from '../components/events/v1/location'
import Social from '../components/events/v1/social'
import Footer from '../components/events/v1/footer'
import Head from 'next/head'

export default function Page() {
  return (
    <>
      <Head>
        <title>Meetup V.1 - Cordoverse</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:title"
          content="Cordoverse: Meetup V.1"
          key="title"
        />
        <meta
          property="og:description"
          content="Primer meetup de DAO Cordoverse. Nos juntamos para presentar la comunidad, contar sobre algunos proyectos y organizarnos."
        />
        <meta property="og:url" content="https://cordoverse.com/meetup1" />
        <meta
          property="og:image"
          content="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F255662309%2F181688482528%2F1%2Foriginal.20220328-125956?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C54%2C750%2C375&s=aee7913b9532fe1c0eac576b2da522a5"
        />
        <meta name="twitter:title" content="Cordoverse: Meetup V.1" />
        <meta name="twitter:site" content="https://cordoverse.com/meetup1" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="cordoverse" />
        <meta
          name="twitter:image"
          content="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F255662309%2F181688482528%2F1%2Foriginal.20220328-125956?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C54%2C750%2C375&s=aee7913b9532fe1c0eac576b2da522a5"
        />
        <meta
          name="twitter:description"
          content="Primer meetup de DAO Cordoverse. Nos juntamos para presentar la comunidad, contar sobre algunos proyectos y organizarnos."
        />
      </Head>
      <Hero />
      <Talks />
      <Location />
      <Social />
      <Footer />
    </>
  )
}
