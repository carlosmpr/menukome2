import React from 'react'
import FoodCard from '../cards/FoodCard'
export default function Slide() {
    return (
        <div className="w-5/6 ">
            <FoodCard image="https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1103&q=80"/>
            <p className="font-bold text-xl text-center">Pasta mix Saucege</p>
            <p className="font-bold text-red-600 text-center"> $20</p>
            </div>
    )
}
