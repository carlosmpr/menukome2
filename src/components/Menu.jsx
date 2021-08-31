import React from 'react'
import MenuItems from './MenuItems/MenuItems'
import fork from '../assets/icons/fork.svg'
import salad from '../assets/icons/salad.svg'
import meat from '../assets/icons/meat.svg'
import dessert from '../assets/icons/dessert.svg'
import drink from '../assets/icons/drink.svg'
export default function Menu() {
    return (
        <div className="w-full h-24 bg-red-400 flex rounded-t-3xl items-center  justify-evenly fixed bottom-0 shadow-2xl">
            <MenuItems image={fork} text={"Main"}/>
            <MenuItems image={salad} text={"Salad"}/>
            <MenuItems image={meat} text={"Steak"}/>
            <MenuItems image={dessert} text={"Dessert"}/>
            <MenuItems image={drink} text={"Drink"}/>
           
        </div>
    )
}
