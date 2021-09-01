import React from "react";
import MiniFoodCard from "../cards/MiniFoodCard";
import FoodReaction from "../FoodReactions/FoodReaction";
import {useDispatch} from 'react-redux'
import { detailSelect } from "../../features/counter/counterSlice";

export default function MiniSlide({ w = "w-full", details , name, image, price }) {
  const dispatch = useDispatch()
  return (
    <div className={`${w} flex flex-col justify-center items-center `} onClick={()=> dispatch(detailSelect({name:name, price:price, image:image}))}>
      <MiniFoodCard image={image} />
      {details ? <FoodReaction /> : null}
      <p className="font-bold text-sm text-center">{name}</p>
      <p className="font-bold text-red-600 text-center"> ${price}</p>
    </div>
  );
}
