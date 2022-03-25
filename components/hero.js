import React, { useState } from "react";

function Index() {
    const [show, setShow] = useState(false);
    return (
        <div className="hero--bg-color pb-12 overflow-y-hidden" style={{ minHeight: 700 }}>
            {/* Code block starts */}
            <dh-component>
                <div className="hero--bg-color">
                    <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
                        <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center hero--text-color font-black leading-7 md:leading-10">
                                CORDOVERSE
                            </h1>
                            <p className="mt-5 sm:mt-10 lg:w-10/12 text-fuchsia-400 font-normal text-center text-sm sm:text-lg">Comunidad crypto de Córdoba (🇦🇷)</p>
                            <p className="mt-5 sm:mt-10 lg:w-10/12 text-fuchsia-400 font-normal text-center text-sm sm:text-lg">Desde Cordoverse tenemos como objetivo conectar a la sociedad de la Provincia de Córdoba con el conocimiento y funcionamiento de las nuevas tecnologías digitales aplicadas en nuestra vida cotidiana que generan nuevas prácticas para mejorar nuestra calidad de vida y un mejor entendimiento del mundo.</p>
                        </div>
                        <div className="flex justify-center items-center">

                            <a href="https://discord.gg/epuHwfx8" target="_blank" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm">Discord</a>
                            <a href="https://twitter.com/cordoverse" target="_blank" className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-transparent transition duration-150 ease-in-out hover:border-indigo-600 lg:text-xl lg:font-bold  hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-10 py-2 sm:py-4 text-sm">Twitter</a>
                        </div>
                    </div>
                </div>
            </dh-component>
            {/* Code block ends */}
        </div>

    );
}

export default Index;
