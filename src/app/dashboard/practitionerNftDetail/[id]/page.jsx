"use client"

import LoadingSpinner from '@/components/commons/LoadingSpinner'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import house from "/public/homee.jpeg"
import BlockchainDataPopup from '@/components/popups/blockchainData/BlockchainDataPopup'
import { toast } from 'react-hot-toast'
import CustomButton from '@/components/formElements/CustomButton'

const PractitionerNftDetail = () => {
    const [dataPopup, setDataPopup] = useState(false);
    const [loading, setLoading] = useState(false);

    // copy to clipboard
    const handleCopy = () => {
        const copiedTxt = document.getElementById("copyTxt").innerText;
        navigator.clipboard.writeText(copiedTxt);
        toast.success("copied!");
    };

    // handle viwe blockchain data content in different devices
    const [blockchainContent, setBlockchainContent] = useState("");
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowSize(window.innerWidth);
        if (windowSize < 650) {
            setBlockchainContent("Blockchain");
        } else {
            setBlockchainContent("View Blockchain Data");
        }
    };

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [windowSize]);

    const handleBlockChainDataPopup = () => {
        setDataPopup(true)
    }

    const jsonData = {
        "tokenId": "1690815567251",
        "owner": "558f37e8b6854d73b571f3f757396889",
        "nftDetail": {
            "name": "Imtiaz Hussain",
            "email": "xoxebog993@sparkroi.com",
            "address": "11111 Stoney View Ln, St. Louis, MO 63146, USA",
            "image": "https://consortiamedia.s3.amazonaws.com/1690231998905avatar.jpg"
        }
    };

    return (
        <>
            {dataPopup && (
                <BlockchainDataPopup
                    setDataPopup={setDataPopup}
                    data={jsonData}
                />
            )}
            <div className="py-4 w-full px-2 sm:px-10">
                <h1 className="text-heading-xs sm:text-heading-sm lg:text-heading-lg font-semibold leading-[18px] sm:leading-[44px] text-black">
                    Practitioner NFT Details
                </h1>
                <div className="bg-primary p-[1px] rounded-[24px] mt-10 mb-[7.5rem]">
                    <div

                        className="w-full bg-white py-10 px-5 sm:p-10 rounded-[24px]"
                    >
                        <div className="py-[16px] md:px-[25px] md:py-[24px] bg-light-blue rounded-3xl">
                            <div className=" grid grid-cols-1  md:grid-cols-3  gap-6">
                                <div className="col-span-1 flex justify-center items-center shadow-lg rounded-2xl">
                                    <Image
                                        src={house}
                                        alt="house"
                                        className="w-full h-full rounded-2xl object-cover "
                                        width="100"
                                        height="100"
                                    />
                                </div>
                                <div className="col-span-1 md:col-span-2 text-black relative">
                                    <h2 className="text-[12px] md:text-[1.3rem] lg:text-[26px] max-md:text-center">
                                        Lisa Vicari
                                    </h2>
                                    <p className="text-[12px] md:text-[14px] lg:text-[18px] max-sm:px-5 max-md:px-7">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus reprehenderit ducimus quos excepturi maxime unde est saepe repellendus, cum accusantium in culpa ipsam, architecto laudantium dolorum at eveniet nisi nesciunt.
                                    </p>
                                    <div className="bg-primary/50 rounded-lg flex items-center justify-center gap-2 w-full sm:w-fit py-2 px-3 my-4 max-md:mx-auto">
                                        <p className="text-[9px] sm:text-[12px] md:text-[10px] lg:text-[14px] font-semibold text-blue-900">
                                            Wallet Address:
                                        </p>
                                        <p
                                            id="copyTxt"
                                            className="text-[9px] sm:text-[12px] md:text-[10px] lg:text-[12px]"
                                        >
                                            558f37e8b6854d73b571f3f757396889
                                        </p>
                                        <span className="material-icons cursor-pointer" onClick={handleCopy} style={{ fontSize: "1rem" }}>content_copy</span>
                                    </div>
                                    <div className='w-fit absolute bottom-5'>
                                        <CustomButton text={blockchainContent} handleButtonClick={handleBlockChainDataPopup} type="button" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PractitionerNftDetail