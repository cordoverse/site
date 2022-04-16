import React from "react";
import SocialLinks from "./socialLinks";

export default function index() {
    return (
        <div className>
            <div className=" bg-gradient-to-b from-[#EA29A4] to-[#0F1244] overflow-y-hidden flex flex-col items-center justify-center p-5">
                <section className="mx-auto container w-full py-36">
                    <div className="flex flex-col justify-center items-center">
                        <div className="md:text-5xl text-4xl font-black text-center text-white leading-snug lg:w-3/4">
                            <h2>Construyendo la comunidad</h2>
                        </div>
                        <div className="flex justify-center items-center mt-16">
                            <a href="https://discord.gg/ArbzAqFGPG" target="_blank" className="bg-[#FB2AAB] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-2xl	 transition duration-150 ease-in-out hover:bg-indigo-600 lg:font-bold  rounded text-white px-4 sm:px-10 border  py-2 sm:py-4">Quiero ser parte</a>
                        </div>
                        <div className="flex flex-col items-center mt-16">
                            <h3 className="text-3xl font-black text-center text-white">Seguinos en las redes</h3>
                            <div className="flex items-center gap-x-8 mt-4">
                                <SocialLinks></SocialLinks>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
