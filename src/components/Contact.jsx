import React from "react";
import Form from "./Form";

const Contact = () => {
  return (
    <div
      id="contactus"
      className="py-8 my-4 lg:my-14 wrap md:py-32 px-3 md:px-16 lg:px-28 lg:py-4 sm:py-16 flex flex-col md:flex-row justify-between items-center font-nunito"
    >
      <div className="w-full  lg:bg-white ">
        <Form />
      </div>
    </div>
  );
};

export default Contact;
