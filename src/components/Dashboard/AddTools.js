import React from "react";
import { useForm } from "react-hook-form";

const AddTools = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `https://glacial-falls-47354.herokuapp.com/tool`;
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
        <h2>Add a Tools</h2>

        <input
          type="text"
          placeholder="Name"
          {...register("name", { required: true })}
          className="input input-bordered w-full max-w-xs"
        />
        <textarea
          type="text"
          placeholder="Description"
          {...register("description")}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="number"
          placeholder="Price"
          {...register("price")}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="number"
          placeholder="Minimum Order"
          {...register("minimum_order")}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="number"
          placeholder="Available Quantity"
          {...register("available_quantity")}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Photo URL"
          {...register("img")}
          className="input input-bordered w-full max-w-xs"
        />

        <input
          type="submit"
          value="ADD TOOLS"
          className="btn btn-primary w-full max-w-xs"
        />
        {errors.exampleRequired && <span>This field is required</span>}
      </form>
    </div>
  );
};

export default AddTools;
