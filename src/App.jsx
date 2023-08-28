import React, { useState, useEffect } from "react";
import {
  Navbar,
  Header,
  Services,
  Ourjourney,
  Pricing,
  Testimonials,
  Contact,
  Footer,
} from "./components";
import { button } from "./assets/images";

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <Navbar />
      <Header />
      <Services />
      <Ourjourney />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
      {showBackToTop && (
        <button onClick={scrollToTop} className="back-to-top-btn">
          <img src={button} alt="" />
        </button>
      )}
    </div>
  );
}

export default App;
