const Hero = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center p-5 bg-[url('/images/bg-cv.png')]">
      <img src="/images/logo-cv-crop.png" className="h-36" />
      <h1 className="text-center text-6xl font-bold text-[#FEA7DD]">
        Cordoverse Community
      </h1>
      <h2 className="text-right text-4xl font-bold text-[#B967BA]">
        Meetup V.1
      </h2>
      <div className="flex flex-row items-center justify-center">
        <div className="p-10">
          <p className="text-4xl text-[#FEA7DD]">
            Se viene el tunga tunga!
          </p>
        </div>
      </div>
      <a className="rounded-lg bg-[#70d0c8] py-2 px-5 text-3xl font-bold" href="https://www.eventbrite.com.ar/e/registro-cordoverse-community-meet-up-v1-307898943027?aff=Sitioweb" target="_blank">
        Quiero ir!
      </a>
    </div>
  )
}

export default Hero;
