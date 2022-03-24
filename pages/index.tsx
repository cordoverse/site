import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {

  return (
    
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Cordoverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className='flex w-full flex-1 flex-col items-center justify-center px-20 text-center bg-gray-700'>
        {/* <Image
          priority
          src="/images/logo.jpg"
          className=""
          height={144}
          width={144}
          alt="logo"
        />
        <h2>Cordoverse</h2> */}
        
      </header>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center pb-20">
        <h1 className="text-6xl font-bold">
          Bienvenidos al{' '}
          <a className="text-blue-600" href="https://discord.gg/tVW6e9FH">
            Cordoverse
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Primera DAO de Córdoba{' '}
        </p>
        <p className="mt-3 text-xl">
          <code className="rounded-md pt-3 font-mono text-lg">
            cuyo propósito es potenciar el ecosistema crypto de la región fomentando espacios de encuentro, conversación y co-creación #WAGMI
          </code>
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://twitter.com/Cordoverse"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Twitter &rarr;</h3>
            <p className="mt-4 text-xl">
              Seguinos en twitter
            </p>
          </a>

          <a
            href="https://discord.gg/tVW6e9FH"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Discord &rarr;</h3>
            <p className="mt-4 text-xl">
              Unite a nuestro discord
            </p>
          </a>

          <a
            href="#"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Eventos &rarr;</h3>
            <p className="mt-4 text-xl">
              Segui y participa en nuestros eventos
            </p>
          </a>

          <a
            href="#"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Participa &rarr;</h3>
            <p className="mt-4 text-xl">
              Te invitamos a ser parte
            </p>
          </a>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}


