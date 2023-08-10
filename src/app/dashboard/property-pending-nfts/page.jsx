"use client"


import { useState } from "react";
import buildingImg from "/public/building.jpg"

// images

import Link from "next/link";
import Image from "next/image";


function PendingNft() {
  const [pendingNft, setPendingNft] = useState([1, 2, 3, 4,5, 6, 7, 8, 9, 10, 11, 12]);
  

  const is_minted = false;
  const failed_reason = "KYC check did not pass"
  return (
    <>
      <div className="py-4 w-full px-2 sm:px-10">
        {/* heading */}
        <h1 className="text-heading-xs sm:text-heading-sm lg:text-heading-lg font-bold leading-[18px] sm:leading-[44px] text-black">
          Pending Nfts
        </h1>

        {/* body */}
        <div className=" p-[1px] rounded-[24px] mt-4 mb-[7.5rem]">
          <div
            style={{
              backgroundColor: "white",
              border: '1px solid #e6d366'
               
            }}
            className="w-full py-10 px-5 sm:p-10 rounded-[24px]"
          >
            {/* cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-4 sm:mt-4">
              {
                pendingNft.map((item, i) => (
                  <>
                    <div
                      key={i}
                      className="p-2 rounded-[15px] bg-[#e6d366] text-black"
                    >
                      <div className="relative ">
                        <Link href={`/dashboard/propertyNftDetail/${i}`}>
                          <Image
                            src={buildingImg}
                            alt="property"
                            className="w-full h-[250px] object-cover bg-cover block rounded-lg cursor-pointer"
                            width={400}
                            height={400}
                          />
                        </Link>

                        {!is_minted && (
                          <p className="absolute text-white bottom-1 left-1 bg-[#d9512c] px-3 py-1 rounded text-[9px] lg:text-[14px]">
                            Pending
                          </p>
                        )}
                      </div>
                      <div className="p-4 pb-6 space-y-2">
                        <h3 className="text-[10px] sm:text-[13px] lg:text-[18px] font-medium">
                          Jeremy sweyers
                        </h3>
                        <p className="text-[8px] lg:text-[13px] w-full text-[#fa544d] font-normal">
                          {failed_reason
                            ? failed_reason
                            : "This is an error message"}
                        </p>

                        <div className="flex justify-between items-center">
                          <Link href={`/dashboard/propertyNftDetail/${i}`}>
                            <button
                              type="button"
                              className={`bg-[#facc15] hover:bg-[#c7b25e] rounded-lg text-black px-5 py-1.5 border-none cursor-pointer text-sm  font-semibold`}
                            >
                              View
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PendingNft;
