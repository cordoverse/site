const Index = () => {
  return (
    <section class="flex h-full w-screen flex-col items-center justify-center bg-[#260E30]">
      <div class="flex h-72 w-screen flex-row items-center justify-around">
        <div class="flex flex-col items-start">
          <h2 class="text-right text-6xl font-bold text-[#FEA7DD]">
            1 de Abril, 18Hs
          </h2>
          <h2 class="text-right text-6xl font-bold text-[#FEA7DD]">
            Mercado Alberdi
          </h2>
        </div>
        <div>
          <h3 class="text-right text-3xl font-bold text-[#FEA7DD]">
            Mendoza 741, Córdoba
          </h3>
          <h5 class="text-right text-2xl font-bold text-[#FEA7DD]">
            Entrada gratuita limitada.
          </h5>
        </div>
      </div>
      <iframe
        class="h-72 w-screen drop-shadow-lg py-10"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.2818235217023!2d-64.19936258424866!3d-31.406360502910896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943299c318d5b2c9%3A0x453aa48aa4ddcc12!2sMercado%20Alberdi!5e0!3m2!1sen!2sar!4v1648235953188!5m2!1sen!2sar"
        loading="lazy"
      />
    </section>
  )
}

export default Index
