import React from "react";

const BusinessSummary = () => {
  return (
    <div className="mt-7">
      <h1 className="text-3xl text-secondary font-bold uppercase text-center">
        Business Summary
      </h1>
      <div class="flex gap-4 px-12 mt-4 bg-base-200 p-2">
        <div class="flex-1">
          <img src="https://i.ibb.co/4tGp69P/banner.jpg" />
        </div>
        <div class="flex-1">
          <div class="flex-1">
            <h1 class="text-4xl uppercase">Millions Business Trust Us</h1>
            <h1 class="text-2xl text-primary">
              Try To Understand Users Expectation
            </h1>
            <h2 class="text-2xl mt-5">
              A business trust is a legal instrument that can be used to
              delegate the authority to manage a beneficiary stake in a certain
              business. It can also be used to run the business itself. However,
              there are multiple types of business trusts, with each working
              slightly differently
            </h2>
          </div>
        </div>
      </div>
      <div className="summary"></div>
      <div className="flex mt-5 px-12">
        <div className="flex-1 text-center">
          <h1 className="text-3xl font-bold">10M+</h1>
          <h1>Happy Client</h1>
        </div>
        <div className="flex-1 text-center">
          <h1 className="text-3xl font-bold">100+</h1>
          <h1>Our Product</h1>
        </div>
        <div className="flex-1 text-center">
          <h1 className="text-3xl font-bold">26+</h1>
          <h1>Years of experience</h1>
        </div>
        <div className="flex-1 text-center">
          <h1 className="text-3xl font-bold">20+</h1>
          <h1>Countries</h1>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
