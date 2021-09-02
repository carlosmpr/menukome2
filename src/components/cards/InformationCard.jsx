import React from "react";
import { useSpring, animated } from 'react-spring'
export default function InformationCard({today}) {
  const props = useSpring({ to: { opacity: 1, x:0 }, from: { opacity: 0 , x:-10},  delay: 500 })
if(today){
  return <animated.div className="w-full h-1/5 bg-red-200 p-4 flex items-center justify-around rounded-xl shadow-md bg-gradient-to-r from-red-500 to-yellow-500" style={props}>
     <div className="w-2/5">
      <p className="text-white">{today.name} ${today.price}</p>
      <p className="text-white text-xs text-justify">{today.desc} </p>
      </div>
      <div className="w-6/12 rounded-xl overflow-hidden p-2">
      <img src={today.image} className="w-full rounded-full" alt="image"/>
      </div>
      </animated.div>;
}else{
  return null
}
}
