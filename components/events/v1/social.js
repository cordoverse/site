import { Icon } from '@iconify/react'

const Social = () => {
  const links = [
    {
      name: 'Twitter',
      url: 'https://twitter.com/cordoverse',
      icon: 'arcticons:twitter',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/cordoverse',
      icon: 'arcticons:instagram',
    },
    {
      name: 'Discord',
      url: 'https://discord.gg/epuHwfx8',
      icon: 'arcticons:discord',
    },
  ]
  return (
    <section className="flex h-full flex-col items-center justify-center bg-[#260E30] p-10">
      <div className="flex w-screen flex-col items-center justify-center">
        <h2 className="text-center text-3xl font-bold text-[#FEA7DD]">
          Unite y participá en la construcción de la comunidad local crypto en
          Córdoba!
        </h2>
      </div>
      <div className="flex flex-row p-10">
        {links.map(({ name, url, icon }) => (
          <a
            className="rounded-lg py-2 px-2 text-2xl font-bold "
            href={url}
            target="_blank"
          >
            <Icon icon={icon} color="#fea7dd" width="40" height="40" />
          </a>
        ))}
      </div>
    </section>
  )
}

export default Social;
