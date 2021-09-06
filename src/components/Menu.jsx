import React from 'react'
import MenuItems from './MenuItems/MenuItems'
import {ReactComponent as ForkIcon} from '../assets/icons/fork.svg'
import {ReactComponent as SaladIcon} from '../assets/icons/salad.svg'
import {ReactComponent as SteakIcon} from '../assets/icons/meat.svg'
import {ReactComponent as DessertIcon} from '../assets/icons/dessert.svg'
import {ReactComponent as DrinkIcon} from '../assets/icons/drink.svg'
import { useSpring, animated } from 'react-spring'
import {useSelector} from 'react-redux'
export default function Menu() {
    const menuSelected = useSelector(state => state.counter.menuSelected)
    const props = useSpring({ to: { opacity: 1, y:0 }, from: { opacity: 0 , y:10},  delay: 600 })
    return (
        <animated.div className="w-full h-24 bg-red-400 flex rounded-t-3xl items-center  justify-evenly fixed bottom-0 shadow-2xl md:max-w-sm" style={props}>
            <MenuItems text={"Main"}>
                <ForkIcon className="w-10 h-10"  fill={ menuSelected === "Main" ? 'red':' black'}/>
                </MenuItems>
            <MenuItems  text={"Salad"}>
            <SaladIcon className="w-10 h-10" fill={ menuSelected === "Salad" ? 'red':' black'}/>
                </MenuItems>
            <MenuItems text={"Steak"}>
            <SteakIcon className="w-10 h-10" fill={ menuSelected === "Steak" ? 'red':' black'}/>
                </MenuItems>
            <MenuItems  text={"Dessert"}>
            <DessertIcon className="w-10 h-10" fill={ menuSelected === "Dessert" ? 'red':' black'}/>
                </MenuItems>
            <MenuItems  text={"Drink"}>
            <DrinkIcon className="w-10 h-10" fill={ menuSelected === "Drink" ? 'red':' black'}/>
                </MenuItems>
           
        </animated.div>
    )
}
