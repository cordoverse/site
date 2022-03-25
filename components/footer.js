
import React from "react";
import SocialLinks from './socialLinks'


const Footer = () => {
    return (
        <div className="footer--bg-color mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 px-4 py-12 border-t-4 footer--border-color">
            <div className="flex flex-col items-center justify-center">
                <div className="flex items-center gap-x-8 mt-6">
                    <SocialLinks></SocialLinks>
                </div>
                <div className="flex items-center mt-6">
                    <p className="text-base leading-4 footer--text-color">
                        2022 <span className="font-semibold">Cordoverse</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
