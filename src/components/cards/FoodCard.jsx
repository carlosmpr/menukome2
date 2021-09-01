import React from "react";


export default function FoodCard({ image }) {
  return (
    <div className="w-11/12 h-56 overflow-hidden rounded-xl shadow-md">
      <img src={image} alt={image} className="w-full h-full rounded-xl" />
    </div>
  );
}
