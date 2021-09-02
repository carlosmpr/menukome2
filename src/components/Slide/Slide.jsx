import React from "react";
import FoodCard from "../cards/FoodCard";
import {useDispatch} from 'react-redux'
import { detailSelect } from "../../features/counter/counterSlice";

export default function Slide({name,price,image}) {
  const dispatch = useDispatch()

  console.log(name)
  return (
    <>
    <div className="w-full flex flex-col items-center justify-center " onClick={()=>dispatch(detailSelect({name:name, price:price, image:image}))}>
      <FoodCard image={image} />
      <p className="font-bold text-xl text-center">{name}</p>
      <p className="font-bold text-red-600 text-center"> ${price}</p>
    </div>
   
    </>
  );
}
