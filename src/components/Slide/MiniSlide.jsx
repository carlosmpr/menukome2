import React from "react";
import MiniFoodCard from "../cards/MiniFoodCard";
import FoodReaction from "../FoodReactions/FoodReaction";
export default function MiniSlide({ w = "w-full", details }) {
  return (
    <div className={`${w} flex flex-col justify-center items-center `}>
      <MiniFoodCard image="https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1103&q=80" />
      {details ? <FoodReaction /> : null}
      <p className="font-bold text-sm text-center">Pasta mix Saucege</p>
      <p className="font-bold text-red-600 text-center"> $20</p>
    </div>
  );
}
