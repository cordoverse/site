const Hero = () => {
  return (
    <div class="flex h-screen flex-col items-center justify-center p-5">
      <img src="/images/logo-cv-crop.png" class="h-36" />
      <h1 class="text-center text-6xl font-bold text-[#FEA7DD]">
        Cordoverse Community
      </h1>
      <h2 class="text-right text-4xl font-bold text-[#B967BA]">
        Meetup V.1
      </h2>
      <div class="flex flex-row items-center justify-center">
        <div class="p-10">
          <p class="text-4xl text-[#FEA7DD]">
            Se viene el tunga tunga!
          </p>
        </div>
      </div>
      <a class="rounded-lg bg-[#B967BA] hover:bg-[#FEA7DD] py-2 px-5 text-3xl font-bold" href="https://www.eventbrite.com.ar/e/registro-cordoverse-community-meet-up-v1-307898943027?aff=Sitioweb" target="_blank">
        Quiero ir!
      </a>
    </div>
  )
}

export default Hero;
