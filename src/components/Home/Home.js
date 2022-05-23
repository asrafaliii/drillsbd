import React from "react";
import Banner from "./Banner";
import Client from "./Client";
import TextBanner from "./TextBanner";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Banner />
      <TextBanner />
      <Client />
      <Tools />
    </div>
  );
};

export default Home;
