/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();

  const { _id, name, quantity, supplier, taste, details, category, photo } =
    coffee;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const category = form.category.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      details,
      category,
      photo,
    };
    console.log(updatedCoffee);

    //     sent data to server

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount>0) {
          Swal.fire({
            title: "success!",
            text: "Coffee Updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="bg-[#F4F3F0] p-4 my-10">
      <h2 className="text-3xl font-bold uppercase text-[rgb(204,164,43)] text-center tracking-widest underline underline-offset-8 mb-10">
       Update Coffee: {name} 
      </h2>
      <form onSubmit={handleUpdateCoffee}>
        <div className="md:flex space-x-3 mb-6">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="coffee name"
                name="name"
                defaultValue={name}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Available quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="available quantity"
                name="quantity"
                defaultValue={quantity}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex space-x-3 mb-6">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Supplier Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="supplier"
                name="supplier"
                defaultValue={supplier}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="available quantity"
                name="taste"
                defaultValue={taste}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex space-x-3 mb-6">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="category"
                name="category"
                defaultValue={category}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="details"
                name="details"
                defaultValue={details}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex space-x-3 mb-6">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Photo URL"
                name="photo"
                defaultValue={photo}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <input type="submit" value="Update Coffee" className="btn btn-block tracking-widest" />
      </form>
    </div>
  );
};

export default UpdateCoffee;
