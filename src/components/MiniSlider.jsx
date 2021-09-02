import React from "react";
import MiniSlide from "./Slide/MiniSlide";
import ReactSwipe from "react-swipe";
export default function MiniSlider({plates}) {
  let reactSwipeEl;
let platesObject;

if(plates){
  platesObject = plates.map(plate => JSON.parse(plate))
}

   const data = () => {
     let newArray =[]
    let magicArry = []
     for (let i = 0; i <= platesObject.length; i++ ){
        if(i === platesObject.length ){
          
            const resultArray = <div className="flex">{[...newArray]}</div>
            magicArry.push(resultArray)  
            newArray = []
        }
        if(i %2 ===0){
            const resultArray = <div className="flex ">{[...newArray]}</div>
            magicArry.push(resultArray)  
        newArray = []
        } 
        newArray.push(<MiniSlide {...platesObject[i]}/>)
     }

     console.log(magicArry)
     magicArry.shift()
     magicArry.pop()
     return magicArry
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

        {plates ? data() : <div className="flex">
          <MiniSlide />
          <MiniSlide />
        </div>}
        

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
