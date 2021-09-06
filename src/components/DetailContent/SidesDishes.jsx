import React from "react";
import TextHeader from "../Text/TextHeader";
import MiniSlide from "../Slide/MiniSlide";
const width = "w-1/2";
const details = true;
export default function SidesDishes({ sides, drinks }) {

  return (
    <div className="w-full p-4">
      <TextHeader text={"Better with"} postion="text-start" />
      <div className="w-full flex flex-1  flex-wrap p-4 space-y-4">
        {sides.map((food) => {
          const foodObject = JSON.parse(food);

          return (
            <MiniSlide
              w={width}
              details={details}
              {...foodObject}
              block={true}
            />
          );
        })}

        {drinks.map((food) => {
          const foodObject = JSON.parse(food);

          return (
            <MiniSlide
              w={width}
              details={details}
              {...foodObject}
              block={true}
            />
          );
        })}
      </div>
    </div>
  );
}
