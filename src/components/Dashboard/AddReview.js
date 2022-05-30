import React from "react";
import { useForm } from "react-hook-form";

const AddReview = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `https://glacial-falls-47354.herokuapp.com/review`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-4 mt-2"
      >
        <h2>Add a Review</h2>

        <input
          type="text"
          placeholder="Name"
          {...register("name", { required: true })}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Country"
          {...register("country", { required: true })}
          className="input input-bordered w-full max-w-xs"
        />

        <input
          type="number"
          placeholder="Rating"
          {...register("rating")}
          className="input input-bordered w-full max-w-xs"
        />
        <textarea
          type="text"
          placeholder="Description"
          {...register("description")}
          className="input input-bordered w-full max-w-xs"
        />

        <input
          type="submit"
          value="ADD"
          className="btn btn-primary w-full max-w-xs"
        />
        {errors.exampleRequired && <span>This field is required</span>}
      </form>
    </div>
  );
};

export default AddReview;
