import React from "react";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(https://i.ibb.co/Zf7FzKC/jeriden-villegas-VLPUm5w-P5-Z0-unsplash.jpg)`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome to DrillsBD</h1>
          <p className="mb-5">
            Get drill at competitive prices from trusted suppliers and
            wholesalers. Drillsbd offers several high quality, useful drill.
            Most Popular. Production Monitoring. Trade Assurance. Logistics
            Service. Types: Apparel, Tools and Hardware, Home Appliance.
          </p>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
