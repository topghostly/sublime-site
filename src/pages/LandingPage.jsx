import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Mission from "../components/Mission";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import WorkHolder from "../components/WorkHolder";
import MidGallery from "../components/MidGallery";
import PeakDisplay from "../components/PeakDisplay";

function LandingPage() {
  const [showPeakDisplay, setShowPeakDisplay] = useState(false);
  return (
    <div>
      {/* <PeakDisplay showPeakDisplay={showPeakDisplay} /> */}
      <Navbar />
      <Hero />
      <WorkHolder setShowPeakDisplay={setShowPeakDisplay} />
      <MidGallery />
      <About />
      <Mission />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default LandingPage;
