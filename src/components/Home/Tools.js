import React, { useEffect, useState } from "react";
import BuyNow from "./BuyNow";
import Tool from "./Tool";

const Tools = () => {
  const [tools, setTools] = useState([]);
  const [product, setPorduct] = useState([]);

  useEffect(() => {
    fetch("https://glacial-falls-47354.herokuapp.com/tool")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  return (
    <div className="mt-5 px-12">
      <h1 className="text-3xl text-secondary font-bold uppercase text-center">
        Our Power Tools
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {tools.map((tool) => (
          <Tool key={tool._id} tool={tool}></Tool>
        ))}
      </div>
    </div>
  );
};

export default Tools;
