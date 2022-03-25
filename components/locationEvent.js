const Index = () => {
  return (
    <section class="flex h-full max-w-full flex-col items-center justify-center bg-[#260E30]">
      <div class="flex max-w-3xl flex-row items-center justify-center">
        <h1 class="text-right text-6xl font-bold text-[#FEA7DD]">Lugar</h1>
        <div class="p-10">
          <iframe
            class="h-72 w-72 rounded-lg border-2 border-[#FEA7DD] drop-shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.2818235217023!2d-64.19936258424866!3d-31.406360502910896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943299c318d5b2c9%3A0x453aa48aa4ddcc12!2sMercado%20Alberdi!5e0!3m2!1sen!2sar!4v1648235953188!5m2!1sen!2sar"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

export default Index
