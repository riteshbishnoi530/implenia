"use client";
import React, { useState } from "react";
import CustomHeading from "./common/CustomHeading";
import Image from "next/image";
const HowItWork = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const youtubeHandler = () => {
        setIsVideoPlaying(true);
    };

    return (
        <div className="bg-off-white pt-[128px] pb-[144px] max-lg:py-20 max-md:py-16 max-sm:py-10">
            <div className="px-5">

                <div className="max-w-[1112px] mx-auto">
                    <CustomHeading text="HOW IT WORKS" />
                    <div className="md:px-6">
                        <div className="cursor-pointer mt-16 max-lg:mt-12 max-md:mt-8 max-sm:mt-4 w-full relative" >
                            <Image onClick={youtubeHandler} src="/assets/images/how-it-work-img.webp" alt="logo" width={1064} height={580} />
                            {isVideoPlaying ? (
                                <iframe
                                    src="https://www.youtube.com/embed/dLKYFu_sMTM?autoplay=1"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full rounded-3xl absolute top-0"
                                />
                            ) : (
                                <div className="w-full max-w-[372px] bg-custom-yellow py-[15px] px-[3px] max-lg:max-w-[300px] max-md:max-w-[250px] max-sm:max-w-[180px] absolute top-[24px] left-[29px] max-lg:top-2 max-lg:left-2">
                                    <p className="text-center text-[21px] max-lg:text-base max-sm:text-[8px] leading-custom-sm font-bold max-w-[375px] mx-auto text-black">
                                        VIDEO CAN BE EXCHANGED FOR CAMPAIGNS.
                                    </p>
                                    <p className="max-lg:text-base max-sm:text-[8px] text-center text-[21px] leading-custom-sm font-bold text-black pt-7 max-lg:pt-2 max-sm:pt-2">
                                        -Titel: Name of Campaign
                                    </p>
                                    <p className="max-lg:text-base max-sm:text-[8px] text-center text-[21px] leading-custom-sm font-bold text-black">
                                        -Button: Join the campaign!
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWork;
