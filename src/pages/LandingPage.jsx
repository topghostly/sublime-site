import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
// import Firstpage from "../components/Firstpage";

function LandingPage() {
  return (
    <div>
      {/* <Firstpage /> */}
      <Navbar />
      <Hero />
    </div>
  );
}

export default LandingPage;
