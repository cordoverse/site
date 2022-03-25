import React from "react";

export default function index() {
    return (
        <div className>
            <div className="dark:bg-gray-900">
                <section className="mx-auto container w-full py-36">
                    <div className="flex flex-col justify-center items-center">
                        <div className="md:text-5xl text-4xl font-black text-center text-gray-800 dark:text-white leading-snug lg:w-3/4">
                            <h2>Construyendo la comunidad</h2>
                        </div>
                        <div className="flex justify-center items-center mt-16">
                            <a href="https://discord.gg/epuHwfx8" target="_blank" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm">Quiero ser parte</a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
