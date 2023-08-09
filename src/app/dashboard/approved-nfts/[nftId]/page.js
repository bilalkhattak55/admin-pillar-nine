"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";
import propertyImg from "public/homee.jpeg";
import BlockchainDataPopup from "@/components/popups/blockchainData/BlockchainDataPopup";
import profileImg from "public/lisa.jpg";
import downloadIcon from "public/assets/icons/pillar-nine-download.png";

const Page = () => {
  // blockchain button on different screens

  const [blockchainButton, setBlockchainButton] = useState("");
  const [windowSize, setWindowSize] = useState("");
  const [dataPopup, setDataPopup] = useState(false);

  const handleSizing = () => {
    setWindowSize(window.innerWidth);
    if (windowSize < 650) {
      setBlockchainButton("Blockchain");
    } else {
      setBlockchainButton("View Blockchain Data");
    }
  };

  useEffect(() => {
    handleSizing();
    window.addEventListener("sizing", handleSizing);

    return () => {
      window.removeEventListener("resize", handleSizing);
    };
  }, [windowSize]);

  //temperory;
  const is_minted = true;
  const failed_reason = false;
  const practitioner_id = true;
  const tx_id = false;
  const nft_gifted_user = false;
  const docCategory = "Settlement";

  const handleBlockchainDataPopup = () => {
    setDataPopup(!dataPopup);
  };
  const data = {
    tokenId: "1691432706727",
    owner: "36d836cebe9e473d99894e85a3a30bab",
    tokenURI: "-",
    nftDetail: {
      name: "jeremy swyers",
      title: "86CFMHHM+HP@",
      price: "50.00000",
      image: "https://consortiamedia.s3.amazonaws.com/16914326783813135715.png",
      address: "11111 Stoney View Ln, St. Louis, MO 63146, USA",
    },
  };

  return (
    <>
      {dataPopup && (
        <BlockchainDataPopup
          setDataPopup={setDataPopup}
          data={data}
        />
      )}
      <div className="py-4 w-full px-2 sm:px-10">
        <h1 className="text-heading-xs text-black font-bold sm:text-heading-sm lg:text-heading-lg font-graphik leading-[18px] sm:leading-[44px] ">
          Property NFT Details
        </h1>
        <div className="bg-[#e6d366] p-[1px] rounded-[24px] mt-10 mb-[7.5rem]">
          <div
            style={{
              backgroundColor: "white",
              // "linear-gradient(94.09deg, #12134d 3.97%, #10053c 51.03%, #12134d 95.99%)",
            }}
            className="w-full py-10 px-5 sm:p-10 rounded-[24px]"
          >
            <div className="grid grid-cols-12  gap-3 sm:gap-6 h-[199px] sm:h-[328px]">
              <div className="col-span-6 md:col-span-5 lg:col-span-4">
                <Image
                  //   src={propertyData && propertyData?.image}
                  src={propertyImg}
                  alt="house"
                  className="w-full h-full rounded-2xl object-cover"
                  width="100"
                  height="100"
                />
              </div>
              <div className="col-span-6 md:col-span-7 lg:col-span-8">
                <div className="flex justify-between">
                  <h2 className="text-[13px] text-black font-bold md:text-[18px] lg:text-[24px]">
                    {/* {propertyData && propertyData?.title} */}
                    86CFMHHM+HP@
                  </h2>
                  <Image
                    className="w-[40px] h-[40px] cursor-pointer hidden sm:inline"
                    src={downloadIcon}
                    alt="Download Icon"
                    width="100"
                    height="100"
                  />
                </div>
                <span className="text-[13px] md:text-[20px] text-black font-semibold">
                  Minter
                </span>

                <div className="flex items-center gap-3 mt-3">
                  <button className="rounded-full border-[2px] border-[#e6d366] border-solid w-[48px] h-[48px] overflow-hidden cursor-pointer">
                    <Image
                      className="rounded-full w-full h-full"
                      src={profileImg}
                      alt="Profile"
                      width={30}
                      height={30}
                    />
                  </button>
                  <span className="text-[9px] sm:text-[14px] font-medium text-black">
                    {/* {propertyData && propertyData?.name} */}
                    Lisa vicari
                  </span>
                </div>

                {!is_minted ? (
                  <>
                    <div className="text-[9px] sm:text-[14px] mt-5">
                      {failedReason?.map((item, index) => (
                        <p key={index}>{item}</p>
                      ))}
                    </div>
                    <button
                      //   onClick={() => editNftDataHandler()}
                      type="button"
                      className={`px-8 py-2 mt-8 bg-[#e6d366] rounded-[8px] text-white border-none cursor-pointer text-sm  font-semibold`}
                    >
                      Edit And Mint
                    </button>
                  </>
                ) : (
                  <button
                    onClick={handleBlockchainDataPopup}
                    type="button"
                    className={`px-8 py-2 mt-8 bg-[#e6d366] rounded-[24px] text-black border-none cursor-pointer text-sm  font-semibold`}
                  >
                    {blockchainButton}
                  </button>
                )}

                {/* here we show the name of practitioner, added to this minting */}
                {practitioner_id && (
                  <div className="practitioner mt-3 md:mt-6">
                    <span className="text-[13px] md:text-[20px] font-semibold text-black">
                      Practitioner &nbsp;&nbsp;
                    </span>
                    <span className="text-[9px] sm:text-[14px] text-black">
                      jeremy sweyers
                      {/* {practitionerData?.firstName && capitalizeName(practitionerData?.firstName)} */}
                      {/* {" "} */}
                      {/* {practitionerData?.lastName && capitalizeName(practitionerData?.lastName)}{" "} */}
                    </span>
                  </div>
                )}
              </div>
            </div>
            {/* nft detail bottom */}
            {!failed_reason && (
              <div className="py-10">
                <div className="flex justify-between items-center">
                  <h3 className="text-[16px] lg:text-[24px] font-medium text-black">
                    Transaction History
                  </h3>
                  <img
                    className={`w-[40px] h-[40px] cursor-pointer  sm:hidden `}
                    src="/assets/icons/export.svg"
                    alt="Download Icon"
                  />
                </div>
                <div className="pt-5 md:pt-10 ">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="[&>*]:text-start text-black [&>*]:font-medium sm:[&>*]:font-semibold [&>*]:p-4  [&>*]:text-[9px] lg:[&>*]:text-[14px] [&>*]:border-0 [&>*]:border-b-[1px] [&>*]:border-solid [&>*]:border-b-[#e6d366]">
                        <th>Token ID</th>
                        <th> Action</th>
                        <th>Document Type</th>
                        <th>Timestamp</th>
                      </tr>
                    </thead>
                    <tbody className="text-black ">
                      <tr className="hover:bg-[#ffffff14] [&>*]:text-start [&>*]:font-medium sm:[&>*]:font-normal [&>*]:p-4  [&>*]:text-[9px] lg:[&>*]:text-[14px] [&>*]:border-0 [&>*]:border-b-[1px] [&>*]:border-solid [&>*]:border-b-[#e6d366]">
                        <td>{tx_id ? `${tx_id?.slice(0, 12)}...` : "---"}</td>
                        <td>
                          {nft_gifted_user
                            ? "Gifted"
                            : is_minted
                            ? "Mint"
                            : "Pending"}
                        </td>
                        <td>{docCategory}</td>

                        {/* <td>{formatTimeStamp(propertyData.updated_at)}</td> */}
                        <td>"Monday, July 31, 2023 at 11:45 AM"</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
