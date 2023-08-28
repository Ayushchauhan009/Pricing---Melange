import React, { useState } from "react";
import { absImage, bS, cm, ecm, ds, pm, wds } from "../assets/images";

const Services = () => {
  const [showItem1, setShowItem1] = useState(false);
  const [showItem2, setShowItem2] = useState(false);
  const [showItem3, setShowItem3] = useState(false);
  const [showItem4, setShowItem4] = useState(false);
  const [showItem5, setShowItem5] = useState(false);
  const [showItem6, setShowItem6] = useState(false);

  const toggleShowItem1 = () => {
    setShowItem1(!showItem1);
  };

  const toggleShowItem2 = () => {
    setShowItem2(!showItem2);
  };

  const toggleShowItem3 = () => {
    setShowItem3(!showItem3);
  };

  const toggleShowItem4 = () => {
    setShowItem4(!showItem4);
  };

  const toggleShowItem5 = () => {
    setShowItem5(!showItem5);
  };

  const toggleShowItem6 = () => {
    setShowItem6(!showItem6);
  };
  return (
    <div
      id="ourservices"
      className="pt-[56px] lg:pt-[62px] overflow-x-hidden px-4 md:px-12 lg:px-24 pb-[65px] lg:pb-[10px] font-nunito"
    >
      <h2 className="multiverse-text text-center font-bold text-[28px] lg:text-[43px] ">
        Our Digital Marketing Services
        <div className="flex justify-center">
          <div className="h-1 w-60 bg-blue-600 my-2 rounded-[70%]"></div>
        </div>
      </h2>
      <div className="pt-10 mx-3 lg:mx-0 relative">
        <img
          src={absImage}
          alt=""
          className="absolute z-0 left-3 top-10 w-14 h-14 lg:h-auto lg:w-auto"
        />
        <div className="flex flex-col lg:flex-row">
          <img
            src={bS}
            alt=""
            className="z-10 relative top-4 lg:top-6 w-[90%] h-[90%] lg:max-h-96 lg:w-auto left-5 lg:left-9"
          />
          <div className=" relative left-5 lg:left-20 top-4 ">
            <h3 className="multiverse-text font-semibold mt-4 mb-2 lg:mt-0 lg:mb-0 text-[24px] lg:text-[40px]">
              Brand Strategy
            </h3>
            <p className="lg:text-[18px] 2xl:text-[22px] w-[90%] lg:w-[80%]">
              Transform your brand's trajectory with our 'Brand Strategy'
              monthly service starting from{" "}
              <span className="multiverse-text font-bold text-[18px] lg:text-[20px] xxl:text-[24px]">
                $1999
              </span>{" "}
              onwards:
            </p>
            <ul>
              <li className="list-disc xxl:text-[18px] 2xl:text-[22px] ml-7 mt-2 w-[90%] font-bold">
                In-depth Research & Analysis:{" "}
                <span className="font-normal">
                  Brand, Product, Target Audience, Industry, Competitors
                </span>
              </li>
              <li className="list-disc xxl:text-[18px] 2xl:text-[22px] ml-7 my-2 font-bold">
                Comprehensive Owned Media Audit:{" "}
                <span className="font-normal">
                  Website and Social Platforms
                </span>
              </li>
              <li className="list-disc xxl:text-[18px] 2xl:text-[22px] ml-7 w-[80%] lg:w-auto mb-2 font-bold">
                Elevate Brand Experience:{" "}
                <span className="font-normal">
                  SWOT Analysis, Positioning, Vision, Mission, Values
                </span>
              </li>
              {showItem1 && (
                <li className="list-disc xxl:text-[18px] 2xl:text-[22px] ml-7 w-[80%] lg:w-[88%] font-bold">
                  Effective Communication Design:{" "}
                  <span className="font-normal">
                    Tone, Voice, Design Guidelines, Master Campaign and Tailored
                    Regional Adaptations for maximum impact
                  </span>
                </li>
              )}
            </ul>
            <button
              className="submit-bg rounded-[50px] text-white mt-2 lg:ml-3 font-semibold text-[18px] px-6 py-2"
              onClick={toggleShowItem1}
            >
              {showItem1 ? "Show Less" : "Learn More"}
            </button>
          </div>
        </div>
      </div>
      <div className="pt-10 my-10 lg:my-20  mx-3 lg:mx-0 relative">
        <img
          src={absImage}
          alt=""
          className="absolute z-0 top-10 w-14 h-14 lg:h-auto lg:w-auto right-2 lg:right-6"
        />
        <div className="flex flex-col lg:flex-row-reverse">
          <img
            src={cm}
            alt=""
            className="z-10 relative top-4 lg:top-6 w-[90%] h-[90%] lg:max-h-96 lg:w-auto  right-[-15px] lg:right-12"
          />
          <div className=" relative left-2 top-4 ">
            <h3 className="multiverse-text font-semibold mt-4 mb-2 lg:mt-0 lg:mb-0 text-[24px] lg:text-[40px]">
              Social Media
            </h3>
            <p className="lg:text-[18px] 2xl:text-[22px] w-[95%] lg:w-[80%]">
              Elevate your brand's reach and engagement through our impactful
              'Social Media' service at a competitive price starting from{" "}
              <span className="multiverse-text font-bold lg:text-[20px] xxl:text-[24px]">
                $1999
              </span>{" "}
              onwards:
            </p>
            <ul>
              <li className="list-disc xxl:text-[18px] 2xl:text-[22px] ml-7 mt-2 w-[90%]">
                Targeted Instagram/Facebook Campaigns
              </li>
              <li className="list-disc xxl:text-[18px] 2xl:text-[22px] ml-7 my-2">
                Instagram Business Account Setup
              </li>
              <li className="list-disc xxl:text-[18px] 2xl:text-[22px] ml-7 mb-2">
                Comprehensive Campaign Planning
              </li>
              <li className="list-disc xxl:text-[18px] 2xl:text-[22px] ml-7 mb-2">
                Content Strategy and Posting Calendar (30 posts/stories/reels
                monthly)
              </li>
              {showItem2 && (
                <ul>
                  <li className="list-disc xxl:text-[18px] 2xl:text-[22px] mb-2 ml-7 w-[80%]">
                    Engaging Campaign Copywriting and Messaging Concepts
                  </li>
                  <li className="list-disc xxl:text-[18px] 2xl:text-[22px] mb-2 ml-7 w-[80%]">
                    Eye-catching Creatives
                  </li>
                  <li className="list-disc xxl:text-[18px] 2xl:text-[22px] mb-2 ml-7 w-[80%]">
                    Precise Campaign Optimization
                  </li>
                  <li className="list-disc xxl:text-[18px] 2xl:text-[22px] mb-2 ml-7 w-[80%]">
                    Continuous Campaign Analytics Review and Refinement.
                  </li>
                </ul>
              )}
            </ul>
            <button
              className="submit-bg rounded-[50px] text-white mt-2 ml-3 font-semibold text-[18px] px-6 py-2"
              onClick={toggleShowItem2}
            >
              {showItem2 ? "Show Less" : "Learn More"}
            </button>
          </div>
        </div>
      </div>
      <div className="pt-10  mx-3 lg:mx-0 relative">
        <img
          src={absImage}
          alt=""
          className="absolute z-0 left-3 top-10 w-14 h-14 lg:h-auto lg:w-auto"
        />
        <div className="flex flex-col lg:flex-row">
          <img
            src={ecm}
            alt=""
            className="z-10 relative top-4 lg:top-6 w-[90%] h-[90%] lg:max-h-96 lg:w-auto left-5 lg:left-9"
          />
          <div className=" relative left-5 lg:left-20 top-4 ">
            <h3 className="multiverse-text font-semibold mt-4 mb-2 lg:mt-0 lg:mb-0 text-[24px] lg:text-[40px]">
              E-commerce Management
            </h3>
            <p className="lg:text-[18px] 2xl:text-[22px] w-[90%] lg:w-[80%]">
              Unlock the potential of your Ecommerce venture with our
              comprehensive service pricing starting from{" "}
              <span className="multiverse-text font-bold text-[18px] lg:text-[20px] xxl:text-[24px]">
                $1999
              </span>{" "}
              onwards:
            </p>
            <ul>
              <li className="list-disc xxl:text-[18px] 2xl:text-[22px] ml-7 mt-2 w-[80%] font-bold">
                Platform Selection:{" "}
                <span className="font-normal">
                  Choose 5 relevant platforms considering audience, fees, and
                  competition.
                </span>
              </li>
              <li className="list-disc xxl:text-[18px] 2xl:text-[22px] ml-7 my-2 font-bold">
                Product Preparation:{" "}
                <span className="font-normal">
                  Organize informations, images, and descriptions consistently.
                </span>
              </li>
              <li className="list-disc xxl:text-[18px] 2xl:text-[22px] ml-7 mb-2 font-bold">
                Account Setup:{" "}
                <span className="font-normal">
                  Create accounts, complete profiles, payment, and shipping
                  details.
                </span>
              </li>
              {showItem3 && (
                <ul>
                  <li className="list-disc xxl:text-[18px] 2xl:text-[22px] ml-7 mb-2 w-[80%] lg:w-[85%] font-bold">
                    Listing Creation:{" "}
                    <span className="font-normal">
                      Craft compelling titles, descriptions, images, accurate
                      pricing, and inventory levels.
                    </span>
                  </li>
                  <li className="list-disc xxl:text-[18px] 2xl:text-[22px] ml-7 mb-2 w-[80%] lg:w-[88%] font-bold">
                    Optimization:{" "}
                    <span className="font-normal">
                      Use SEO keywords, emphasize product features, set
                      competitive prices.
                    </span>
                  </li>
                  <li className="list-disc xxl:text-[18px] 2xl:text-[22px] ml-7 mb-2 w-[80%] lg:w-[88%] font-bold">
                    Inventory Management:{" "}
                    <span className="font-normal">
                      Sync stock, update levels to avoid overselling.
                    </span>
                  </li>
                  <li className="list-disc xxl:text-[18px] 2xl:text-[22px] ml-7 mb-2 w-[80%] lg:w-[88%] font-bold">
                    Order Processing:{" "}
                    <span className="font-normal">
                      Swiftly process orders, maintain clear communication.
                    </span>
                  </li>
                  <li className="list-disc xxl:text-[18px] 2xl:text-[22px] ml-7 mb-2 w-[80%] lg:w-[88%] font-bold">
                    Fulfillment and Shipping:{" "}
                    <span className="font-normal">
                      Secure packaging, reliable shipping, tracking.
                    </span>
                  </li>
                  <li className="list-disc xxl:text-[18px] 2xl:text-[22px] ml-7 mb-2 w-[80%] lg:w-[88%] font-bold">
                    Customer Service:{" "}
                    <span className="font-normal">
                      Responsive support, handle inquiries, returns, and
                      refunds.
                    </span>
                  </li>
                  <li className="list-disc xxl:text-[18px] 2xl:text-[22px] ml-7 mb-2 w-[80%] lg:w-[88%] font-bold">
                    Promotions:{" "}
                    <span className="font-normal">
                      Run enticing promos, utilize platform-specific features.
                    </span>
                  </li>
                  <li className="list-disc xxl:text-[18px] 2xl:text-[22px] ml-7 mb-2 w-[80%] lg:w-[88%] font-bold">
                    Analytics:{" "}
                    <span className="font-normal">
                      Monitor sales, traffic, adapt strategies based on data.
                    </span>
                  </li>
                  <li className="list-disc xxl:text-[18px] 2xl:text-[22px] ml-7 mb-2 w-[80%] lg:w-[88%] font-bold">
                    Reviews:{" "}
                    <span className="font-normal">
                      Encourage reviews, address feedback positively.
                    </span>
                  </li>
                  <li className="list-disc xxl:text-[18px] 2xl:text-[22px] ml-7 mb-2 w-[80%] lg:w-[88%] font-bold">
                    Platform Updates:{" "}
                    <span className="font-normal">
                      Platform Updates: Stay informed, adapt to changes.
                    </span>
                  </li>
                  <li className="list-disc xxl:text-[18px] 2xl:text-[22px] ml-7 mb-2 w-[80%] lg:w-[88%] font-bold">
                    Cross-Promotion:{" "}
                    <span className="font-normal">
                      Drive traffic within listings, enhance visibility.
                    </span>
                  </li>
                  <li className="list-disc xxl:text-[18px] 2xl:text-[22px] ml-7 mb-2 w-[80%] lg:w-[88%] font-bold">
                    Performance Evaluation:{" "}
                    <span className="font-normal">
                      Assess sales, ROI, consider discontinuations.
                    </span>
                  </li>
                  <li className="list-disc xxl:text-[18px] 2xl:text-[22px] ml-7 mb-2 w-[80%] lg:w-[88%] font-bold">
                    Scaling:{" "}
                    <span className="font-normal">
                      Expand product range, explore additional platforms.
                    </span>
                  </li>
                  <li className="list-disc xxl:text-[18px] 2xl:text-[22px] ml-7 mb-2 w-[80%] lg:w-[88%] font-bold">
                    Competitor Analysis:{" "}
                    <span className="font-normal">
                      Study rivals, find areas for differentiation.
                    </span>
                  </li>
                  <li className="list-disc xxl:text-[18px] 2xl:text-[22px] ml-7 mb-2 w-[80%] lg:w-[88%] font-bold">
                    Branding:{" "}
                    <span className="font-normal">
                      Maintain consistent branding, implement marketing
                      strategies.
                    </span>
                  </li>
                  <li className="list-disc xxl:text-[18px] 2xl:text-[22px] ml-7 mb-2 w-[80%] lg:w-[88%] font-bold">
                    Feedback Integration:{" "}
                    <span className="font-normal">
                      Improve based on customer input.
                    </span>
                  </li>
                  <li className="list-disc xxl:text-[18px] 2xl:text-[22px] ml-7 mb-2 w-[80%] lg:w-[88%] font-bold">
                    Continual Improvement:{" "}
                    <span className="font-normal">
                      Stay adaptable, refine strategies over time.
                    </span>
                  </li>
                </ul>
              )}
            </ul>
            <button
              className="submit-bg rounded-[50px] text-white mt-2 lg:ml-3 font-semibold text-[18px] px-6 py-2"
              onClick={toggleShowItem3}
            >
              {showItem3 ? "Show Less" : "Learn More"}
            </button>
          </div>
        </div>
      </div>
      <div className="pt-10 my-10  mx-3 lg:mx-0 lg:my-20 relative">
        {" "}
        {/* This is left to update */}
        <img
          src={absImage}
          alt=""
          className="absolute z-0 top-10 w-14 h-14 lg:h-auto lg:w-auto right-2 lg:right-6"
        />
        <div className="flex flex-col lg:flex-row-reverse">
          <img
            src={wds}
            alt=""
            className="z-10 relative top-4 lg:top-6 w-[90%] h-[90%] lg:max-h-96 lg:w-auto  right-[-15px] lg:right-12"
          />
          <div className=" relative left-2 top-4 ">
            <h3 className="multiverse-text font-semibold mt-4 mb-2 lg:mt-0 lg:mb-0 text-[24px] lg:text-[40px]">
              Website Development
            </h3>
            <p className="lg:text-[18px] w-[95%] lg:w-[80%]">
              Transform your vision into a captivating website with our web
              development service starting from just{" "}
              <span className="multiverse-text font-bold lg:text-[20px] xxl:text-[24px]">
                $1999
              </span>{" "}
              onwards:
            </p>
            <ul>
              <li className="list-disc xxl:text-[18px] ml-7 mt-2 w-[90%] font-bold">
                Design:{" "}
                <span className="font-normal">
                  Wireframe layout, Develop UI/UX design, Make prototypes.
                </span>
              </li>
              <li className="list-disc xxl:text-[18px] ml-7 my-2 font-bold">
                Optimize for SEO: <br />
                <span className="font-semibold list-disc">
                  Front-End:
                  <span>
                    <li className="ml-6 font-normal list-disc">
                      Code design using HTML, CSS, JS.
                    </li>
                    <li className="ml-6 font-normal list-disc">
                      No Code: Shopify, Woocommerce & Wordpress.
                    </li>
                    <li className="ml-6 font-normal list-disc">
                      Ensure responsiveness.
                    </li>
                  </span>
                </span>
              </li>
              {showItem4 && (
                <ul>
                  <li className=" xxl:text-[18px] ml-7 w-[80%] font-semibold">
                    Back-End:{" "}
                    <span className="list-disc font-normal">
                      <li className="ml-6">Choose tech stack.</li>
                      <li className="ml-6">Develop server, DB.</li>
                      <li className="ml-6">Add interactions.</li>
                    </span>
                  </li>

                  <li className="list-disc font-bold xxl:text-[18px] ml-7 w-[80%]">
                    GA4 Integration:{" "}
                    <span className="list-disc font-normal">
                      <li className="ml-6">Set up property.</li>
                      <li className="ml-6">Add tracking code.</li>
                      <li className="ml-6">Define events.</li>
                    </span>
                  </li>
                  <li className=" xxl:text-[18px] ml-7 w-[80%] font-bold">
                    Testing:{" "}
                    <span className="list-disc font-normal">
                      <li className="ml-6">Test for bugs, compatibility.</li>
                      <li className="ml-6">Verify GA4 tracking.</li>
                    </span>
                  </li>
                  <li className=" xxl:text-[18px] ml-7 w-[80%] font-bold">
                    CMS (Optional):{" "}
                    <span className="list-disc font-normal">
                      <li className="ml-6">Integrate with CMS.</li>
                      <li className="ml-6">Configure for updates.</li>
                    </span>
                  </li>
                  <li className=" xxl:text-[18px] ml-7 w-[80%] font-bold">
                    Configure for updates:{" "}
                    <span className="list-disc font-normal">
                      <li className="ml-6">Optimize performance.</li>
                      <li className="ml-6">Implement SEO.</li>
                    </span>
                  </li>
                  <li className=" xxl:text-[18px] ml-7 w-[80%] font-bold">
                    Security:{" "}
                    <span className="list-disc font-normal">
                      <li className="ml-6">Ensure security measures.</li>
                      <li className="ml-6">Enable HTTPS.</li>
                    </span>
                  </li>
                  <li className=" xxl:text-[18px] ml-7 w-[80%] font-bold">
                    Launch:{" "}
                    <span className="list-disc font-normal">
                      <li className="ml-6">Choose hosting.</li>
                      <li className="ml-6">Deploy and test.</li>
                    </span>
                  </li>
                  <li className=" xxl:text-[18px] ml-7 w-[80%] font-bold">
                    Post-Launch:{" "}
                    <span className="list-disc font-normal">
                      <li className="ml-6">Monitor performance, traffic.</li>
                      <li className="ml-6">Update content, fix bugs.</li>
                    </span>
                  </li>
                </ul>
              )}
            </ul>
            <button
              className="submit-bg rounded-[50px] text-white mt-2 ml-3 font-semibold text-[18px] px-6 py-2"
              onClick={toggleShowItem4}
            >
              {showItem4 ? "Show Less" : "Learn More"}
            </button>
          </div>
        </div>
      </div>
      <div className="pt-10  mx-3 lg:mx-0 relative">
        <img
          src={absImage}
          alt=""
          className="absolute z-0 left-3 top-10 w-14 h-14 lg:h-auto lg:w-auto"
        />
        <div className="flex flex-col lg:flex-row">
          <img
            src={pm}
            alt=""
            className="z-10 relative top-4 lg:top-6 w-[90%] h-[90%] lg:max-h-96 lg:w-auto left-5 lg:left-9"
          />
          <div className=" relative left-5 lg:left-20 top-4 ">
            <h3 className="multiverse-text font-semibold mt-4 mb-2 lg:mt-0 lg:mb-0 text-[24px] lg:text-[40px]">
              Performance Marketing
            </h3>
            <p className="lg:text-[18px] w-[90%] lg:w-[80%]">
              Elevate your reach through strategic campaigns, creative finesse,
              and data-driven optimization with our Performance Marketing
              service, starting at{" "}
              <span className="multiverse-text font-bold text-[18px] lg:text-[20px] xxl:text-[24px]">
                $1499
              </span>{" "}
              onwards:
            </p>
            <ul>
              <li className="list-disc xxl:text-[18px] ml-7 mt-2 w-[85%] font-bold">
                Instagram/Facebook/Other Publisher Campaigns:{" "}
                <span className="font-normal">
                  Align with Meta Business Account, budget planning, creative
                  strategy, tracking.
                </span>
              </li>
              <li className="list-disc xxl:text-[18px] ml-7 my-2 font-bold">
                Digital Assets Creation:{" "}
                <span className="font-normal">
                  GDN Ad Creative (1 set, 3 sizes/month)
                </span>
              </li>
              <li className="list-disc xxl:text-[18px] ml-7 mb-2 font-bold">
                User Journey Planning:{" "}
                <span className="font-normal">
                  Optimize landing pages, tracking, analytics reporting.
                </span>
              </li>
              {showItem5 && (
                <ul className="">
                  <li className="list-disc xxl:text-[18px] ml-7 w-[80%] lg:w-[88%] mb-2 font-bold">
                    Google Campaigns:{" "}
                    <span className="font-normal">
                      Link to Google Ads and Analytics, Conversion Tracking.
                    </span>
                  </li>
                  <li className="list-disc xxl:text-[18px] ml-7 w-[80%] lg:w-[88%] mb-2 font-bold">
                    SEM Campaigns:{" "}
                    <span className="font-normal">
                      Ad Group creation, multiple keywords, various campaign
                      types.
                    </span>
                  </li>
                  <li className="list-disc xxl:text-[18px] ml-7 w-[80%] lg:w-[88%] mb-2 font-bold">
                    Google Ads Optimization:{" "}
                    <span className="font-normal">
                      Copywriting, keyword, device, and scheduling optimization.
                    </span>
                  </li>
                  <li className="list-disc xxl:text-[18px] ml-7 w-[80%] lg:w-[88%] mb-2 font-bold">
                    Split Testing:{" "}
                    <span className="font-normal">
                      Optimize CTR with headline and description variations.
                    </span>
                  </li>
                  <li className="list-disc xxl:text-[18px] ml-7 w-[80%] lg:w-[88%] mb-2 font-bold">
                    Ad Extensions:{" "}
                    <span className="font-normal">
                      Set up all relevant extensions.
                    </span>
                  </li>
                  <li className="list-disc xxl:text-[18px] ml-7 w-[80%] lg:w-[88%] mb-2 font-bold">
                    Continuous Improvement:{" "}
                    <span className="font-normal">
                      Enhance campaigns based on data-driven insights.
                    </span>
                  </li>
                </ul>
              )}
            </ul>
            <button
              className="submit-bg rounded-[50px] text-white mt-2 lg:ml-3 font-semibold text-[18px] px-6 py-2"
              onClick={toggleShowItem5}
            >
              {showItem5 ? "Show Less" : "Learn More"}
            </button>
          </div>
        </div>
      </div>
      <div className="pt-10 my-10 lg:my-20  mx-3 lg:mx-0 relative">
        <img
          src={absImage}
          alt=""
          className="absolute z-0 top-10 w-14 h-14 lg:h-auto lg:w-auto right-2 lg:right-6"
        />
        <div className="flex flex-col lg:flex-row-reverse">
          <img
            src={wds}
            alt=""
            className="z-10 relative top-4 lg:top-6 w-[90%] h-[90%] lg:max-h-96 lg:w-auto  right-[-15px] lg:right-12"
          />
          <div className=" relative left-2 top-4 ">
            <h3 className="multiverse-text font-semibold mt-4 mb-2 lg:mt-0 lg:mb-0 text-[24px] lg:text-[40px]">
              SEO
            </h3>
            <p className=" text-[18px] w-[95%] lg:w-[80%]">
              Boost Your Online Presence with SEO Services starting from{" "}
              <span className="multiverse-text font-bold lg:text-[20px] xxl:text-[24px]">
                $1499
              </span>{" "}
              onwards, encompassing on-page, technical, and off-page
              optimization for enhanced visibility.
            </p>
            <ul>
              <li className="list-disc xxl:text-[18px] ml-7 mt-2 w-[90%] font-bold">
                On-Page SEO
              </li>
              <li className="list-disc xxl:text-[18px] ml-9 mt-2 w-[90%] font-normal">
                Google Analytics Installation
              </li>
              <li className="list-disc xxl:text-[18px] ml-9 my-2 font-normal">
                Google Search Console Installation
              </li>
              <li className="list-disc xxl:text-[18px] ml-9 mb-2 font-normal">
                Robots.txt and XML Sitemap Optimization
              </li>
              {showItem6 && (
                <ul>
                  <li className="list-disc xxl:text-[18px] ml-9 w-[80%] mb-2 font-normal">
                    HTTPS Correction
                  </li>
                  <li className="list-disc xxl:text-[18px] ml-9 w-[80%] mb-2 font-normal">
                    HTTP Status Optimization (301, 302, 404)
                  </li>
                  <li className="list-disc xxl:text-[18px] ml-9 w-[80%] font-normal">
                    WWW Resolve Optimization
                  </li>
                  <li className="list-disc xxl:text-[18px] ml-7 mb-2 mt-2 w-[90%] font-bold">
                    On-Page SEO Content Report{" "}
                  </li>
                  <li className="list-disc xxl:text-[18px] ml-9 w-[80%] mb-2 font-normal">
                    Meta Title Optimization
                  </li>
                  <li className="list-disc xxl:text-[18px] ml-9 w-[80%] mb-2 font-normal">
                    Meta Description Optimization
                  </li>
                  <li className="list-disc xxl:text-[18px] ml-9 w-[80%] mb-2 font-normal">
                    Meta Keywords Optimization
                  </li>
                  <li className="list-disc xxl:text-[18px] ml-9 w-[80%] mb-2 font-normal">
                    Headings Optimization
                  </li>
                  <li className="list-disc xxl:text-[18px] ml-9 w-[80%] mb-2 font-normal">
                    Copyediting of Existing Website Content to Include Keywords
                  </li>
                  <li className="list-disc xxl:text-[18px] ml-9 w-[80%] mb-2 font-normal">
                    URL Optimization
                  </li>
                  <li className="list-disc xxl:text-[18px] ml-9 w-[80%] mb-2 font-normal">
                    Text/HTML Ratio Optimization
                  </li>
                  <li className="list-disc xxl:text-[18px] ml-9 w-[80%] mb-2 font-normal">
                    Image Alt Optimization
                  </li>
                  <li className="list-disc xxl:text-[18px] ml-9 w-[80%] font-normal">
                    Onsite Linking Optimization
                  </li>
                  <li className="list-disc xxl:text-[18px] ml-7 mb-2 mt-2 w-[90%] font-bold">
                    Technical Audit Report{" "}
                  </li>
                  <li className="list-disc xxl:text-[18px] ml-9 w-[80%] mb-2 font-normal">
                    Implementation of technical recommendations for higher
                    optimization scores on Desktop & Mobile (*Best effort)
                  </li>
                  <li className="list-disc xxl:text-[18px] ml-9 w-[80%] font-normal">
                    Off-Page SEO Optimization
                  </li>
                </ul>
              )}
            </ul>
            <button
              className="submit-bg rounded-[50px] text-white mt-2 ml-3 font-semibold text-[18px] px-6 py-2"
              onClick={toggleShowItem6}
            >
              {showItem6 ? "Show Less" : "Learn More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
