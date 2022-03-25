
import React from "react";
import SocialLinks from './socialLinks'

const Footer4 = () => {
    return (
        <div className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 px-4 py-12">
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-8">
                    <p className="hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800">About</p>
                    <p className="hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800">Contact us</p>
                    <p className="hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800">Terms of Service</p>
                    <p className="hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800">Privacy Policy</p>
                </div>
                <div className="flex items-center gap-x-8 mt-6">
                    <SocialLinks></SocialLinks>
                </div>
                <div className="flex items-center mt-6">
                    <p className="text-base leading-4 text-gray-800">
                        2022 <span className="font-semibold">Cordoverse</span>
                    </p>
                    <div className="border-l border-gray-800 pl-2 ml-2">
                        <p className="text-base leading-4 text-gray-800">Any righys reserved</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer4;
