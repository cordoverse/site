import HeroEvent from '../../components/heroEvent';
import SpeakersEvent from '../../components/speakersEvent';
import LocationEvent from '../../components/locationEvent';
import FooterEvent from '../../components/footerEvent';
import TeamsEvent from '../../components/teams';

export default function Page() {
  return (
    <>
      <HeroEvent />
      <SpeakersEvent />
      <LocationEvent />
      <FooterEvent />
      {/* <TeamsEvent /> */}
    </>
  )
}
