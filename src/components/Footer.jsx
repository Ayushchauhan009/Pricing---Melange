import React, { useState, useRef } from "react";
import {
  melangeLogo2,
  certificate1,
  certificate2,
  linkedin,
} from "../assets/images";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const formField = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      email,
    };
    emailjs
      .send(
        "service_melangedigital",
        "template_886jjqm",
        {
          from_email: formData.email,
          to_name: "Sanket Bolinjkar",

          to_email: "hello@melangedigital.in",
        },
        "11W3shu7B6S46t437"
      )
      .then(
        () => {
          alert("Thank you. We'll get in touch with you asap.");
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong!");
        }
      );

    // Reset form fields

    setEmail("");
  };

  return (
    <div className="bg-[#1A1A1A] pt-10 font-nunito px-0 lg:px-14">
      <div className="flex justify-evenly  flex-col lg:flex-row text-white items-start ml-6 md:ml-0">
        <div className="flex flex-col justify-between">
          <div>
            <img
              src={melangeLogo2}
              alt=""
              className="mb-6 md:mb-0 w-24 h-24 lg:w-auto lg:h-auto"
            />
          </div>
        </div>
        <div className="translate-x-0 lg:translate-x-[20%]">
          <div className="flex">
            <h2 className="font-bold text-lg md:text-xl mb-2 md:mb-0 ">
              Follow us
            </h2>
            <a
              href="https://www.linkedin.com/company/melangedigital/"
              className="ml-3"
              target="_blank"
            >
              <img src={linkedin} alt="" />
            </a>
          </div>
          <div className="my-4">
            <h2 className="font-bold text-lg md:text-xl ">Address</h2>
            <p className="w-64 md:w-full mt-2 text-base md:text-lg lg:transform lg:w-[60%]">
              <a
                href="https://www.google.com/maps/place/The+Trees/@19.0922452,72.9186822,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c7c9e30858db:0x776c22b666023b89!8m2!3d19.0922401!4d72.9212571!16s%2Fg%2F11bx5682nq?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
              >
                L-302, The Trees Godrej, Vikhroli East, Mumbai - 400079
              </a>
            </p>
          </div>
        </div>
        <div className="translate-x-0 lg:translate-x-[-20%] flex flex-row lg:flex-col">
          <div className="mb-6 ">
            <h2 className="font-bold text-lg md:text-xl mb-0 md:mb-0">
              Call Us
            </h2>
            <a
              href="tel:+917700974123"
              className="text-base md:text-lg mb-2 md:mb-0 md:mt-2"
            >
              +91 7700974123
            </a>
          </div>
          <div className="mb-2 md:mb-0 ml-7 md:ml-0">
            <h2 className="font-bold text-lg md:text-xl mb-0 md:mb-0">
              Email Us
            </h2>
            <a
              href="mailto:hello@melangedigital.in"
              className="text-base mt-2 underline md:text-lg"
            >
              hello@melangedigital.in
            </a>
          </div>
        </div>
        <div className="-ml-3 flex flex-row lg:flex-col items-center lg:ml-0">
          <img
            src={certificate1}
            alt=""
            className="mb-2 mt-0 lg:-mt-4 md:mr-1"
          />
          <img src={certificate2} alt="" className="ml-7 " />
        </div>
      </div>

      {/* Down links  */}
      <div className="mx-4 md:mx-12 h-0.5 bg-[#564f4f]"></div>
      <div className="mx-4 md:mx-14 text-white py-5 font-nunito text-center lg:text-right bg-[#1A1A1A]">
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} Mélange Digital. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
