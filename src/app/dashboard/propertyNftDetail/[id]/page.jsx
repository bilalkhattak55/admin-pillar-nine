"use client"

import Image from "next/image"
import profileImg from "/public/lisa.jpg"
import house from "/public/homee.jpeg"
import CustomButton from "@/components/formElements/CustomButton"
import LoadingSpinner from "@/components/commons/LoadingSpinner"
import { toast } from "react-hot-toast"

const PropertyNftDetail = () => {


    // copy wallet ID
    const handleCopy = (walletId) => {
        navigator.clipboard.writeText(walletId);
        toast.success("Wallet ID Copied");
    };
    return (
        <>
            <div className="py-4 w-full px-2 sm:px-10">
                <h1 className="text-heading-xs sm:text-heading-sm lg:text-heading-lg font-semibold leading-[18px] sm:leading-[44px] text-black">
                    Property NFT Details
                </h1>
                <div className="bg-primary p-[1px] rounded-[24px] mt-10 mb-[7.5rem]">
                    <div

                        className="w-full py-10 px-5 sm:p-10 rounded-[24px] bg-white"
                    >
                        <div className="grid grid-cols-12  gap-3 sm:gap-6 ">
                            <div className="col-span-6 md:col-span-5 lg:col-span-4">
                                <Image
                                    height="100"
                                    width="100"
                                    src={house}
                                    alt="house"
                                    className="w-full h-full rounded-2xl object-cover"
                                />
                            </div>
                            <div className="col-span-6 md:col-span-7 lg:col-span-8 mt-6 text-black">
                                <div className="flex justify-between">
                                    <h2 className="text-[13px] md:text-[18px] lg:text-[24px] text-black font-semibold">
                                        84XR7V7V+HV
                                    </h2>
                                </div>

                                <div className="flex items-center gap-3 mt-3">
                                    <button className="rounded-full border-[2px] border-primary border-solid w-[48px] h-[48px] overflow-hidden cursor-pointer">
                                        <Image
                                            height="100"
                                            width="100"
                                            className="rounded-full w-full h-full"
                                            src={profileImg}
                                            alt="Profile"
                                        />
                                    </button>
                                    <span className="text-[9px] sm:text-[16px] text-black">
                                        Lisa Vicari
                                    </span>
                                </div>

                                {/* {propertyData?.is_minted === false ? (
                                    <CustomButton
                                        onClick={() => editNftDataHandler()}
                                        text="Edit Detail"
                                        mt="mt-8"
                                    />
                                ) : propertyData?.document === "" ? (
                                    ""
                                ) : (
                                    <button
                                        onClick={() =>
                                            donwloadAsPdf(propertyData?.document_preview)
                                        }
                                        type="button"
                                        className={`flex justify-center items-center gap-2 px-8 py-2 mt-8 bg-primary rounded-[24px] text-black border-none cursor-pointer text-sm  font-semibold`}
                                    >
                                        {blockchainContent}{" "}
                                        {isDownloading ? <LoadingSpinner /> : null}
                                    </button>
                                )} */}

                                <div className="mt-3 sm:mt-6 flex flex-col justify-center gap-1.5 sm:gap-3">
                                    <p className="text-sm sm:text-[1.25rem] text font-medium">
                                        Property Address:
                                    </p>
                                    <p className="text-xs sm:text-[0.9rem] font-normal text-black/50">
                                        11111 STONEY VIEW LN, SAINT LOUIS
                                    </p>
                                </div>


                                {/* <div className="mt-3 sm:mt-6 flex flex-col justify-center gap-1.5 sm:gap-3">
                                    <p className="text-sm sm:text-[1.25rem] text font-medium">
                                        Document Type:
                                    </p>
                                    <p className="text-xs sm:text-[0.9rem] font-normal text-black/50">

                                        Settlement Statement

                                    </p>
                                </div> */}

                            </div>
                        </div>
                        {/* nft detail bottom */}
                        <div
                            className=" "

                        >
                            <div className="flex justify-between items-center text-black">
                                <h3 className="text-[16px] lg:text-[24px] ps-3 font-semibold mt-5 pt-10">
                                    NFT History for Token ID: 1689167772551
                                </h3>
                            </div>
                            <div className="pt-5   overflow-auto">
                                <table className="min-w-[500px] sm:w-full border-collapse text-black">
                                    <thead>
                                        <tr className="[&>*]:text-start [&>*]:font-medium sm:[&>*]:font-semibold [&>*]:p-4  [&>*]:text-[9px] lg:[&>*]:text-[14px] [&>*]:border-0 [&>*]:border-b-[1px] [&>*]:border-solid [&>*]:border-b-[#515151]">
                                            <th>Token ID</th>
                                            <th> Action</th>
                                            <th>Wallet ID</th>
                                            <th>Timestamp</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-black/90 ">
                                        <tr className="hover:bg-primary/10   [&>*]:text-start [&>*]:font-medium sm:[&>*]:font-normal [&>*]:p-4  [&>*]:text-[9px] lg:[&>*]:text-[14px] [&>*]:border-0 [&>*]:border-b-[1px] [&>*]:border-solid [&>*]:border-b-[#515151]">
                                            <td>
                                                1689167772551
                                            </td>
                                            <td>
                                                Mint
                                            </td>
                                            <td className="">
                                                <div className="gap-[5px] flex items-center flex-nowrap">
                                                    <div className="inline">
                                                        {"0ec256f5-3225-4d7b-881b-95b0c02d3102".slice(0, 12)}...

                                                    </div>

                                                    <span onClick={() => handleCopy("0ec256f5-3225-4d7b-881b-95b0c02d3102")} className='material-icons  cursor-pointer ms-2' style={{ fontSize: "1rem" }}>content_copy</span>
                                                </div>
                                            </td>
                                            <td>
                                                Jul 12, 2023, 6:16 PM
                                            </td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PropertyNftDetail