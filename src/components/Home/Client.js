import React from "react";
import Client1 from "../../assets/clients/client-1.png";
import Client2 from "../../assets/clients/client-2.png";
import Client3 from "../../assets/clients/client-3.png";
import Client4 from "../../assets/clients/client-4.png";
import Client5 from "../../assets/clients/client-5.png";
import Client6 from "../../assets/clients/client-6.png";

const Client = () => {
  return (
    <div className=" flex gap-20 opacity-50 hover:opacity-100 p-3 mt-5 bg-base-200">
      <div className="px-12 mt-2 mb-2"></div>
      <img src={Client1} style={{ width: "90px" }} />
      <img src={Client2} style={{ width: "90px" }} />
      <img src={Client3} style={{ width: "90px" }} />
      <img src={Client4} style={{ width: "90px" }} />
      <img src={Client5} style={{ width: "90px" }} />
      <img src={Client6} style={{ width: "90px" }} />
    </div>
  );
};

export default Client;
