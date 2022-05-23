import React from "react";

const Tool = ({ tool }) => {
  console.log(tool);
  const {
    _id,
    img,
    name,
    description,
    price,
    minimum_order,
    available_quantity,
  } = tool;

  return;
  <div class="card w-96 bg-base-100 shadow-xl">
    <figure class="px-10 pt-10">
      <img src={img} alt="Shoes" class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">{name}</h2>
      <p>
        <small>{description}</small>
      </p>
      <h5>{price}</h5>
      <p>{minimum_order}</p>
      <p>{available_quantity}</p>
      <div class="card-actions">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>;
};

export default Tool;
