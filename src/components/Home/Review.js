import React from "react";

const Review = ({ reviews }) => {
  console.log(reviews);
  const { name, review, location, img } = reviews;
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <p>"{review}"</p>
        <h2 class="card-title">{name}</h2>
        <p>{location}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Review;
