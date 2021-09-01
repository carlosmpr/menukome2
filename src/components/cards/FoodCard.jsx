import React from "react";

export default function FoodCard({ image }) {
  return (
    <div className="w-full h-56 overflow-hidden rounded-xl">
      <img src={image} alt={image} className="w-full h-full rounded-xl" />
    </div>
  );
}
