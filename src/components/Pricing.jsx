import React from "react";

const Pricing = () => {
  return (
    <div id="pricingplan" className="font-nunito mt-12 mb-24">
      <div className="mb-10">
        <h2 className="text-center multiverse-text   font-bold text-[28px] pb-1  md:text-4xl lg:text-[43px]">
          Choose Our Pricing Plans
        </h2>
        <div className="flex justify-center">
          <div className="h-1 w-60 bg-blue-600 my-2 rounded-[70%]"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 -mt-4 lg:mt-0 lg:grid-cols-3 lg:gap-x-8 xxl:gap-x-24 2xl:gap-x-36 mx-6 gap-y-6 lg:gap-y-0 lg:mx-28">
        <div className="bg-white p-6 rounded shadow-lg">
          <h3 className="font-bold text-[20px] lg:text-[21px] xxl:text-[24px]">
            Business Starter Package
          </h3>
          <p className="multiverse-text font-semibold text-[35px]">$1999</p>
          <div className="h-0.5 w-full bg-blue-600 mb-6 "></div>
          <p className="font-semibold text-[20px]">Social Media Management</p>
          <li className="list-disc ml-2 mb-5">30 posts/month (2 platforms)</li>
          <p className="font-semibold text-[20px]">Basic SEO Optimization</p>
          <li className="list-disc ml-2 mb-5">Upto 10 keywords/month</li>
          <p className="font-semibold text-[20px]">Graphic Design</p>
          <li className="list-disc ml-2 mb-5">8 custom graphics/month</li>
          <p className="font-semibold text-[20px]">Email Campaign</p>
          <li className="list-disc ml-2 mb-5">1 email campaign/month</li>
          <p className="font-semibold text-[20px]">Monthly Analytics</p>
          <li className="list-disc ml-2 mb-5">Reporting twice/month</li>
          <p className="font-semibold text-[20px]">Performance Marketing</p>
          <li className="list-disc ml-2 mb-5">2 campaigns/month</li>
          <p className="font-semibold text-[20px]">Support & Consultation</p>
          <li className="list-disc ml-2 mb-5">2 hours/month</li>
        </div>
        <div className="bg-white p-6 rounded shadow-lg">
          <h3 className="font-bold text-[20px] lg:text-[21px] xxl:text-[24px]">
            Business Intermediate Package
          </h3>
          <p className="multiverse-text font-semibold text-[35px]">$2999</p>
          <div className="h-0.5 w-full bg-blue-600 mb-6 "></div>
          <p className="font-semibold text-[20px]">Social Media Management</p>
          <li className="list-disc ml-2 mb-5">60 posts/month (3 platforms)</li>
          <p className="font-semibold text-[20px]">Keyword research</p>
          <li className="list-disc ml-2 mb-0">Upto 20 keywords/month</li>
          <li className="list-disc ml-2 mb-5">Backlink building</li>
          <p className="font-semibold text-[20px]">Graphic Design</p>
          <li className="list-disc ml-2 mb-5">20 custom graphics/month</li>
          <p className="font-semibold text-[20px]">Email Campaigns</p>
          <li className="list-disc ml-2 mb-5">2 email campaigns/month</li>
          <p className="font-semibold text-[20px]">Performance Marketing</p>
          <li className="list-disc ml-2 mb-5">4 campaigns/month</li>
          <p className="font-semibold text-[20px]">Monthly Analytics</p>
          <li className="list-disc ml-2 mb-0">Detailed analysis</li>
          <li className="list-disc ml-2 mb-5">Reporting twice/month</li>
          <p className="font-semibold text-[20px]">Communication Support</p>
          <li className="list-disc  ml-2 mb-0">
            Communication strategy optimization
          </li>
          <li className="list-disc ml-2 mb-5">Crisis management planning</li>
        </div>
        <div className="bg-white p-6 rounded shadow-lg">
          <h3 className="font-bold text-[20px] lg:text-[21px] xxl:text-[24px]">
            Business Advanced Package
          </h3>
          <p className="multiverse-text font-semibold text-[35px]">$3999</p>
          <div className="h-0.5 w-full bg-blue-600 mb-6 "></div>
          <p className="font-semibold text-[20px]">Social Media Management</p>
          <li className="list-disc ml-2 mb-5">100 posts/month (4 platforms)</li>
          <p className="font-semibold text-[20px]">Advanced SEO</p>
          <li className="list-disc ml-2 mb-0">Upto 30 keywords/month</li>
          <li className="list-disc ml-2 mb-0">On-page optimization</li>
          <li className="list-disc ml-2 mb-5">Backlink building</li>
          <p className="font-semibold text-[20px]">Premium Graphic Design</p>
          <li className="list-disc ml-2 mb-0">30 custom graphics/month</li>
          <li className="list-disc ml-2 mb-5">10 infographics/month</li>
          <p className="font-semibold text-[20px]">Email Campaigns</p>
          <li className="list-disc ml-2 mb-5">3 email campaigns/month</li>
          <p className="font-semibold text-[20px]">Performance Marketing</p>
          <li className="list-disc ml-2 mb-5">8 campaigns/month</li>
          <p className="font-semibold text-[20px]">Monthly Analytics</p>
          <li className="list-disc ml-2 mb-0">Detailed analysis</li>
          <li className="list-disc ml-2 mb-5">Reporting twice/month</li>
          <p className="font-semibold text-[20px]">Communication Support</p>
          <li className="list-disc ml-2 whitespace-nowrap mb-0">
            Communication strategy optimization
          </li>
          <li className="list-disc ml-2 mb-5">Crisis management planning</li>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
