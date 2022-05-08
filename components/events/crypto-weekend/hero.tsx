const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center p-5 bg-[#260E30]">
            <h1 className="text-center text-6xl font-bold text-[#FEA7DD]">
                FINDE CRIPTO EN CBA
            </h1>
            <h2 className="text-right text-4xl font-bold text-[#B967BA] mt-3">
                Organizan: Cordoverse, Cripto Ecosystem y Mujeres en Cripto
            </h2>
            <div className="flex flex-row items-center justify-center">
                <div className="p-10 text-center">
                    <p className="text-4xl text-[#FEA7DD]">
                        14 Y 15 DE MAYO DE 2022
                    </p>
                    <p className="text-4xl text-[#FEA7DD]">En el mundo cripto, las comunidades lo son todo.</p>
                    <a className="text-4xl text-[#FEA7DD]"
                        href="https://twitter.com/hashtag/FindeCriptoCBA"
                        target="_blank">#FindeCriptoCBA</a>
                </div>
            </div>
        </div>
    )
}

export default Hero;
