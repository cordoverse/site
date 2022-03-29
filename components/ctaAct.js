import React from "react";
import Link from 'next/link'

export default function index() {
    return (
        <div className="bg-[#0F1244]">
            <div className="2xl:mx-auto 2xl:container md:px-20 px-4 md:py-12 py-9">
                <div className="relative rounded-md">

                    <div className="text-xl relative z-20 bg-gradient-to-r from-[#B967BA] to-transparent w-full h-full top-0 md:p-16 p-6 flex flex-col justify-between ">
                        <div>
                            <h1 className="text-4xl md:text-6xl font-bold md:leading-10 leading-9 text-white sm:w-auto w-64 mb-6 md:mb-12">Los eventos de crypto, blockchain, NFT, DAO, DeFi</h1>
                            <p className="text-2xl md:text-4xl leading-6 text-white lg:w-8/12 md:w-10/12  2xl:pr-12 mb-6 md:mb-12">También van a suceder en Córdoba</p>
                            <p className="text-2xl md:text-4xl leading-6 text-white lg:w-8/12 md:w-10/12  2xl:pr-12 mb-6 md:mb-12">Esta comunidad va a ser lo posible para conectar interesados en el tema</p>
                        </div>
                        <div className="flex justify-start">
                            <Link href="/meetup1">
                                <a className="bg-[#EC6171] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-2xl md:text-4xl transition duration-150 ease-in-out hover:bg-indigo-600 lg:font-bold  rounded text-white px-4 sm:px-10 border  py-2 sm:py-4">Próximo Evento</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}