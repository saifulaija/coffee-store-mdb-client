import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, details, category, photo } =
    coffee;
 console.log(coffees);
  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //

        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");

              const remaining = coffees.filter(cof=> cof._id !== _id)
              setCoffees(remaining)
            }
          });
      }
    });
  };
  return (
    <div className="card card-side bg-[#F4F3F0] shadow-xl shadow-green-400 ">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className=" flex justify-around w-full pr-4 items-center">
        <div>
          <h2 className="card-title">{name}</h2>
          <p>{details}</p>
          <p>{quantity}</p>
          <p>{category}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="btn-group btn-group-vertical space-y-3">
            <button className="bg-green-500 rounded-lg px-6 btn-outline font-bold tracking-widest text-white">
              View
            </button>
            <Link to={`/updatecoffee/${_id}`}>
              <button className="bg-green-500 rounded-lg px-6 btn-outline font-bold tracking-widest text-white">
                Edit
              </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="bg-yellow-500 rounded-lg px-6 btn-outline font-bold tracking-widest text-white"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
