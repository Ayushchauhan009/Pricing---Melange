import React, { useState, useEffect } from "react";
import {
  dhruvaklogo2,
  kalonlogo,
  comma,
  holiday,
  duvonlogo2,
} from "../assets/images";

import { useMediaQuery } from "react-responsive";
import { useSwipeable } from "react-swipeable";

const Testimonials = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  const [reviews, setReviews] = useState([
    {
      id: 1,
      icon: duvonlogo2,
      name: "Khushboo Shah",
      title: "Business Head- Duvon Disney",
      review:
        "They helped us with a holistic marketing plan which included E-commerce, social media, online campaigns and much more to launch our brand in the digital space ad increase sales exponentially.",
      comma: comma,
    },
    {
      id: 2,
      icon: kalonlogo,
      name: "Vidya Pandit",
      title: "Co-founder- Kalon Organics",
      review:
        "Mélange Digital is like your in-house marketing team who is always ready to support and come up with strategies based on the latest trends and technology.",
      comma: comma,
    },
    {
      id: 3,
      icon: dhruvaklogo2,
      name: "Jitendra Joshi",
      title: "Founder & CEO- Dhruvak",
      review:
        "Mélange helped us with in-depth market research and holistic strategies to launch a new niche of online value education in the overcrowded space of Ed Tech",
      comma: comma,
    },
    {
      id: 4,
      icon: holiday,
      name: "Snehal Kolambe",
      title: "Co-founder- The Holiday Store",
      review:
        "They are the masters when it comes to detailed targeting and campaign strategies. Mélange has helped us bring high quality leads on a continuous basis and build a strong social media presence.",
      comma: comma,
    },
  ]);

  const reviewsPerPage = useMediaQuery({ query: "(min-width: 768px)" }) ? 2 : 1;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSwipe = useSwipeable({
    onSwipedLeft: () => nextPage(),
    onSwipedRight: () => previousPage(),
  });

  useEffect(() => {
    const timer = setTimeout(nextPage, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentPage]);

  const nextPage = () => {
    const nextPage = currentPage === totalPages ? 1 : currentPage + 1;
    setCurrentPage(nextPage);
  };

  const previousPage = () => {
    const previousPage = currentPage === 1 ? totalPages : currentPage - 1;
    setCurrentPage(previousPage);
  };

  const getPageReviews = () => {
    const startIndex = (currentPage - 1) * reviewsPerPage;
    const endIndex = startIndex + reviewsPerPage;
    return reviews.slice(startIndex, endIndex);
  };

  return (
    <div id="testimonials" className="relative">
      <div>
        <div className="absolute -z-30  h-72 w-full test-bg"></div>
        <h2 className="font-bold font-nunito multiverse-text text-2xl md:text-3xl lg:text-4xl text-center px-9 pt-12 md:px-52">
          What Our Clients Say About Us
        </h2>
        <div className="flex justify-center">
          <div className="h-1 w-60 bg-blue-600 my-2 rounded-[70%]"></div>
        </div>
        <div
          className="reviews flex flex-col md:flex-row justify-center mx-4 sm:mx-0 min-h-96 sm:min-h-64"
          {...handleSwipe}
        >
          {getPageReviews().map((review) => (
            <div
              key={review.id}
              className="review md:mx-4 bg-white z-20 my-6 px-4 py-8 w-full testimonial rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-56 xl:w-[28rem]"
            >
              <div className="float-right  ">
                <img src={review.comma} alt="" className="w-10 -mt-6 h-8" />
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div className="flex flex-col sm:flex-row items-start mx-4 md:mx-0">
                  <img
                    src={review.icon}
                    alt=""
                    className="w-auto h-16 -ml-3 md:ml-0 "
                  />
                  <div className="flex flex-col items-start -ml-3 font-nunito sm:ml-6 mt-0 sm:mt-1 md:items-start">
                    <h3 className="font-bold">{review.name}</h3>
                    <p className="font-semibold  whitespace-nowrap">
                      {review.title}
                    </p>
                  </div>
                </div>

                <div
                  className={`flex ${
                    review.review.length > 100 ? "sm:flex-col" : "sm:flex"
                  }`}
                >
                  {review.review.length <= 100 && (
                    <p className="mt-3 text-[14px] lg:text-[17px] md:font-normal">
                      {review.review}
                    </p>
                  )}
                </div>
              </div>

              {review.review.length > 100 && (
                <div className="mt-3  text-[14px] font-nunito lg:text-[17px] md:font-normal">
                  {review.review}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="pagination flex justify-center items-center my-4 lg:my-8">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`${
                currentPage === index + 1 ? "active" : ""
              } mx-1 rounded-full test-button border-blue-500  text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300`}
              onClick={() => handlePageChange(index + 1)}
            >
              <div className="w-2 h-2 rounded-lg bg-gray-500 active:bg-blue-500 hover:bg-blue-500 "></div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
