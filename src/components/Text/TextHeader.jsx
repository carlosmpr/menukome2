import React from 'react'
import { useSpring, animated } from 'react-spring'
export default function TextHeader({text, postion="text-center"}) {
    const props = useSpring({ to: { opacity: 1, x:0 }, from: { opacity: 0 , x:-10},  delay: 500 })
    return (
        <animated.p className={`font-bold text-3xl capitalize ${postion}`} style={props}>{text}</animated.p>
    )
}
