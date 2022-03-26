import SocialLinks from "./socialLinks"

const Index = () => {
  return (
    <section class="flex h-full max-w-full flex-col items-center justify-center bg-[#260E30]">
      <div class="flex w-screen flex-col items-center justify-center">
        <h2 class="text-right text-2xl font-bold text-[#FEA7DD]">Unite y participá en la construcción de la comunidad local crypto en Córdoba!</h2>
      </div>
      <div class="p-10 flex flex-row">
        <SocialLinks />
      </div>
    </section>
  )
}

export default Index
