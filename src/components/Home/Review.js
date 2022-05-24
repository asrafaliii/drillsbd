import React from "react";

const Review = ({ review }) => {
  console.log(review);
  const { name, post, location, img } = review;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <p>"{post}"</p>
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src={img} />
          </div>
        </div>
        <h2 className="card-title">{name}</h2>
        <p>{location}</p>
      </div>
    </div>
  );
};

export default Review;
