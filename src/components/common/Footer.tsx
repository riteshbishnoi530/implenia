"use client";
import { FOOTER_LIST } from "@/utils/helper";
import Link from "next/link";
import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (email === "" || message === "") {
          alert("Please fill in all fields");
        } else {
          setEmail("");
          setMessage("");
        }
      };
    return (
        <div id="contact" className="bg-black pt-[138px] pb-[83px] max-md:py-16 max-sm:py-10 px-5">
            <div className="max-w-[1117px] flex gap-10 max-md:gap-6 flex-wrap mx-auto justify-between">
                <div className="max-w-[456px] w-full flex justify-between max-[500.98px]:flex-col gap-x-24 gap-y-6">
                    <div className="max-w-[289px]">
                        <p className="font-black text-base text-white leading-[20.11px] tracking-[-0.22px]">
                            Implenia Innovation Hub
                        </p>
                        <p className="leading-[20.11px] tracking-[-0.22px] text-white">
                            Thurgauerstrasse 101A <br /> 8152 Glattpark (Opfikon)
                        </p>
                        <Link
                            className="leading-[20.11px] tracking-[-0.22px] text-white"
                            href={"mailto:innovation@implenia.com"}
                        >
                            innovation@implenia.com
                        </Link>
                        <p className="font-black mt-10 max-md:mt-5 max-sm:mt-2 text-base text-white leading-[20.11px] tracking-[-0.22px]">
                            Implenia Innovation Hub
                        </p>
                        <p className="leading-[20.11px] tracking-[-0.22px] text-white">
                            This revised version is based on Adobe Kickbox which is licensed
                            under the Creative Commons Attribution License.
                        </p>
                        <p className="leading-[20.11px] mt-10 max-md:mt-5 max-sm:mt-2 tracking-[-0.22px] text-white">
                            Data Protection I Imprint
                        </p>
                        <p className="leading-[12.57px] mt-[38px] max-md:mt-5  text-xs tracking-[-0.22px] text-white">
                            Copyright © {year} Imlenia. Alle Rechte vorbehalten.
                        </p>
                    </div>
                    <div className="max-w-[77px] flex flex-col">
                        <p className="font-black text-base mb-5 max-[500.98px]:mb-2 text-white leading-[20.11px] tracking-[-0.22px]">
                            Sitemap
                        </p>
                        {FOOTER_LIST.map((item, index) => (
                            <Link
                                href={item.link}
                                key={index}
                                className="leading-[20.11px] tracking-[-0.22px] hover:text-custom-red transition-all duration-300 ease-linear text-white"
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="font-black text-base mb-[19px] max-md:mb-3 text-white leading-[20.11px] tracking-[-0.22px]">
                        Contact
                    </p>
                    <form className="w-[273px]">
                        <div className="max-w-[189px] max-md:max-w-full">
                            <input
                                type="email"
                                required
                                className="text-black placeholder:text-black py-[17px] max-lg:py-3 px-[19px] outline-none w-full bg-white"
                                placeholder="Ihre E-Mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <textarea
                            required
                            className="w-full resize-none text-black placeholder:text-black mt-2 outline-none px-[15px] min-h-[121px] max-lg:min-h-24 py-[18px] bg-white"
                            placeholder="Ihre E-Mail"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        <div className="w-full justify-end flex">
                            <button  onClick={handleSubmit} className="py-[7px] px-[23px] hover:scale-110 transition-all duration-300 ease-linear bg-custom-red text-white font-bold text-sm">
                                SENDEN
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Footer;
