import CustomButton from '@/components/formElements/CustomButton';
import InputPassword from '@/components/formElements/InputPassword';
import { useFormik } from 'formik';
import Image from 'next/image';
import React, { useState } from 'react'
import crossIcon from "/public/assets/icons/cross.svg"

const ChangePassword = ({ setShowResetPasswordPopup }) => {
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState("");

    const [showPasswords, setShowPasswords] = useState({
        password2: false,
        password3: false,
    });

    const togglePasswordVisibility = (inputName) => {
        setShowPasswords({
            ...showPasswords,
            [inputName]: !showPasswords[inputName],
        });
    };

    // close popup
    const handleCross = () => {
        setShowResetPasswordPopup(false)
    }

    const initialValues = {
        password: "",
        confirm_password: "",
    };

    // handle form with formik
    const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
        useFormik({
            initialValues,
            onSubmit: async (values, action) => {
                setLoading(true);
                const payload = {
                    password: values.password,
                    confirm_password: values.confirm_password,
                };
                console.log("change password payload", payload);
            },
        });
    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 ">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-7 sm:p-10 relative  w-[80%] sm:w-[380px] md:w-[571px] rounded-[24px] text-black "
                >
                    {/* cross icon */}
                    <div
                        onClick={() => {
                            handleCross(false);
                        }}
                    >
                        <span className='material-icons  absolute right-8 sm:right-10 top-[2rem] sm:top-[3.5rem] cursor-pointer' style={{ fontSize: "2rem" }}>cancel</span>
                    </div>
                    <h2 className="text-heading-xs sm:text-heading-sm md:text-heading-lg font-semibold ">
                        Reset user password
                    </h2>
                    <p className=" text-[10px] sm:text-[15px] md:text-xl my-3 mb-10">
                        You want to Reset password this user, are you sure?
                    </p>

                    <InputPassword
                        labelName="New Password"
                        inputType={showPasswords.password2 ? "text" : "password"}
                        inputPlaceholder="Entry New Current Password"
                        showPassFunch={togglePasswordVisibility}
                        showPassword={showPasswords.password2}
                        password="password2"
                        inputName="password"
                        inputValue={values.password}
                        inputOnChangeFunc={handleChange}
                        onBlur={handleBlur}
                        errorMsg={errors.password}
                        errors={errors.password}
                        touched={touched.password}
                    />
                    <br />
                    <InputPassword
                        labelName="Confirm New Password"
                        inputType={showPasswords.password3 ? "text" : "password"}
                        inputPlaceholder="Confirm Your New Current Password"
                        showPassFunch={togglePasswordVisibility}
                        showPassword={showPasswords.password3}
                        password="password3"
                        inputName="confirm_password"
                        inputValue={values.confirm_password}
                        inputOnChangeFunc={handleChange}
                        onBlur={handleBlur}
                        errorMsg={errors.confirm_password}
                        errors={errors.confirm_password}
                        touched={touched.confirm_password}
                    />
                    <div className="sm:gap-8 mt-5 sm:mt-14">
                        <CustomButton
                            isLoading={loading ? true : null}
                            text="Send Request"
                            type="submit"
                            py="sm:py-2.5"
                        />
                    </div>
                </form>
            </div>
        </>
    )
}

export default ChangePassword