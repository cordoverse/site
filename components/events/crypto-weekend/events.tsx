const Events = () => {
    const Events = [
        {
            id: 1,
            title: 'Workshop: Smart contract para mortales',
            description: 'Smart Contracts para Mortales quiere acercarte los conceptos fundamentales para que puedas empezar a desarrollar en Blockchain. Los temas a tratar son: 1. Qué son los Smart Contracts 2. Introducción al desarrollos de smart contract 3. Desarrollo de proyecto de Smart Contract(En equipo) 4. Deploy de Smart Contract 5. Interacción de Smart Contract en la Red.',
            locationName: 'Bithouse',
            locationAddress: 'José Roque Funes 1791, Córdoba',
            date: '14 de Mayo',
            startTime: '11.00',
            endTime: '16.00',
            participants: 'Desarrolladores y perfiles tecnicos',
            url: 'https://tinyurl.com/2hatnf2m',
            organizedBy: 'Cordoverse y CriptoEcosystem',
            price: '$600 pesos',
            image: 'https://pbs.twimg.com/profile_images/977496875887558661/L86xyLF4_400x400.jpg',
        },
        {
            id: 2,
            title: 'Meetup Presencial - DeFi LATAM - CÓRDOBA',
            description: 'Vení a charlar sobre blockchain, criptos y web3. Conocé a otros usuarios y desarrolladores del ecosistema argentino y de LATAM en una reunión relajada y entre amigos.',
            locationName: 'Hood',
            locationAddress: 'Av Rafael Nuñez 4780',
            date: '14 de Mayo',
            startTime: '19.00',
            endTime: '01.00',
            participants: 'Publico en general',
            url: 'https://t.co/EsmkEgcAGa',
            organizedBy: 'DeFiLatam',
            price: 'FREE',
            image: 'https://pbs.twimg.com/profile_images/977496875887558661/L86xyLF4_400x400.jpg',
        },
        {
            id: 3,
            title: 'Desayuno Mujeres en cripto',
            description: 'Juntada para conocer a las mujeres en crypto de Cba.',
            locationName: 'Encontrate',
            locationAddress: 'AXG, Montevideo 611, X5000 Córdoba',
            date: '15 de Mayo',
            startTime: '11.00',
            endTime: '14.00',
            participants: 'Solamente mujeres',
            url: 'https://t.co/jhqbS4uRSY',
            organizedBy: 'Mujeres en Crypto',
            price: 'FREE',
            image: 'https://pbs.twimg.com/profile_images/977496875887558661/L86xyLF4_400x400.jpg',
        },
        {
            id: 4,
            title: 'Expo Blockchain FindeCriptoCBA',
            description: 'Una expo blockchain donde vas a poder recorrer, conocer y conversar con los founders de diferentes proyectos y comunidades del mundo blockchian.',
            locationName: 'Bithouse',
            locationAddress: 'José Roque Funes 1791, Córdoba',
            date: '14 de Mayo',
            startTime: '11.00',
            endTime: '16.00',
            participants: 'Desarrolladores y perfiles tecnicos',
            url: 'https://tinyurl.com/ycfvvvbn',
            organizedBy: 'Cordoverse y CriptoEcosystem',
            price: 'FREE',
            image: 'https://pbs.twimg.com/profile_images/977496875887558661/L86xyLF4_400x400.jpg',
        }
    ]
    return (
        <section className="flex h-full flex-col items-center justify-center bg-[#260E30] py-10">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-center text-4xl font-bold text-[#FEA7DD]">
                    Sumate al #FindeCriptoCba
                </h1>
                <div className="flex flex-col p-10">
                    <h2 className="text-center text-3xl font-bold text-[#EC6171]">
                        Cronograma de Actividades
                    </h2>
                    {Events.map((event) => (
                        <div
                            className="my-4 flex w-full flex-col items-center rounded-lg border-2 border-[#EC6171] p-5"
                            key={event.id}
                        >
                            <h4 className="text-left text-4xl text-slate-50 normal-case">{event.title}</h4>
                            <p className="p-3 text-center text-xl font-bold text-slate-200 normal-case">
                                {event.description}
                            </p>
                            <p className="p-3 text-center text-xl font-bold text-slate-200 normal-case">
                                Lugar: {event.locationName}. Ubicacion: {event.locationAddress}
                            </p>
                            <p className="p-3 text-center text-xl font-bold text-slate-200 normal-case">
                                Dia: {event.date}. Inicio: {event.startTime} - Fin: {event.endTime}
                            </p>
                            <p className="p-3 text-center text-xl font-bold text-slate-200 normal-case">
                                Participan: {event.participants}
                            </p>
                            <p className="p-3 text-center text-xl font-bold text-slate-200 normal-case">
                                Organizado por: {event.organizedBy}
                            </p>
                            {event.price != 'FREE' &&
                                <p className="p-3 text-center text-xl font-bold text-slate-200 normal-case">
                                    Precio: {event.price}
                                </p>
                            }
                            <a
                                className="mt-10 mb-10 rounded-lg bg-[#70d0c8] py-2 px-5 text-3xl font-bold"
                                href={event.url}
                                target="_blank"
                            >
                                Inscripción
                            </a>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Events
