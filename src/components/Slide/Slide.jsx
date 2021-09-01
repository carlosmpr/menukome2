import React from "react";
import FoodCard from "../cards/FoodCard";
import {useDispatch} from 'react-redux'
import { detailSelect } from "../../features/counter/counterSlice";

export default function Slide() {
  const dispatch = useDispatch()
  return (
    <div className="w-full flex flex-col items-center justify-center " onClick={()=>dispatch(detailSelect("Pasta"))}>
      <FoodCard image="https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1103&q=80" />
      <p className="font-bold text-xl text-center">Pasta mix Saucege</p>
      <p className="font-bold text-red-600 text-center"> $20</p>
    </div>
  );
}
