const Index = () => {
  const speakers = [
    {
      id: 1,
      name: 'Vitalik Buterin',
      image:
        'https://pbs.twimg.com/profile_images/977496875887558661/L86xyLF4_400x400.jpg',
    },
    {
      id: 2,
      name: 'ElChango.eth',
      image:
        'https://pbs.twimg.com/profile_images/1476729377266229250/nYLX0Nje_400x400.jpg',
    },
    {
      id: 3,
      name: 'pablito.eth',
      image:
        'https://pbs.twimg.com/profile_images/1480052202886426624/nJhZhBgb_400x400.jpg',
    },
  ]
  return (
    <section class="flex h-full max-w-full flex-col items-center justify-center bg-[#260E30]">
      <div class="flex max-w-3xl flex-row items-center justify-center">
        <h1 class="text-right text-6xl font-bold text-[#FEA7DD]">Speakers</h1>
        <div class="flex flex-col p-10">
          <div class="flex flex-row items-center">
            {speakers.map((speaker) => (
              <>
                <img
                  key="01"
                  className={`shadow-solid box-content inline-block h-14 w-14 rounded-full border-2 border-[#FEA7DD] object-cover text-white`}
                  src={speaker.image}
                  alt={speaker.name}
                />
                <p class="p-3 text-right text-2xl font-bold text-[#FEA7DD]">
                  {speaker.name}
                </p>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Index
