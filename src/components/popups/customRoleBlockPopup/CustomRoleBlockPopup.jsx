import CustomButton from "@/components/formElements/CustomButton";
import Image from "next/image";
import React, { useState } from "react";

const CustomRoleBlockPopup = (props) => {
    const {
        handleCross,
        title,
        subtitle,
        rows,
        btnContent,
        id,
        setDataReSync,
        defaultRole,
    } = props;
    const [selectedValue, setSelectedValue] = useState("");

    // close popup
    const handleCrossClick = () => {
        handleCross(false);
    };

    // change role

    const handleChangeRoleBtn = () => {
        if (defaultRole === "Consumer") {
            toast.success(`User Role Changed to ${selectedValue} Successfully!`);
            handleCrossClick();
        } else {
            alert("Cannot change Practitione to Admin for now. ");
        }
    };

    // block user
    const handleBlockUserBtn = () => {
        toast.success("User Blocked Successfully!");
        handleCrossClick();
    };

    // unblock user
    const handleUnblockUserBtn = () => {
        toast.success("User Unblocked Successfully!");
        handleCrossClick();
    };

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 ">
                <div className="bg-white p-7 sm:p-10 relative  w-[80%] sm:w-[380px] md:w-[571px] rounded-[24px] text-black ">
                    <div className="flex justify-between items-center">
                        <h2 className="text-heading-xs sm:text-heading-sm md:text-[2rem] font-semibold ">
                            {title}
                        </h2>
                        <div onClick={handleCrossClick}>
                            <span className='material-icons  absolute right-8 sm:right-10 top-[2rem] sm:top-[3.5rem] cursor-pointer' style={{ fontSize: "2rem" }}>cancel</span>
                        </div>
                    </div>
                    <p className="text-black/90 text-[10px] sm:text-[15px] md:text-xl my-6">
                        {subtitle}
                    </p>
                    <table className="w-full border-collapse  text-left mb-10">
                        {rows?.map((item, ind) => (
                            <tr key={ind}>
                                <th className="p-2 text-[0.8rem] lg:text-[1rem] xl:text-[1.25rem] text-black font-medium">
                                    {item.th}
                                </th>
                                <td className="relative p-2 text-[0.8rem] lg:text-[1rem] xl:text-[1.25rem] text-black/50 font-medium">
                                    {typeof item.td === "string"
                                        ? item.td
                                        : typeof item.td === "object" && (
                                            <>
                                                <CustomSelect
                                                    options={item.td}
                                                    onChange={setSelectedValue}
                                                    defaultRole={defaultRole}
                                                />
                                            </>
                                        )}
                                </td>
                            </tr>
                        ))}
                    </table>

                    <CustomButton
                        text={btnContent}
                        handleButtonClick={
                            btnContent === "Block"
                                ? handleBlockUserBtn
                                : btnContent === "Update"
                                    ? handleChangeRoleBtn
                                    : btnContent === "Unblock"
                                        ? handleUnblockUserBtn
                                        : null
                        }
                    />
                </div>
            </div>
        </>
    );
};

export default CustomRoleBlockPopup;

// custom select component for the above popup

const CustomSelect = ({ options, onChange, defaultRole }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        onChange(option);
    };

    return (
        <div className="custom-select relative w-max">
            <div
                className={`cursor-pointer ${isOpen ? "open" : ""}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {selectedOption ? selectedOption : defaultRole}
                <span class="material-icons align-middle text-black text-[1.3rem]">
                    {isOpen ? "expand_more" : "chevron_right"}
                </span>
            </div>
            {isOpen && (
                <ul className="options-list list-none w-fit absolute rounded-lg py-1 px-3 border border-solid border-primary hover:bg-primary/20 text-base">
                    {options.map((option) => (
                        <li
                            key={option.label}
                            className={`text-black cursor-pointer hover:bg-white/5 ${selectedOption === option ? "selected" : ""
                                }`}
                            onClick={() => handleOptionClick(option.label)}
                        >
                            {option?.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
