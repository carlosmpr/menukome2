import React from 'react'
import { useSpring, animated } from 'react-spring'
export default function HappyHour() {
    const props = useSpring({ to: { opacity: 1, x:0 }, from: { opacity: 0 , x:-10},  delay: 600 })
    return (
        <animated.div className="w-full flex justify-evenly items-center h-20 p-2 mb-12 shadow-lg rounded-md bg-red-100" style={props}>
            <p className="font-bold">Happy Hour today at 4:00 PM - 8:00 PM</p>
        </animated.div>
    )
}
