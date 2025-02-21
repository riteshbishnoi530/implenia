"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HEADER_LIST } from "@/utils/helper";

const Header = () => {
    const [showSlide, setShowSlide] = useState(false);

    const toggleSidebar = () => setShowSlide(!showSlide);
    const closeNavbar = () => setShowSlide(false);

    useEffect(() => {
        const body = document.body;
        if (showSlide) {
            body.classList.add('overflow-hidden');
        } else {
            body.classList.remove('overflow-hidden');
        }
    }, [showSlide]);
    return (
        <div
            className="max-w-[1177px] w-full mx-auto px-4 py-[18.5px] max-md:py-[5px]">
            <div className="flex justify-between items-center">
                <Link href="/">
                    <Image
                        className="pointer-events-none max-lg:size-[76px] max-md:size-[40px]"
                        src="/assets/images/logo.webp"
                        alt="logo"
                        width={93}
                        height={93}
                    />
                </Link>
                <div
                    className={`flex gap-5 max-lg:gap-3 max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:fixed max-lg:top-0 max-lg:w-full max-lg:h-full max-lg:bg-white duration-300 ease-linear z-20 ${showSlide ? "max-lg:left-0" : "max-lg:left-full"}`} >
                    {HEADER_LIST.map((obj, i) => (
                        <ul key={i}>
                            <li className="flex gap-1 flex-row justify-center items-center">
                                <Link href={obj.link}onClick={closeNavbar} className="text-base text-black font-bold max-lg:text-xl hover:text-custom-yellow transition-all duration-300 ease-linear" >
                                    {obj.title}
                                </Link>
                            </li>
                        </ul>
                    ))}

                </div>
                <div onClick={toggleSidebar} className="z-[21] flex-col gap-2 max-sm:gap-[3px] lg:hidden flex cursor-pointer" >
                    <span
                        className={`${showSlide
                            ? "w-9 max-sm:w-4 max-sm:h-[3px] h-1 bg-black rotate-45 translate-y-5 max-sm:translate-y-2 duration-300 ease-linear rounded"
                            : "w-9 max-sm:w-4 max-sm:h-[3px] h-1 bg-black duration-300 ease-linear rounded"
                            }`}
                    ></span>
                    <span
                        className={`${showSlide
                            ? "w-9 max-sm:w-4 h-1 max-sm:h-[3px] bg-black opacity-0 duration-300 ease-linear"
                            : "w-9 max-sm:w-4 h-1 max-sm:h-[3px] bg-black rounded duration-300 ease-linear"
                            }`}
                    ></span>
                    <span
                        className={`${showSlide
                            ? "w-9 max-sm:w-4 h-1 max-sm:h-[3px] bg-black -rotate-45 -translate-y-1 duration-300 ease-linear rounded"
                            : "w-9 max-sm:w-4 h-1 max-sm:h-[3px] bg-black duration-300 ease-linear rounded"
                            }`}
                    ></span>
                </div>
            </div>
        </div>
    );
};

export default Header;
