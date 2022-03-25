import React, { useState } from "react";
import SocialLinks from './socialLinks'
import Image from 'next/image'
import { Icon } from '@iconify/react';

export default function index() {

    const [show, setshow] = useState(false);
    return (
        <div className="header--bg-color border-b-4 header--border-color">
            <nav className="2xl:container 2xl:mx-auto sm:py-3 sm:px-7 py-4 px-4">
                {/* For large and Medium-sized Screen */}
                <div className="flex justify-between ">
                    <div className=" flex space-x-3 items-center">
                        <Image
                            priority
                            src="/images/logo.png"
                            className="rounded-full"
                            height={70}
                            width={70}
                            alt="logo"
                        />
                        <h1 className="header--logo-name font-normal text-2xl leading-6">CORDOVERSE</h1>
                    </div>
                    <div className="hidden sm:flex flex-row items-center space-x-6">
                        <SocialLinks></SocialLinks>
                    </div>
                    {/* Burger Icon */}
                    <div id="bgIcon" onClick={() => setshow(!show)} className={`flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  justify-center items-center sm:hidden cursor-pointer`}>
                        <Icon className={`${show ? 'hidden' : ''}`} icon="eva:menu-fill" color="#fea7dd" width="32" height="32" />
                        <Icon className={`${show ? 'block' : 'hidden'}`} icon="eva:close-fill" color="#fea7dd" width="32" height="32" />
                    </div>
                </div>
                {/* Mobile and small-screen devices (toggle Menu) */}
                <div id="MobileNavigation" className={`${show ? 'block' : 'hidden'} sm:hidden mt-4 mx-auto`}>
                    <div className="flex flex-row items-center justify-center space-x-6">
                        <SocialLinks></SocialLinks>
                    </div>
                </div>
            </nav>
        </div>
    );
}
