import React from "react";
import { useSpring, animated } from 'react-spring'
export default function Loading() {
    const styles = useSpring({
        loop: true,
        to: [
          { opacity: 1, scale:2 },
          { opacity: 0, scale:1, color: 'rgb(14,26,19)'},
        ],
        from: { opacity: 0, color: 'red'},
      })
  return (
    <div className="w-full h-full flex flex-col mt-36 items-center ">
        <div className="rounded-full w-28 h-28 bg-white overflow-hidden" >
            <img src="https://w1.pngwing.com/pngs/612/379/png-transparent-vegetables-turnip-garden-radish-daikon-asparagus-root-vegetables-line-logo.png" className="w-full" alt="hello"/>
            </div>
            <div>
        <animated.p className="text-lg font-bold" style={styles}>Loading..</animated.p>
        </div>
    </div>
  );
}
