import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import Select from "react-select";

const options = [
  { value: "Category 1", label: "Brand Strategy" },
  { value: "Category 2", label: "Content Marketing" },
  { value: "Category 3", label: "E-Commerce" },
  { value: "Category 4", label: "Design Solutions" },
  { value: "Category 5", label: "Performance Marketing" },
  { value: "Category 6", label: "Website Development & SEO" },
];

const colourStyles = {
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { isDisabled }) => {
    return {
      ...styles,
      backgroundColor: isDisabled ? "red" : "white",
      color: "#000",
      cursor: isDisabled ? "not-allowed" : "default",
    };
  },
};
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [company_url, setCompany_url] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  const handleCategoryChange = (selectedValues) => {
    setSelectedCategories(selectedValues);
  };

  const handleMessageChange = (e) => {
    setCompany_url(e.target.value);
  };

  const formField = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      phone,
      company,
      company_url,
      categories: selectedCategories.map((category) => category.label),
    };
    emailjs
      .send(
        "service_melangedigital",
        "template_d80pgaj",
        {
          from_name: formData.name,
          to_name: "Sanket Bolinjkar",
          from_email: formData.email,
          from_phone: formData.phone,
          from_company: formData.company,
          from_categories: formData.categories,
          to_email: "hello@melangedigital.in",
          message: formData.message,
        },
        "11W3shu7B6S46t437"
      )
      .then(
        () => {
          alert(
            "Thank you for showing interest in our services. Our team will reach out to you shortly."
          );
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong!");
        }
      );

    // Reset form fields
    setName("");
    setEmail("");
    setPhone("");
    setCompany("");
    setSelectedCategories([]);
    setMessage("");
  };

  return (
    <div className="pl-2 pr-2 lg:py-7 lg:shadow-2xl">
      <h2 className="font-nunito font-bold text-center my-0 text-[36px] multiverse-text">
        Get In Touch with Us
      </h2>
      <div className="flex justify-center">
        <div className="h-1 w-60 bg-blue-600 mt-2 mb-4 rounded-[70%]"></div>
      </div>
      <form
        ref={formField}
        className="lg:my-6 grid grid-cols-1 lg:grid-cols-2 gap-y-2 gap-x-4  lg:px-14"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          required
          value={name}
          onChange={handleNameChange}
          name="full_name"
          placeholder="Name*"
          className="bg-[#e3e3e3] my-2 p-2 w-full rounded-sm placeholder-black outline-none"
        />
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={handlePhoneChange}
          required
          placeholder="Mobile no*"
          className="bg-[#e3e3e3] my-2 p-2 w-full rounded-sm placeholder-black outline-none"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
          placeholder="Company email id*"
          className="bg-[#e3e3e3] my-2 p-2 w-full rounded-sm placeholder-black outline-none"
        />
        <input
          type="text"
          name="company_name"
          value={company}
          onChange={handleCompanyChange}
          required
          placeholder="Company name*"
          className="bg-[#e3e3e3] my-2 p-2 w-full rounded-sm placeholder-black outline-none"
        />
        <input
          type="url"
          value={company_url}
          onChange={handleMessageChange}
          name="company_url"
          required
          placeholder="Company URL*"
          className="bg-[#e3e3e3] my-2 p-2 w-full rounded-sm placeholder-black outline-none"
        />
        <Select
          options={options}
          isMulti
          value={selectedCategories}
          onChange={handleCategoryChange}
          placeholder="Choose Solutions*"
          styles={colourStyles}
          className="  px-0 py-2 w-[100%] text-[18px] bg-white rounded-sm placeholder-black outline-none"
        />
        <button
          className="bg-purple-500 lg:ml-[430px] lg:-mr-20 text-white  py-2 font-bold mt-3 rounded-full mb-6"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
