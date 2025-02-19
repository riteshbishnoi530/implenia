"use client";
import React, { useState } from "react";
import CustomHeading from "./common/CustomHeading";

const HowItWork = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const youtubeHandler = () => {
        setIsVideoPlaying(true);
    };

    return (
        <div className="bg-[#F5F5F5] pt-[128px] pb-[144px] max-lg:py-20 max-md:py-16 max-sm:py-10">
            <div className="px-4">

                <div className="max-w-[1112px] mx-auto">
                    <CustomHeading text="HOW IT WORKS" />
                    <div className="md:px-6">
                        <div onClick={youtubeHandler} className="mt-16 max-lg:mt-12 max-md:mt-8 max-sm:mt-4 w-full bg-center bg-cover bg-no-repeat bg-youtube-img max-xl:min-w-min h-[580px] max-lg:h-[430px] max-md:h-[370px] max-sm:h-[300px] max-[450.98px]:h-[200px] rounded-3xl relative" >
                            {isVideoPlaying ? (
                                <iframe
                                    src="https://www.youtube.com/embed/dLKYFu_sMTM?autoplay=1"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full rounded-3xl"
                                />
                            ) : (
                                <div className="w-full max-w-[372px] bg-[#F3B72C] py-[9px] px-[3px] max-lg:max-w-[300px] max-md:max-w-[250px] max-sm:max-w-[180px] absolute top-[24px] left-[29px] max-sm:top-2 max-sm:left-2">
                                    <p className="text-center text-[21px] max-lg:text-base max-sm:text-sm leading-[21px] font-bold max-w-[375px] mx-auto text-black">
                                        VIDEO CAN BE EXCHANGED FOR CAMPAIGNS.
                                    </p>
                                    <p className="max-lg:text-base max-sm:text-sm text-center text-[21px] leading-[21px] font-bold text-black pt-7 max-md:pt-4 max-sm:pt-2">
                                        -Titel: Name of Campaign
                                    </p>
                                    <p className="max-lg:text-base max-sm:text-sm text-center text-[21px] leading-[21px] font-bold text-black">
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
