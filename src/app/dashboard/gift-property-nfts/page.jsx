"use client";

import Image from "next/image";
import profileImg from "/public/lisa.jpg";
import { useRef, useState } from "react";
import GiftNftPopup from "@/components/popups/giftNftPopup/GiftNftPopup";
import Link from "next/link";

const Page = () => {
    const [uniqueNftId, setUniqueNftId] = useState("");
    const [propertyData, setPropertyData] = useState([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    ]);
    const [giftPopup, setGiftPopup] = useState(false);
    const [activeButton, setActiveButton] = useState(null);
    const [fetchData, setFetchData] = useState(false);
    const buttonRef = useRef();

    const handleGiftClick = (ind) => {
        setActiveButton(ind === activeButton ? null : ind);
    };

    const handleGiftPopup = () => {
        setGiftPopup(!giftPopup);
    };

    return (
        <div className="py-4 w-full px-2 sm:px-10">
            {/* heading */}
            <h1 className="text-heading-sm lg:text-heading-lg font-semibold leading-[18px] sm:leading-[44px] text-black">
                Property NFTs
            </h1>

            {/* body */}
            <div className="bg-gradient-to-r bg-primary p-[1px] rounded-[24px] mt-10 mb-[7.5rem]">
                <div className="w-full pb-10 pt-5 px-5  rounded-[24px] bg-white">
                    {/* cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-12 ">
                        {propertyData?.map((item, ind) => {
                            return (
                                <>
                                    <div key={ind} className="p-2 rounded-[15px] bg-primary ">
                                        <div className="relative w-full">
                                            {giftPopup && (
                                                <GiftNftPopup
                                                    giftPopup={giftPopup}
                                                    setGiftPopup={handleGiftPopup}
                                                    category="property"
                                                    uniqueNftId={uniqueNftId}
                                                    setFetchData={setFetchData}
                                                />
                                            )}
                                            <Link href="/dashboard/propertyNftDetail/11">
                                                <Image
                                                    src={profileImg}
                                                    alt="house"
                                                    width="100"
                                                    height="100"
                                                    className="w-full h-[250px] object-cover bg-cover block rounded-lg cursor-pointer"
                                                /></Link>

                                        </div>
                                        <div className="p-4 pb-6 space-y-2 text-black">
                                            <h3 className="text-[10px] sm:text-[12px] lg:text-[18px] font-semibold">
                                                84XR7V7V+HV
                                            </h3>
                                            <p className="text-[8px] lg:text-[14px] w-[75%] text-black/60 font-semibold">
                                                {"15 W 8th Ave, Vancouver, BC V5Y 1M8, Canada"
                                                    .split(" ")
                                                    .slice(0, 6)
                                                    .join(" ")}
                                                {"15 W 8th Ave, Vancouver, BC V5Y 1M8, Canada".split(
                                                    " "
                                                ).length > 4 && "..."}
                                            </p>
                                            <div className="flex justify-between items-center">
                                                <div className="relative">
                                                    <button
                                                        ref={buttonRef}
                                                        onClick={() => handleGiftClick(ind)}
                                                        className="text-white bg-white/0 border-0 outline-none font-semibold cursor-pointer"
                                                    >
                                                        More Details
                                                    </button>
                                                    {activeButton === ind && (
                                                        <div
                                                            onClick={() => {
                                                                setUniqueNftId(ind);
                                                            }}
                                                        >
                                                            <button
                                                                onClick={handleGiftPopup}
                                                                className={` 
                                bg-black hover:bg-black/70 text-white absolute top-6 left-0 px-4 py-[3px] border-0 outline-none  whitespace-nowrap rounded-xl cursor-pointer`}
                                                            >
                                                                Gift NFT
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                                <Link href="/dashboard/propertyNftDetail/11">
                                                    <button
                                                        type="button"
                                                        className={`  r bg-yellow-300 hover:bg-[#e8da7f] rounded-[12px] text-black/70 shadow-lg text-black px-5 py-1.5 border-none cursor-pointer text-sm  font-semibold`}
                                                    >
                                                        View
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
