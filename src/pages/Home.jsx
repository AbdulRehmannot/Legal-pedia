import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import AboutUs from "../components/aboutUs/AboutUs";
import Features from "../components/features/Features";
import Pricing from "../components/pricing/Pricing";
import Faqs from "../components/faqs/Faqs";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Features />
      <Pricing />
      <Faqs />
      <Footer />
    </div>
  );
};

export default Home;
