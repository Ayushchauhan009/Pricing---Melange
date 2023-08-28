import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

import { campaigns, media, reach, clients } from "../assets/images";

const CountingNumber = ({ value, duration }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = Math.ceil(value / (duration * 60));

      const timer = setInterval(() => {
        if (start >= value) {
          clearInterval(timer);
        } else {
          setCount(start);
          start += increment;
        }
      }, 1000 / 60);
    }
  }, [inView, value, duration]);

  return <span ref={ref}>{count}</span>;
};

const OurJourney = () => {
  return (
    <div className="font-nunito jbg md:my-20 py-12">
      <h2 className="text-center multiverse-text  font-bold text-3xl  mb-12 md:text-4xl lg:text-[43px]">
        Our Journey
        <div className="flex justify-center">
          <div className="h-1 w-40 bg-blue-600 my-4 rounded-[70%]"></div>
        </div>
      </h2>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly items-center">
        <div className="w-auto md:w-full grid grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-4 md:gap-x-0 mr-0 md:mr-20 ">
          <div className="text-center mb-10 md:mb-0">
            <img src={clients} alt="" className="mb-3 w-20 h-16 mx-auto" />
            <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">
              <CountingNumber value={51} duration={2} /> <span>+</span>
            </h2>
            <p className="font-bold text-md md:text-xl">Clients</p>
          </div>

          <div className="text-center mb-10 md:mb-0">
            <img src={media} alt="" className="mb-0 w-14 h-[75px] mx-auto" />
            <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">
              <CountingNumber value={101} duration={2} /> <span>Cr+</span>
            </h2>
            <p className="font-bold text-md md:text-xl">Media Spends</p>
          </div>
          <div className="text-center mb-10 md:mb-0">
            <img src={reach} alt="" className="mb-3 w-20 h-16 mx-auto" />
            <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">
              <CountingNumber value={2} duration={2} /> <span>Bn+</span>
            </h2>
            <p className="font-bold text-md md:text-xl">Reach</p>
          </div>
          <div className="text-center">
            <img src={campaigns} alt="" className="mb-3 w-20 h-16 mx-auto" />
            <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">
              <CountingNumber value={252} duration={3} /> <span>+</span>
            </h2>
            <p className="font-bold text-md md:text-xl">Campaigns Executed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurJourney;
