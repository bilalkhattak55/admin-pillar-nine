"use client";

import { useFormik } from "formik";

import Link from "next/link";
import CustomButton from "@/components/formElements/CustomButton";
import InputField from "@/components/formElements/InputField";
import InputPassword from "@/components/formElements/InputPassword";
import { useState } from "react";
import { loginSchema } from "@/schema";
import ForgotPwd from "@/components/popups/forgotPassword/ForgotPwd";

// images

import logo from "/public/pillar-9-logo.png";
import test from "/public/test.jpg";
import Image from "next/image";
import test2 from "/public/test2.jpg";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
// import CodeVerificationPopup from "./components/popups/codeVerificationPopup/CodeVerificationPopup";

export default function Home() {
  const router = useRouter()
  // const [showOtpPopup, setShowOtpPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setloading] = useState(false);
  const initialValues = {
    email: "",
    password: "",
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: async function (values, action) {
        const payload = {
          email: values.email,
          password: values.password,
        };
        try {
          setloading(true);
          console.log(payload)
          setShowOtpPopup(true);

          console.log("login info", payload);
        }catch(error) {
          console.log(error.message)
        }finally {
          setloading(false)
          action.resetForm()
          toast.success("Login successfully")
          router.push("/dashboard")
        }

      },
    });

  const [showPasswords, setShowPasswords] = useState({
    password: false,
  });

  const togglePasswordVisibility = (inputName) => {
    setShowPasswords({
      ...showPasswords,
      [inputName]: !showPasswords[inputName],
    });
  };

  const [isForgotPassword ,setIsForgotPassword] = useState(false)

  const handleForgotPassword = () => {
    setIsForgotPassword((prev) => !prev);
  };
  return (
    <>
      {isForgotPassword && <ForgotPwd setIsForgotPassword={setIsForgotPassword} />}
      <div className="h-screen overflow-auto">
        {/* login --- container */}
        <div className="flex h-full max-w-[90%] mx-auto md:max-w-full">
          {/* login ------ left */}
          <div className="flex-1 flex justify-center items-center flex-col gap-6 text-black">
            <Image
              src={logo}
              alt="logo"
              width="250"
              height="72"
              className="w-[200px] h-[70px] sm:w-[250px] sm:h-[72px]"
            />
            <h1 className="text-[2.5rem] font-bold  leading-[49px] text-center">
              Login to your account
            </h1>

            <form onSubmit={handleSubmit} className="w-[70%] space-y-7">
              <InputField
                inputType="email"
                inputId="Email"
                inputPlaceholder="mail@example.com"
                inputName="email"
                inputValue={values.email}
                inputOnChangeFunc={handleChange}
                onBlur={handleBlur}
                errorMsg={errors.email}
                labelName="Enter Your Email"
                errors={errors.email}
                touched={touched.email}
              />

              <InputPassword
                labelName="Password"
                inputType={showPasswords.password1 ? "text" : "password"}
                inputPlaceholder="Minimum of 8 characters"
                inputValue={values.password}
                inputOnChangeFunc={handleChange}
                onBlur={handleBlur}
                errorMsg={errors.password}
                showPassFunch={togglePasswordVisibility}
                showPassword={showPasswords.password1}
                inputName="password"
                password="password1"
                errors={errors.password}
                touched={touched.password}
              />
              <div>
                <div className="flex justify-between px-2">
                  <div>
                    <input
                      className="cursor-pointer border-[#3DB8D1] accent-[#e6d466] border-2"
                      type="checkbox"
                      name="rememberMe"
                      id="rememberMe"
                    />
                    <label
                      className="text-[10px] sm:text-[12px] ml-1.5 cursor-pointer md:text-[14px]"
                      htmlFor="rememberMe"
                    >
                      Remember Me
                    </label>
                  </div>
                  <div>
                    <div
                      className="text-[10px] sm:text-[12px] md:text-[14px] underline bg-[#6565]/0 text-light-pink border-none cursor-pointer"
                      onClick={handleForgotPassword}
                    >
                      Forgot Password?
                    </div>
                  </div>
                </div>
                <div className="mt-2.5">
                  <CustomButton
                    text="Login"
                    type="submit"
                    isLoading={loading ? true : null}
                  />
                </div>
                {/* <div className="text-center mt-2">
                  <span className="mr-2 text-[10px] sm:text-[12px] lg:text-[14px]">
                    Don't have an account yet?
                  </span>
                  <Link
                    className="text-secondary-purpleBlue font-semibold text-[10px] sm:text-[12px] lg:text-[14px]"
                    href="/auth/signup"
                  >
                    Signup
                  </Link>
                </div> */}
              </div>
            </form>
          </div>
          {/* login ------ right */}
          <div className="w-[50%] h-full md:flex justify-center items-center hidden">
            <Image
              src={test2}
              width={400}
              height={600}
              className="w-full h-full object-cover object-center"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
