const Day1 = () => {

    return (
        <section className="flex flex-col items-center justify-center bg-[#260E30] py-10">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-center text-4xl font-bold text-[#FEA7DD]">
                    Sumate al #FindeCriptoCba
                </h1>
                <div className="flex flex-col p-10">
                    <h2 className="text-center text-3xl font-bold text-[#EC6171]">
                        Cronograma de Actividades
                    </h2>
                </div>
                <h2 className="text-right text-4xl font-bold text-[#B967BA] mt-3">
                    Dia 1 - Sabado 14 de Mayo
                </h2>
                <div
                    className="my-4 flex w-full flex-col items-center rounded-lg border-2 border-[#EC6171] p-5 text-slate-200">
                    <h4 className="text-left text-4xl text-slate-50 normal-case">Inicio: 11.00 - Fin: 16.00</h4>
                    <h4 className="text-left text-4xl text-slate-50 normal-case">Workshop: Smart contract para mortales</h4>
                    <p className="p-3 text-center text-xl font-bold text-slate-200 normal-case">
                        Acerceta a conocer los conceptos fundamentales para que puedas empezar a desarrollarlos en Blockchain. EXCLUSIVO DEVELOPERS!
                    </p>
                    <p className="p-3 text-center text-xl font-bold text-slate-200 normal-case">
                        Los temas a tratar son:
                        <ol className="p-3 text-center text-xl font-bold text-slate-200 normal-case">
                            <li>1. Qué son los Smart Contracts</li>
                            <li>2. Introducción al desarrollos de smart contract</li>
                            <li>3. Desarrollo de proyecto de Smart Contract (En equipo)</li>
                            <li>4. Deploy de Smart Contract</li>
                            <li>5. Interacción de Smart Contract en la Red</li>
                        </ol>
                    </p>
                    <p className="p-3 text-center text-xl font-bold text-slate-200 normal-case">
                        Speakers: Germán Küber, Santi Moreno y Simonethg
                    </p>
                    <p className="p-3 text-center text-xl font-bold text-slate-200 normal-case">
                        Participan: Programadores, freelancers, desarrolladores. EXCLUSIVO DEVELOPERS! Trae tu compu y buena onda para pasar una jornada copada en el marco del #findecriptoCBA .
                    </p>
                    <p className="p-3 text-center text-xl font-bold text-slate-200 normal-case">
                        Organizado por: Cordoverse y CriptoEcosystem
                    </p>
                    <p className="p-3 text-center text-xl font-bold text-slate-200 normal-case">
                        Lugar: Bithouse. Ubicacion: José Roque Funes 1791, Córdoba
                    </p>
                    <p className="p-3 text-center text-xl font-bold text-slate-200 normal-case">
                        Precio: $600 pesos
                    </p>
                    <a
                        className="mt-10 text-black mb-10 rounded-lg bg-[#70d0c8] py-2 px-5 text-3xl font-bold"
                        href="https://tinyurl.com/2hatnf2m"
                        target="_blank"
                    >
                        Inscripción
                    </a>
                    <p className="p-3 text-center text-xl font-bold text-slate-200 normal-case">
                        De aca nos vamos todos al <a href="https://t.co/EsmkEgcAGa" className="text-[#70d0c8]" target="_blank">evento de DeFiLatam!</a>
                    </p>

                </div>
            </div>
        </section>
    )
}

export default Day1
