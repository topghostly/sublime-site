import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Mission from "../components/Mission";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import WorkHolder from "../components/WorkHolder";
import MidGallery from "../components/MidGallery";

function LandingPage() {
  return (
    <div>
      {/* <Firstpage /> */}
      <Navbar />
      <Hero />
      <WorkHolder />
      <MidGallery />
      <About />
      <Mission />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default LandingPage;
