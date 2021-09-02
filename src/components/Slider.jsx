import React, { useState } from "react";
import Slide from "./Slide/Slide";
import ReactSwipe from "react-swipe";
import SlideDots from "./Slide/SlideDots";
import { useDispatch } from "react-redux";
import { setSliderIndex } from "../features/counter/counterSlice";

export default function Slider({ plates }) {
  const [element, setElement] = useState(null);
  const dispatch = useDispatch();
  let reactSwipeEl;
  let platesObject = null;

  if (plates) {
    platesObject = plates.map((plate) => JSON.parse(plate));
  }

  if (!platesObject) {
    return <p>Loading...</p>;
  }

  return (
    <div className="relative">
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
              <Slide {...food} platesObject={platesObject} position={index} />
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
    </div>
  );
}
