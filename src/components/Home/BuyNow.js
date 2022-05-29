import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
// import { toast } from "react-toastify";

const BuyNow = () => {
  const { productId } = useParams();
  const [tools, setTools] = useState({});
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    const url = `http://localhost:5000/tool/${productId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);

  const handleOrder = (event) => {
    event.preventDefault();
    const qnt = event.target.qnt.value;
    const phone = event.target.phone.value;
    const address = event.target.address.value;
    console.log(qnt, phone, address);
    const order = {
      toolId: tools._id,
      quanty: qnt,
      phone: phone,
      address: address,
      name: tools.name,
      clientEmail: user.email,
      clientName: user.displayName,
    };

    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="px-24 mt-5">
      <div class="hero min-h-screen border rounded-lg shadow-2xl">
        <div class="hero-content flex-col lg:flex-row">
          <img src={tools.img} class="max-w-lg " />
          <div>
            <form
              onSubmit={handleOrder}
              className="grid grid-cols-1 gap-4 mt-2 justify-items-center"
            >
              <h1 class="text-3xl font-bold">{tools.name}</h1>
              <input
                type="number"
                name="qnt"
                placeholder="Qnt"
                className="input input-bordered w-full max-w-xs"
                min="100"
                max="1000"
              />
              <input
                type="text"
                name="name"
                disabled
                value={user?.displayName || ""}
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="email"
                name="email"
                disabled
                value={user?.email || ""}
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
