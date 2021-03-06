import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
// import BusinessSummary from "./BusinessSummary";
import Client from "./Client";
import Testimonials from "./Testimonials";
import TextBanner from "./TextBanner";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Banner />
      <TextBanner />
      <Client />
      <Tools />
      <BusinessSummary />
      <Testimonials />
    </div>
  );
};

export default Home;
