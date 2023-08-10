"use client"

import Image from "next/image"
import profileImg from "/public/lisa.jpg"
import ChangePassword from "@/components/popups/changePassword/ChangePassword"
import { useState } from "react"
import CustomRoleBlockPopup from "@/components/popups/customRoleBlockPopup/CustomRoleBlockPopup"


const UserDetailPage = () => {
    const [showResetPasswordPopup, setShowResetPasswordPopup] = useState(false);
    const [showChangeRolePopup, setShowChangeRolePopup] = useState(false);
    const [showBlockUserPopup, setShowBlockUserPopup] = useState(false);

    // show reset password popup
    const handleResetPasswordClick = () => {
        setShowResetPasswordPopup(true);
    };

    // show change role popup
    const handleChangeRoleClick = () => {
        setShowChangeRolePopup(true);
    };

    // block user click
    const handleBlockUserClick = () => {
        setShowBlockUserPopup(true);
    };

    const resetPasswordRows = [
        {
            th: "Name:",
            td: "Lisa Vicari"
        },
        {
            th: "Email:",
            td: "lisa@email.com"
        },
        {
            th: "Roles:",
            td: "Consumer",
        },
    ];


    const changeRoleRows = [
        {
            th: "Name:",
            td: "Lisa Vicari"
        },
        {
            th: "Email:",
            td: "lisa@email.com"
        },
        {
            th: "Roles:",
            td: [
                {
                    role: "Practitioner",
                    label: "Practitioner"
                },
            ],
        },
    ];


    return (
        <>
            {showResetPasswordPopup && (
                <ChangePassword setShowResetPasswordPopup={setShowResetPasswordPopup} />
            )}
            {/* Change Role Popup */}
            {showChangeRolePopup && (
                <CustomRoleBlockPopup
                    handleCross={setShowChangeRolePopup}
                    title="Change Role"
                    subtitle="You want to change role, are you sure?"
                    rows={changeRoleRows}
                    btnContent="Update"
                    defaultRole={"Consumer"}

                />
            )}
            {/* Block User Popup */}
            {showBlockUserPopup && (
                <CustomRoleBlockPopup
                    handleCross={setShowBlockUserPopup}
                    title="Block User"
                    subtitle="You want to Block this user, are you sure?"
                    rows={resetPasswordRows}
                    btnContent="Block"
                />
            )}
            <div className="border-[2px] border-solid border-[#e6d466] my-5 mx-4  p-[1px] rounded-[24px]">
                <div

                    className="w-full py-10 px-[1rem] lg:px-[2rem] xl:px-[2.5rem]  rounded-[24px]"
                >
                    <h3 className="text-heading-xs sm:text-heading-sm lg:text-[2rem] font-graphik leading-[18px] sm:leading-[44px] text-black mb-[3rem]">
                        Profile
                    </h3>
                    {/* ------ profile section -------- */}
                    <div className="grid lg:grid-cols-12 bg-[#d6c65f] rounded-lg gap-x-3 px-[1.3rem] py-[3rem]">
                        <div className="max-lg:justify-center max-lg:mb-2 lg:col-span-3 flex items-center gap-x-3">
                            <Image
                                width="100"
                                height="100"
                                className="rounded-full w-[30%] aspect-square"
                                src={profileImg}
                                alt="Profile"

                            />
                            <div className="flex flex-col">
                                <h3 className="text-[1.2rem] sm:text-heading-sm lg:text-[1.5rem] font-graphik leading-[18px] sm:leading-[44px] text-black font-semibold">
                                    Lisa Vicari
                                </h3>
                                <span className="text-[0.75rem] text-black/80 font-medium">
                                    Consumer
                                </span>
                            </div>
                        </div>
                        <div className=" lg:col-span-6 flex items-center max-lg:my-5">
                            <table className="lg:w-full max-lg:mx-auto border-collapse  text-left">
                                <tr className="">
                                    <th className="text-[0.8rem] max-sm:pr-1.5 max-lg:pr-3 lg:text-[1rem] xl:text-[1.25rem] text-black font-medium">
                                        Phone Number:
                                    </th>
                                    <td className="text-[0.8rem] lg:text-[1rem] xl:text-[1.25rem] text-black/80 font-medium">
                                        +1234567783
                                    </td>
                                </tr>
                                <tr>
                                    <th className="text-[0.8rem] lg:text-[1rem] xl:text-[1.25rem] text-black font-medium">
                                        Email
                                    </th>
                                    <td className="text-[0.8rem] lg:text-[1rem] xl:text-[1.25rem] text-black/80 font-medium">
                                        lisa@email.com
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div className="lg:col-span-3 max-lg:text-center lg:self-center">
                            <button
                                onClick={handleResetPasswordClick}
                                type="button"
                                className="max-lg:min-w-[200px] lg:w-full lg:text-[1rem] xl:text-[1.25rem] bg-primary border-none shadow-lg rounded-[12px] text-black  py-3 px-1  cursor-pointer  font-semibold"
                            >
                                Reset User Password
                            </button>
                        </div>
                    </div>
                    {/* --- User Information -------- */}
                    <div className="py-[2.5rem]">
                        <h2 className="text-heading-xs sm:text-heading-sm lg:text-heading-lg font-graphik leading-[18px] sm:leading-[44px] text-black">
                            User Information
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-[1.5rem]">
                            <div>
                                <table className="w-full border-collapse  text-left">
                                    <tr>
                                        <th className="p-2 lg:text-[1rem] xl:text-[1.25rem] text-black font-medium">
                                            Full Name:
                                        </th>
                                        <td className="p-2 lg:text-[1rem] xl:text-[1.25rem] text-black/50 font-medium">
                                            Lisa Vicari
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="p-2 lg:text-[1rem] xl:text-[1.25rem] text-black font-medium">
                                            Address:
                                        </th>
                                        <td className="p-2 lg:text-[1rem] xl:text-[1.25rem] text-black/50 font-medium">
                                            -
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="p-2 lg:text-[1rem] xl:text-[1.25rem] text-black font-medium">
                                            City:
                                        </th>
                                        <td className="p-2 lg:text-[1rem] xl:text-[1.25rem] text-black/50 font-medium">
                                            -
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="p-2 lg:text-[1rem] xl:text-[1.25rem] text-black font-medium">
                                            State/Province:
                                        </th>
                                        <td className="p-2 lg:text-[1rem] xl:text-[1.25rem] text-black/50 font-medium">
                                            -
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="p-2 lg:text-[1rem] xl:text-[1.25rem] text-black font-medium">
                                            Zip/Postal Code:
                                        </th>
                                        <td className="p-2 lg:text-[1rem] xl:text-[1.25rem] text-black/50 font-medium">
                                            -
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div>
                                <table className="w-full border-collapse  text-left">
                                    <tr className="">
                                        <th className="p-2 lg:text-[1rem] xl:text-[1.25rem] text-black font-medium">
                                            Wallet Address:
                                        </th>
                                        <td className="p-2 lg:text-[1rem] xl:text-[1.25rem] text-black/50 font-medium">
                                            43ea956e-7519-49f1-b1f9-8119f383a155
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="p-2 lg:text-[1rem] xl:text-[1.25rem] text-black font-medium">
                                            User Type:
                                        </th>
                                        <td className="p-2 lg:text-[1rem] xl:text-[1.25rem] text-black/50 font-medium">
                                            Consumer
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="p-2 lg:text-[1rem] xl:text-[1.25rem] text-black font-medium">
                                            Status:
                                        </th>
                                        <td
                                            className={`p-2 lg:text-[1rem] xl:text-[1.25rem] text-[#00AC4F] font-medium`}
                                        >
                                            Active
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="p-2 lg:text-[1rem] xl:text-[1.25rem] text-black font-medium">
                                            Role Type:
                                        </th>
                                        <td className="p-2 lg:text-[1rem] xl:text-[1.25rem] text-black/50 font-medium">
                                            Consumer
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="p-2 lg:text-[1rem] xl:text-[1.25rem] text-black font-medium">
                                            License:
                                        </th>
                                        <td className="p-2 lg:text-[1rem] xl:text-[1.25rem] text-black/50 font-medium">
                                            F012345678910
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className="flex justify-center items-center max-sm:flex-col gap-5">
                            <button
                                onClick={handleChangeRoleClick}
                                type="button"
                                className="  lg:text-[1rem] xl:text-[1.25rem] bg-[#e6d466] rounded-[24px] text-black  py-3 min-w-[230px] border-none cursor-pointer  font-semibold"
                            >
                                Change Role
                            </button>

                            <button
                                onClick={handleBlockUserClick}
                                type="button"
                                className="  lg:text-[1rem] xl:text-[1.25rem] bg-[#e6d466] rounded-[24px] text-black  py-3 min-w-[230px] border-none cursor-pointer  font-semibold"
                            >
                                Block User
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserDetailPage