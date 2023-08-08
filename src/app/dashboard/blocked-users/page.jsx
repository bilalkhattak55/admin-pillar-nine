"use client";

import LoadingSpinner from "@/components/commons/LoadingSpinner";
import SelectInputField from "@/components/formElements/SelectInputField";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import profileImg from "/public/lisa.jpg";

const Page = () => {
    const [practitionerList, setPractitionerList] = useState([]);
    const [searchPractitioner, setSearchPractitioner] = useState("");
    const [filterPractitionerList, setFilterPractitioner] = useState([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    ]);
    const [statesAgainstCountry, setStatesAgainstCountry] = useState([]);
    const [isAllStatesSelected, setIsAllStatesSelected] = useState(false);
    const [selectedStateFromDropdown, setSelectedStateFromDropdown] = useState(
        []
    );

    const [practitionerType, setPractitionerType] = useState([]);
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [Loader, setLoader] = useState(true);
    const [isUserFound, setIsUserFound] = useState(false);
    const userTypeDropdown = [
        { label: "Practitioner", value: "Practitioner" },
        { label: "Consumer", value: "Consumer" },
    ];

    // pagination
    const [totalPages, setTotalPages] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const practitionersPerPage = 15;

    useEffect(() => {
        setTotalPages(
            Math.ceil(filterPractitionerList.length / practitionersPerPage)
        );
    }, [filterPractitionerList, practitionersPerPage]);

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

    const indexOfLastPractitioner = currentPage * practitionersPerPage;
    const indexOfFirstPractitioner =
        indexOfLastPractitioner - practitionersPerPage;
    const currentPractitioners = filterPractitionerList.slice(
        indexOfFirstPractitioner,
        indexOfLastPractitioner
    );

    return (
        <div className="text-black lg:max-w-[1200px] mx-6 relative xl:mx-auto border-[2px] border-solid border-[#e6d466] mb-5 rounded-[24px]">
            <div className="w-full py-10 px-[1rem]  xl:px-[2.5rem] min-h-[400px] rounded-[24px] bg-white">
                <div className="flex flex-col min-[1160px]:flex-row justify-between items-center  gap-3">
                    <h3 className="min-w-max  self-start text-heading-sm lg:text-[2rem]  leading-[18px] sm:leading-[44px] ">
                        Blocked Users
                    </h3>

                    <div className="flex justify-between items-center flex-wrap gap-3">
                        <div className="min-w-[180px] max-[1286px]:w-[250px] pe-3">
                            <SelectInputField
                                dropdownList={userTypeDropdown}
                                initialValue={"Select user type"}
                                selected={practitionerType}
                                setSelected={setPractitionerType}
                            />
                        </div>

                        {practitionerType.value === "Practitioner" &&
                            currentPractitioners && (
                                <div className="w-[250px] pb-1 pe-3">
                                    <SelectInputField
                                        dropdownList={statesAgainstCountry}
                                        initialValue={"Please Select Search Area"}
                                        selected={selectedStateFromDropdown}
                                        setSelected={setSelectedStateFromDropdown}
                                        allStates={true}
                                    />
                                </div>
                            )}
                        <div className="bg-[#e6d466] p-0.5 rounded-[24px] ">
                            <input
                                className={`  px-4 bg-dark-blue border-0 rounded-[24px] w-[240px] placeholder:font-medium focus:outline-none text-[13px] ${"py-2.5"}`}
                                placeholder={"Search User by name & email"}
                                value={searchPractitioner}
                                onChange={(e) => setSearchPractitioner(e.target.value)}
                                style={{ zIndex: -1 }}
                            />
                        </div>
                    </div>
                </div>

                {/* ---- User List -------- */}

                {isDataLoaded && (
                    <div className="text-center mt-[100px]">
                        <LoadingSpinner />
                    </div>
                )}

                {isDataLoaded && isUserFound && currentPractitioners.length === 0 && (
                    <div className="text-center mt-[100px]">No user found!</div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-[2.5rem] gap-x-[1rem] gap-y-[2.5rem] ">
                    {filterPractitionerList.map((practitioner, index) => (
                        <div
                            key={index}
                            className="grid  items-center gap-x-2.5 p-[0.8rem] rounded-xl bg-yellow-600 text-white"
                        >
                            <div className="flex justify-between items-center">
                                <div className="flex ">
                                    <Image
                                        className="rounded-full w-[2.8rem] aspect-square"
                                        src={profileImg}
                                        width="100"
                                        height="100"
                                        alt="Profile"
                                    />
                                    <div className="ms-2 flex flex-col justify-center ">
                                        <h4 className=" text-[1rem] sm:text-lg flex gap-2 items-center">
                                            Lisa Vicari
                                        </h4>

                                        <div class="">
                                            <p class="whitespace-normal break-words text-[0.75rem]">
                                                lisa@email.com
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <Link
                                        href={`/admin/user-detail/${practitioner?.id || practitioner?.user?.id
                                            }`}
                                    > */}
                                <button
                                    type="button"
                                    className=" px-3 text-[0.75rem]  bg-yellow-400 hover:bg-[#e8da7f] rounded-[12px] text-black shadow-lg  py-1.5 border-none cursor-pointer  font-semibold"
                                >
                                    Unblock
                                </button>
                                {/* </Link> */}
                            </div>
                        </div>
                    ))}
                </div>

                {/* pagination */}
                {isDataLoaded && filterPractitionerList.length > 15 && (
                    <div className="w-full mt-8 flex justify-center gap-4 [&>*]:border-0 [&>*]:cursor-pointer">
                        <button
                            onClick={handlePreviousPage}
                            disabled={currentPage === 1}
                            className={`${currentPage === 1 ? "text-white/50" : "text-white"
                                } text-[18px] bg-white/0`}
                        >
                            {/* {"<"} */}
                            <span className="flex justify-center px-2 items-center gap-1 border-solid border-[1px] border-white rounded-[4px]">
                                <img src="/assets/icons/prev.svg" alt="prev icon" /> Prev
                            </span>
                        </button>
                        {rangeStart > 1 && (
                            <button className="text-white font-medium bg-white/0">...</button>
                        )}
                        {[...Array(rangeEnd - rangeStart + 1)].map((_, index) => {
                            const pageNumber = rangeStart + index;
                            return (
                                <button
                                    className={`text-white font-medium w-[30px] h-[30px] rounded-full ${pageNumber === currentPage
                                        ? // ? "bg-primary-main hover:bg-primary-main/70"
                                        "bg-gradient-to-r bg-[#1D2CDF] hover:bg-primary-main/70"
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
                            <button className="text-white font-medium bg-white/0">...</button>
                        )}
                        <button
                            className={`${currentPage === totalPages ? "text-white/50" : "text-white"
                                } text-[18px] bg-white/0`}
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                        >
                            <span className="flex justify-center items-center gap-1 px-2 border-solid border-[1px] border-white rounded-[4px]">
                                Next <img src="/assets/icons/next.svg" alt="next icon" />
                            </span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Page;
