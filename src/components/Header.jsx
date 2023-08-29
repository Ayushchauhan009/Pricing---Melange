import React from "react";

const Header = () => {
  return (
    <div className="headerBg h-[46.2vh] xl:h-[70vh] xxxl:h-[80vh] xl5:h-[85vh] xl7:h-[87vh] ">
      <h1 className="flex flex-col justify-center font-bold text-white text-[36px] lg:text-[52px] font-nunito items-center h-[50vh] xl:h-[76vh] xxxl:h-[80vh] xl5:h-[85vh] xl7:h-[87vh]">
        Our Pricing
        <p className="text-[16px] hidden lg:block text-white lg:text-[20px] mx-5 lg:mx-0 text-center font-nunito">
          Transparent <span className="font-normal">(No Hidden Charges)</span>{" "}
          <span className="hidden lg:inline-block">|</span> Flexible{" "}
          <span className="font-normal">(No Fixed Contracts)</span>{" "}
          <span className="hidden lg:inline-block">|</span> Customised{" "}
          <span className="font-normal">(Tailored & Cost-effective)</span>
        </p>
        <p className="text-[16px] lg:hidden  flex  text-white lg:text-[20px] mx-5 lg:mx-0 text-center font-nunito">
          Transparent <span className="font-normal ">(No Hidden Charges)</span>{" "}
        </p>
        <p className="text-[16px] my-2 lg:hidden  flex  text-white lg:text-[20px] mx-5 lg:mx-0 text-center font-nunito">
          Flexible <span className="font-normal"> (No Fixed Contracts)</span>{" "}
        </p>
        <p className="text-[16px] lg:hidden  flex  text-white lg:text-[20px] mx-5 lg:mx-0 text-center font-nunito">
          Customised{" "}
          <span className="font-normal">(Tailored & Cost-effective)</span>
        </p>
      </h1>
    </div>
  );
};

export default Header;
