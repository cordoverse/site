
import React from "react";
import SocialLinks from './socialLinks'

const Footer = () => {
    return (
        <div className="bg-[#0F1244] mx-auto xl:px-20 lg:px-12 sm:px-6 px-4 px-4 py-12">
            <div className="flex flex-col items-center justify-center">
                <div className="flex items-center gap-x-8 mt-6">
                    <SocialLinks></SocialLinks>
                </div>
                <div className="flex items-center mt-6">
                    <p className="leading-4 text-white text-2xl">
                        2022 <span className="font-semibold">Cordoverse</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
