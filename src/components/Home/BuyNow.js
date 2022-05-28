import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BuyNow = () => {
  const { productId } = useParams();
  const [tools, setTools] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/tool/${productId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  return (
    <div className="px-24 mt-5">
      <div class="hero min-h-screen border rounded-lg shadow-2xl">
        <div class="hero-content flex-col lg:flex-row">
          <img src={tools.img} class="max-w-lg " />
          <div>
            <h1 class="text-3xl font-bold">{tools.name}</h1>
            <form className="grid grid-cols-1 gap-4 mt-2 justify-items-center">
              <input
                type="number"
                name="number"
                placeholder="Qnt"
                className="input input-bordered w-full max-w-xs"
                min="100"
                max="1000"
              />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="submit"
                value="Order"
                className="btn btn-primary w-full max-w-xs"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyNow;
