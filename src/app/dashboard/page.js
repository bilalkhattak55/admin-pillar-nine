"use client";

import Image from "next/image";
import mainProperty from "/public/assets/icons/mainProperty.svg";

const Page = () => {
  // const { userRole } = useAuthContext();
  const userRole = "Practitioner";

  return (
    <>
      <div className="py-4  px-8 max-w-6xl rounded-lg ">
        <h1 className="text-heading-sm lg:text-heading-lg font-semibold leading-[18px] sm:leading-[44px] text-black">
          Statistics
        </h1>
        <div className="flex flex-wrap items-center w-full gap-3 py-4">
          <div className="basis-[300px] flex   items-center  gap-6 bg-primary text-black pl-4 pr-2 py-6 rounded-lg">
            <div className="bg-primary-main flex justify-center items-center w-[70px] aspect-square border-[1px] border-white border-solid rounded-full">
              <span
                class="material-icons text-white"
                style={{ fontSize: "36px" }}
              >
                group
              </span>
            </div>
            <div className="flex flex-col justify-between items-start ">
              <p className="text-4xl font-semibold font-poppins">219</p>
              <p className="text-2xl mt-2 font-normal">Users</p>
            </div>
          </div>
          <div className="basis-[300px] flex  items-center gap-6 bg-primary text-black pl-4 pr-2 py-6 rounded-lg">
            <div className="bg-primary-main flex justify-center items-center w-[70px] aspect-square border-[1px] border-white border-solid   rounded-full">
              <Image
                src={mainProperty}
                alt=""
                width="100"
                height="100"
                className="w-[36px] h-[36px]"
              />
            </div>
            <div className="flex flex-col justify-between items-start ">
              <p className="text-4xl font-semibold font-poppins">189</p>
              <p className="text-2xl mt-2 font-normal">Property NFT</p>
            </div>
          </div>
          <div className="basis-[300px] flex  items-center gap-5 bg-primary text-black pl-4 pr-2 py-6 rounded-lg">
            <div className="bg-primary-main flex justify-center items-center w-[70px] aspect-square border-[1px] border-white border-solid  rounded-full">
              <Image
                width="100"
                height="100"
                src={mainProperty}
                alt=""
                className="w-[36px] h-[36px] "
              />
            </div>
            <div className="flex flex-col justify-between items-start">
              <p className="text-4xl font-semibold font-poppins">201</p>
              <p className="text-2xl mt-2 font-normal ">Practitioner NFT</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
