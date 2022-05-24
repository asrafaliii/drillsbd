import React from "react";

const Review = ({ reviews }) => {
  console.log(reviews);
  const { name, review, location, img } = reviews;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <p>"{review}"</p>
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
