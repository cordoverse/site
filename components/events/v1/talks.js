const Talks = () => {
  const talks = [
    {
      id: 1,
      title: 'Presentación',
      description: 'Apertura de nuestro primer evento crypto en La Docta.',
      image:
        'https://pbs.twimg.com/profile_images/977496875887558661/L86xyLF4_400x400.jpg',
    },
    {
      id: 2,
      title: "Tok'N Show",
      description:
        'tiene como objetivo crear colecciones NFTs rescatando las historias, vivencias y objetos de nuestro Rock Nacional a lo largo de su historia. Es así que, mediante la Tecnología Blockchain buscamos generar una experiencia nueva e innovadora entre el público y los artistas.',
      image:
        'https://pbs.twimg.com/profile_images/1476729377266229250/nYLX0Nje_400x400.jpg',
    },
    {
      id: 3,
      title: 'CordobArteNFT',
      description:
        'es un proyecto enfocado en promover el arte local digital a través de galerías móviles de NFT, dispuestas en puntos estratégicos de la ciudad, para que el visitante pueda, de forma fácil y cómoda, conocer, elegir y adquirir cualquiera de las obras allí listadas.',
      image:
        'https://pbs.twimg.com/profile_images/1480052202886426624/nJhZhBgb_400x400.jpg',
    },
    {
      id: 4,
      title: 'Fútbol Eterno',
      description:
        'es una plataforma de fan engagement impulsada por NFTs dinámicos. Generamos colecciones de NFTs oficiales y licenciadas para los clubes representando a su hinchada, y eso les permite el acceso a la primera plataforma fan-to-earn para sumar puntos/tokens y poder mejorar su NFT y hacerlo más raro y valioso.',
      image:
        'https://pbs.twimg.com/profile_images/1480052202886426624/nJhZhBgb_400x400.jpg',
    },
  ]
  return (
    <section class="flex h-full flex-col items-center justify-center bg-[#260E30] py-10">
      <div class="flex flex-col items-center justify-center">
        <h1 class="text-center text-4xl font-bold text-[#FEA7DD]">
          Sumate al primer evento de la comunidad de Cordoverse!
        </h1>
        <div class="flex flex-col p-10">
          <h2 class="text-center text-3xl font-bold text-[#EC6171]">
            Cronograma de charlas
          </h2>
          {talks.map((talk) => (
            <div
              class="my-4 flex w-full flex-col items-center rounded-lg border-2 border-[#EC6171] p-5"
              key={talk.id}
            >
              <h4 class="text-left text-4xl text-slate-50">{talk.title}</h4>
              <p class="p-3 text-center text-xl font-bold text-slate-200">
                {talk.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Talks
