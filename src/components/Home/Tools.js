import React, { useEffect, useState } from "react";
import Tool from "./Tool";

const Tools = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch("tools.json")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  return (
    <div className="mt-5">
      <h1 className="text-3xl text-secondary font-bold text-center">
        Our Power Tools
      </h1>
      {tools.map((tool) => (
        <Tool key={tool._id} tool={tool}></Tool>
      ))}
    </div>
  );
};

export default Tools;
