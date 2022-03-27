import Hero from '../../components/events/v1/hero';
import Talks from '../../components/events/v1/talks';
import Location from '../../components/events/v1/location';
import Footer from '../../components/events/v1/footer';
import Teams from '../../components/events/v1/teams';

export default function Page() {
  return (
    <div class="bg-[url('/images/bg-cv.png')]">
      <Hero />
      <Talks />
      <Location />
      <Footer />
      {/* <Teams /> */}
    </div>
  )
}
