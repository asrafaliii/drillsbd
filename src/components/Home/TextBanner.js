import React from "react";

const TextBanner = () => {
  return (
    <div class="flex gap-4 px-12 mt-6">
      <div class="flex-1">
        <h1 class="text-4xl uppercase">New Tools is Released!</h1>
        <h2 class="text-2xl">
          A power tool is a tool that is actuated by an additional power source
          and mechanism other than the solely manual labor used with hand tools.
        </h2>
      </div>
      <div class="flex-1">
        <p>
          While hand-held power tools are extremely helpful, they also produce
          large amounts of noise and vibrations. Using power tools without
          hearing protection over a long period of time can put a person at risk
          for hearing loss.
        </p>
        <ul className="mt-2">
          <li>
            Stationary power tools for metalworking are usually called machine
            tools
          </li>
          <li>
            The term machine tool is not usually applied to stationary power
            tools for woodworking
          </li>
          <li>
            Early industrial revolution-era factories had batteries of power
            tools driven by belts from overhead shafts
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TextBanner;
