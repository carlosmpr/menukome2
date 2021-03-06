import React from "react";
import TextHeader from "../Text/TextHeader";
import { useSpring, animated } from 'react-spring'
export default function GeneralInfo({name, price, desc}) {
  const props = useSpring({ to: { opacity: 1, x:0 }, from: { opacity: 0 , x:-10},  delay: 500 })
  return (
    <>
      <div className="w-full  px-4 flex items-center justify-around">
        <TextHeader text={name} postion={"text-start"} />
        <animated.p className="text-4xl text-red-500" style={props}>${price}</animated.p>
      </div>
      <animated.div className="w-full px-4" style={props}>
        <p className="text-justify">
         {desc}
        </p>
      </animated.div>
    </>
  );
}
