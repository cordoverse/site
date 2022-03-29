import React, { useState } from "react";

function Index() {
    const [show, setShow] = useState(false);
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0F1244] to-[#EA29A4]  items-center flex h-screen flex-col p-5">
            <div className="container flex flex-col h-screen items-center justify-center">
                <h1 className="text-8xl text-[#FB2AAB] mb-4 sm:mb-8">CORDOVERSE</h1>
                <img src="/images/logo-cv-crop.png" class="h-24 sm:h-36 mb-6 sm:mb-12"/>
                <p className="lg:w-10/12 text-white font-normal text-4xl md:text-6xl text-center mb-6 sm:mb-12">Comunidad crypto de Córdoba (🇦🇷)</p>
                <p className="lg:w-3/4 text-white font-normal text-2xl md:text-4xl text-center">Desde Cordoverse tenemos como objetivo conectar a la sociedad de la Provincia de Córdoba con el conocimiento y funcionamiento de las nuevas tecnologías digitales aplicadas en nuestra vida cotidiana que generan nuevas prácticas para mejorar nuestra calidad de vida y un mejor entendimiento del mundo.</p>
            </div>
        </div>

    );
}

export default Index;
