const Talks = () => {
  const talks = [
    {
      id: 1,
      title: 'Presentacion',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed sem eu quam mattis dapibus. Curabitur vestibulum luctus metus. Pellentesque.',
      image:
        'https://pbs.twimg.com/profile_images/977496875887558661/L86xyLF4_400x400.jpg',
    },
    {
      id: 2,
      title: 'Token',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed sem eu quam mattis dapibus. Curabitur vestibulum luctus metus. Pellentesque.',
      image:
        'https://pbs.twimg.com/profile_images/1476729377266229250/nYLX0Nje_400x400.jpg',
    },
    {
      id: 3,
      title: 'CordobARTE',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed sem eu quam mattis dapibus. Curabitur vestibulum luctus metus. Pellentesque.',
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
              class="flex flex-col w-full items-center rounded-lg border-2 border-[#EC6171] my-4 p-5"
              key={talk.id}
            >
              <h4 class="text-slate-50 text-4xl text-left">{talk.title}</h4>
              <p class="p-3 text-center text-lg font-bold text-slate-200">
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