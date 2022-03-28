import { Icon } from '@iconify/react'

const Location = () => {
  return (
    <section class="flex h-full w-screen flex-col items-center justify-center bg-[#260E30]">
      <div class="flex w-96 flex-row items-center justify-center">
        <div class="flex flex-col items-start justify-start">
          <div class="flex flex-row items-center justify-center mb-5">
            <Icon
              icon="arcticons:calendar-proton-1"
              class="mr-5"
              color="#fea7dd"
              width="45"
              height="45"
            />
            <h2 class="text-right text-6xl font-bold text-[#FEA7DD]">
              1 de Abril, 18Hs
            </h2>
          </div>
          <div class="flex flex-col items-center justify-center mb-5">
            <div class="flex flex-row items-center">
              <Icon
                icon="et:map-pin"
                class="mr-5"
                color="#fea7dd"
                width="40"
                height="40"
              />
              <h2 class="text-right text-6xl font-bold text-[#FEA7DD]">
                Mercado Alberdi
              </h2>
            </div>
            <div class="w-full flex justify-end">
              <h3 class="text-right text-3xl font-bold text-[#FEA7DD]">
                Mendoza 741, Córdoba
              </h3>
            </div>
          </div>
        </div>
      </div>
      <iframe
        class="h-72 w-screen py-10 drop-shadow-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.2818235217023!2d-64.19936258424866!3d-31.406360502910896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943299c318d5b2c9%3A0x453aa48aa4ddcc12!2sMercado%20Alberdi!5e0!3m2!1sen!2sar!4v1648235953188!5m2!1sen!2sar"
        loading="lazy"
      />
      <a
        class="mb-10 rounded-lg bg-[#B967BA] py-2 px-5 text-3xl font-bold hover:bg-[#FEA7DD]"
        href="https://www.eventbrite.com.ar/e/registro-cordoverse-community-meet-up-v1-307898943027?aff=Sitioweb"
        target="_blank"
      >
        Quiero ir!
      </a>
    </section>
  )
}

export default Location
