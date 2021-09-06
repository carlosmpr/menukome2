import React, { useState } from "react";
import Slide from "./Slide/Slide";
import ReactSwipe from "react-swipe";
import SlideDots from "./Slide/SlideDots";
import { useDispatch } from "react-redux";
import { setSliderIndex } from "../features/counter/counterSlice";
import { useSpring, animated } from 'react-spring'
export default function Slider({ plates }) {
  const [element, setElement] = useState(null);
  const dispatch = useDispatch();
  const props = useSpring({ to: { opacity: 1, x:0 }, from: { opacity: 0 , x:-10},  delay: 500 })
  let reactSwipeEl;
  let platesObject = null;

  if (plates) {
    platesObject = plates.map((plate) => JSON.parse(plate));
  }

  if (!platesObject) {
    return <p>Loading...</p>;
  }

  return (
    
    <animated.div className="relative" style={props}>
      <div className="w-full flex items-center justify-evenly">
        <i
          className="fa text-2xl fa-chevron-left"
          aria-hidden="true"
          onClick={() => {
            reactSwipeEl.prev();
          }}
        ></i>
        <ReactSwipe
          chiclassName="w-full "
          swipeOptions={{
            continuous: false,
            callback: () => dispatch(setSliderIndex(element.getPos())),
          }}
          ref={(el) => {
            setElement(el);
            reactSwipeEl = el;
          }}
        >
          {platesObject.map((food, index) => (
            <div>
              <Slide key={`${food.name} ${food.price}`}{...food} platesObject={platesObject} position={index} />
            </div>
          ))}
        </ReactSwipe>
        <i
          className="fa text-2xl fa-chevron-right"
          aria-hidden="true"
          onClick={() => {
            reactSwipeEl.next();
          }}
        ></i>
      </div>

      {element ? (
        <SlideDots element={element} dataObject={platesObject} />
      ) : null}
    </animated.div>
  );
}
