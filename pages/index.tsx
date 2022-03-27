import Layout from '../components/layout'
import Hero from '../components/hero'
import CtaJoin from '../components/ctaJoin'
import CtaTitle from '../components/ctaTitle'
import CtaAct from '../components/ctaAct'
import Feature from '../components/feature'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <CtaTitle />
      <CtaAct />
      <Feature />
      <CtaJoin />
    </Layout>
  )
}
