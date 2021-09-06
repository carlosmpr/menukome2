import React, { useState } from "react";
import MiniSlide from "./Slide/MiniSlide";
import ReactSwipe from "react-swipe";
import SlideDots from "./Slide/SlideDots";
import { useDispatch } from "react-redux";
import { setMiniSlider } from "../features/counter/counterSlice";

export default function MiniSlider({ plates,block }) {
  const [element, setElement] = useState();
  const dispatch = useDispatch();

  let reactSwipeEl;
  let platesObject;

  if (plates) {
    platesObject = plates.map((plate) => JSON.parse(plate));
  }

  const data = () => {
    let newArray = [];
    let magicArry = [];

    if(platesObject.length === 1){
    const resultArray = [<div className="flex"><MiniSlide {...platesObject[0]} block={block}/> </div>]
      return resultArray
    } else{
    for (let i = 0; i <= platesObject.length; i++) {

      if (i === platesObject.length) {
        const resultArray = <div className="flex space-x-2">{[...newArray]}</div>;
        magicArry.push(resultArray);
        newArray = [];
      }
      if (i % 2 === 0) {
        const resultArray = <div className="flex space-x-2">{[...newArray]}</div>;
        magicArry.push(resultArray);
        newArray = [];
      }
      newArray.push(<MiniSlide {...platesObject[i]} />);
    }
    if(platesObject.length == 2) {
      magicArry.pop()
      
    }
    magicArry.shift();
    return magicArry;
  }
  };


  return (
    <>
      <div className="w-full flex items-center justify-evenly">
        <i className="fa text-2xl fa-chevron-left" aria-hidden="true"></i>
        <ReactSwipe
          chiclassName="w-full"
          swipeOptions={{
            continuous: false,
            callback: () => dispatch(setMiniSlider(element.getPos())),
          }}
          ref={(el) => {
            setElement(el);

            reactSwipeEl = el;
          }}
        >
          {plates ? (
            data()
          ) : (
            <div className="flex">
              <MiniSlide />
              <MiniSlide />
            </div>
          )}
        </ReactSwipe>
        <i className="fa text-2xl fa-chevron-right" aria-hidden="true"></i>
      </div>

      <SlideDots dataObject={data()} mini={true} />
    </>
  );
}
