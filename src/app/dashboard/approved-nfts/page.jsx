'use client'
import React, {useState, useEffect} from "react";
import propertyImg from "public/homee.jpeg"
import Link from "next/link";
import Image from "next/image";

const Page = () => {
    const [approved, setApproved] = useState([1,2,3,4,5,6,7,8,9,10,11,12]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);


  // pagination logic

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const visibleButtons = 5;
  const rangeStart = Math.max(1, currentPage - Math.floor(visibleButtons / 2));
  const rangeEnd = Math.min(totalPages, rangeStart + visibleButtons - 1);


//   temporary;
const is_minted = true;
      
    return (
        <>
      <div className="py-4 bg-white w-full px-2 sm:px-10">
        {/* heading */}
        <h1 className="text-heading-xs font-bold sm:text-heading-sm lg:text-heading-lg font-graphik leading-[18px] sm:leading-[44px] text-black">
          Approved Nfts
        </h1>

        {/* body */}
        <div className="bg-[white] p-[1px] rounded-[24px] mt-10 mb-[7.5rem]">
          <div
            style={{
              // background:
              //   "linear-gradient(94.09deg, #12134d 3.97%, #10053c 51.03%, #12134d 95.99%)",
              border: '2px solid #e6d366'
            }}
            className="w-full py-10 px-5 sm:p-10 rounded-[24px]"
          >
            {/* cards */}
            <div className="grid bg-white grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-12 sm:mt-24">
              {
                approved.map((item, i) => (
                  <>
                    <div
                      key={i}
                      className="p-2 rounded-[15px] bg-[#e6d366]"
                    >
                      <div className="relative ">
                        <Link href={`/dashboard/approved-nfts/${i}`}>
                          <Image
                            src={propertyImg}
                            alt="house"
                            className="w-full h-[250px] object-cover bg-cover block rounded-lg cursor-pointer"
                            width='100'
                            height='100'
                          />
                        </Link>

                        {!is_minted && (
                          <p className="absolute bottom-1 left-1 bg-[#d9512c] px-3 py-1 rounded text-[9px] lg:text-[14px]">
                            Pending
                          </p>
                        )}
                      </div>
                      <div className="p-4 pb-6 space-y-2">
                        <h3 className="text-[10px] sm:text-[13px] text-black lg:text-[18px] font-medium">
                        Lisa Vicari
                        </h3>
                        <p className="text-[8px] lg:text-[13px] w-full text-[#fa544d] font-normal">
                          {item.failed_reason ? item.failed_reason : ""}
                        </p>

                        <div className="flex justify-between items-center">
                          <Link href={`/dashboard/approved-nfts/${i}`}>
                            <button
                              type="button"
                              className={`bg-[#facc15] rounded-lg text-black px-5 py-1.5 border-none cursor-pointer text-sm  font-semibold`}
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

            {/* pagination */}

            <div className="w-full mt-8 flex justify-center gap-4 [&>*]:border-0 [&>*]:cursor-pointer"
              style={{display: 'none'}}
            >
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className={`${
                  currentPage === 1 ? "text-white/50" : "text-white"
                } text-[18px] bg-white/0`}
              >
                {/* {"<"} */}
                <span className="flex justify-center px-2 items-center gap-1 border-solid border-[1px] border-white rounded-[4px]">
                <img src="/assets/icons/prev.svg" alt="prev icon" /> Prev
              </span>
              </button>
              {rangeStart > 1 && (
                <button className="text-white font-medium bg-white/0">
                  ...
                </button>
              )}
              {[...Array(rangeEnd - rangeStart + 1)].map((_, index) => {
                const pageNumber = rangeStart + index;
                return (
                  <button
                    className={`text-white font-medium w-[30px] h-[30px] rounded-full ${
                      pageNumber === currentPage
                        ? "bg-gradient-to-r bg-[rgb(29,44,223)] hover:bg-primary-main/70"
                        : "bg-white/0"
                    }`}
                    key={pageNumber}
                    onClick={() => handlePageClick(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                );
              })}
              {rangeEnd < totalPages && (
                <button className="text-white font-medium bg-white/0">
                  ...
                </button>
              )}
              <button
                className={`${
                  currentPage === totalPages ? "text-white/50" : "text-white"
                } text-[18px] bg-white/0`}
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                {/* {">"} */}
                <span className="flex justify-center items-center gap-1 px-2 border-solid border-[1px] border-white rounded-[4px]">
                Next <img src="/assets/icons/next.svg" alt="next icon" />
              </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
    )
}

export default Page;