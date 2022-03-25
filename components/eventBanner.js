import React from "react";
const Index = () => {
    return (
        <div>
            <div className="relative py-6 lg:py-8">
                <img className="z-0 w-full h-full absolute inset-0 object-cover" src="https://tuk-cdn.s3.amazonaws.com/assets/webapp/common/bg_image_dark.png" alt="bg" />
                <div className="z-10 relative container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
                    <div className="container">
                        <h4 className="text-2xl font-bold leading-tight text-white">[Evento 101]</h4>
                        <ul className="flex flex-col md:flex-row items-start md:items-center text-gray-300 text-sm mt-3">
                            <li className="flex items-center mr-4">
                                <div className="mr-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-paperclip" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9 l6.5 -6.5" />
                                    </svg>
                                </div>
                                <span className="mr-3">[Presencial-donde?]</span>
                            </li>
                            <li className="flex items-center mr-4 mt-4 md:mt-0">
                                <div className="mr-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trending-up" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <polyline points="3 17 9 11 13 15 21 7" />
                                        <polyline points="14 7 21 7 21 14" />
                                    </svg>
                                </div>
                                <span className="mr-3">[que?]</span>
                            </li>
                            <li className="flex items-center mt-4 md:mt-0">
                                <div className="mr-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plane-departure" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M15 12h5a2 2 0 0 1 0 4h-15l-3 -6h3l2 2h3l-2 -7h3z" transform="rotate(-15 12 12) translate(0 -1)" />
                                        <line x1={3} y1={21} x2={21} y2={21} />
                                    </svg>
                                </div>
                                <span>[Cuando?]</span>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-6 md:mt-0">
                        <button className="mr-3 bg-white focus:outline-none transition duration-150 ease-in-out rounded text-indigo-600 hover:bg-gray-300 px-5 py-2 text-sm">[reservar]</button>
                        <button className="transition focus:outline-none duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">[invitar]</button>
                    </div>
                </div>
            </div>
            ;
        </div>
    );
};
export default Index;
