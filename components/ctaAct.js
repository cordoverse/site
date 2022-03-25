import React from "react";
import Link from 'next/link'

export default function index() {
    return (
        <div className="ctaact--bg-color">
            <div className="2xl:mx-auto 2xl:container md:px-20 px-4 md:py-12 py-9">
                <div className="relative rounded-md">
                    
                    <div className="text-xl relative z-20 bg-gradient-to-r from-blue-700 to-transparent w-full h-full z-40 top-0 md:p-16 p-6 flex flex-col justify-between rounded-md ">
                        <div>
                            <h1 className="md:text-5xl text-3xl font-bold md:leading-10 leading-9 text-white sm:w-auto w-64">Los eventos de crypto, blockchain, NFT, DAO, DeFi</h1>
                            <p className="text-lg leading-6 text-white xl:w-5/12 lg:w-8/12 md:w-10/12  2xl:pr-12 mt-4">Tambien van a suceder en Cordoba</p>
                            <p className="text-lg leading-6 text-white xl:w-5/12 lg:w-8/12 md:w-10/12  2xl:pr-12 mt-4">Esta comunidad va a ser lo posible para conectar interesados en el tema</p>
                        </div>
                        <div className="md:mt-12 mt-20">
                            <Link href="/events/nft-01">
                                <a className="text-base font-medium leading-4 text-indigo-700 bg-white sm:w-auto w-full rounded p-4 focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-white">Proximo Evento</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}