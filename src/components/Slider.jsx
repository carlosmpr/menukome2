import React from "react";
import Slide from "./Slide/Slide";
import ReactSwipe from "react-swipe";
export default function Slider({plates}) {
  let reactSwipeEl;
  let platesObject = null;

  if(plates){
    platesObject = plates.map(plate => JSON.parse(plate))
  }

  console.log(platesObject)
  if(!platesObject){
    return <p>Loading...</p>
  }
  return (
    <>
      <div className="w-full flex items-center justify-evenly">
        <i className="fa text-2xl fa-chevron-left" aria-hidden="true"></i>
        <ReactSwipe
          chiclassName="w-full"
          swipeOptions={{ continuous: false }}
          ref={(el) => (reactSwipeEl = el)}
        >
          {platesObject.map(food =><div>
            <Slide {...food}/>
          </div> )}
 
        </ReactSwipe>
        <i className="fa text-2xl fa-chevron-right" aria-hidden="true"></i>
      </div>
      <div className="w-full flex items-center justify-center space-x-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
      </div>
    </>
  );
}
