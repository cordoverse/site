import Hero from '../../components/events/v1/hero';
import Talks from '../../components/events/v1/talks';
import Location from '../../components/events/v1/location';
import Social from '../../components/events/v1/social';
import Footer from '../../components/events/v1/footer';

export default function Page() {
  return (
    <div class="bg-[url('/images/bg-cv.png')]">
      <Hero />
      <Talks />
      <Location />
      <Social />
      <Footer />
    </div>  
  )
}
