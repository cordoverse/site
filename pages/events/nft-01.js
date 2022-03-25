import Layout from '../../components/layout'
import HeroEvent from '../../components/heroEvent';
import SpeakersEvent from '../../components/speakersEvent';
import LocationEvent from '../../components/locationEvent';

export default function Page() {
  return (
    <Layout>
      <HeroEvent />
      <SpeakersEvent />
      <LocationEvent />
    </Layout>
  )
}
