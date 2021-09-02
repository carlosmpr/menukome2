import React from 'react'
import {useDispatch} from 'react-redux'
import { menuSelect, detailSelect } from '../features/counter/counterSlice'
import { useSpring, animated } from 'react-spring'
export default function TopBar() {
    const props = useSpring({ to: { opacity: 1, y:0 }, from: { opacity: 0 , y:-10},  delay: 500 })
    const dispatch = useDispatch()
    return (
        <animated.div className="w-full h-20 bg-red-400 p-2 flex items-center shadow-md fixed z-50" style={props}>
            <div className="flex-1">
            <div className="rounded-full w-16 h-16 bg-white overflow-hidden" onClick={()=>{ 
                dispatch(detailSelect(''))
                dispatch(menuSelect(''))}}>
            <img src="https://w1.pngwing.com/pngs/612/379/png-transparent-vegetables-turnip-garden-radish-daikon-asparagus-root-vegetables-line-logo.png" className="w-full" alt="hello"/>
            </div>
            </div>
            <p className="m-26 font-bold text-3xl w-4/6 text-white">Ravano Restaurant</p>
        </animated.div>
    )
}
