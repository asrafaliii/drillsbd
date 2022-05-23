import React from "react";

const Banner = () => {
  return (
    <div
      class="hero min-h-screen"
      style={{
        backgroundImage: `url(https://i.ibb.co/Zf7FzKC/jeriden-villegas-VLPUm5w-P5-Z0-unsplash.jpg)`,
      }}
    >
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">Welcome to DrillsBD</h1>
          <p class="mb-5">
            Get drill at competitive prices from trusted suppliers and
            wholesalers. Drillsbd offers several high quality, useful drill.
            Most Popular. Production Monitoring. Trade Assurance. Logistics
            Service. Types: Apparel, Tools and Hardware, Home Appliance.
          </p>
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
