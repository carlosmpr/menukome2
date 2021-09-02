import React from 'react'
import MenuItems from './MenuItems/MenuItems'
import {ReactComponent as ForkIcon} from '../assets/icons/fork.svg'
import {ReactComponent as SaladIcon} from '../assets/icons/salad.svg'
import {ReactComponent as SteakIcon} from '../assets/icons/meat.svg'
import {ReactComponent as DessertIcon} from '../assets/icons/dessert.svg'
import {ReactComponent as DrinkIcon} from '../assets/icons/drink.svg'
import { useSpring, animated } from 'react-spring'
export default function Menu() {
    const props = useSpring({ to: { opacity: 1, y:0 }, from: { opacity: 0 , y:10},  delay: 600 })
    return (
        <animated.div className="w-full h-24 bg-red-400 flex rounded-t-3xl items-center  justify-evenly fixed bottom-0 shadow-2xl" style={props}>
            <MenuItems text={"Main"}>
                <ForkIcon className="w-10 h-10" />
                </MenuItems>
            <MenuItems  text={"Salad"}>
            <SaladIcon className="w-10 h-10" />
                </MenuItems>
            <MenuItems text={"Steak"}>
            <SteakIcon className="w-10 h-10" />
                </MenuItems>
            <MenuItems  text={"Dessert"}>
            <DessertIcon className="w-10 h-10" />
                </MenuItems>
            <MenuItems  text={"Drink"}>
            <DrinkIcon className="w-10 h-10" />
                </MenuItems>
           
        </animated.div>
    )
}
