import React from "react";

const Tool = ({ tool }) => {
  const {
    _id,
    img,
    name,
    description,
    price,
    minimum_order,
    available_quantity,
  } = tool;

  return (
    <div className="card w-96 bg-base-100 shadow-xl mt-5">
      <figure className="">
        <img src={img} alt="Drill" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{name}</h2>
        <p>
          <small>{description}</small>
        </p>
        <h5>${price}</h5>
        <p>Minimum Order :{minimum_order}</p>
        <p>Available Quantity:{available_quantity}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
