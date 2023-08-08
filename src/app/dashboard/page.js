"use client";

// import { useAuthContext } from "../context/authContext";
// import DashboardCarousel from "../components/dashboard/carousel/DashboardCarousel";
// import LandingBotSection from "../components/dashboard/landing-bottom-section/LandingBotSection";

const Page = () => {
  // const { userRole } = useAuthContext();
  const userRole = "Practitioner"

  return (
    <>
      <div className="max-w-6xl mx-auto">
        <div className="m-10 ">
          <div className="text-[16px] sm:text-[25px] lg:text-[40px] font-semibold text-black mb-10 font-graphik  sm:leading-[44px]">
            {`Admin Dashboard`}
          </div>

          <div className="flex flex-col gap-10 ">
            <div className="min-h-[200px] border-none w-full">
             carousel
            </div>

            <div className="">
              landin sec
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
