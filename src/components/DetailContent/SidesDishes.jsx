import React from 'react'
import TextHeader from '../Text/TextHeader'
import MiniSlide from '../Slide/MiniSlide'
const width = "w-1/2";
const details = true;
export default function SidesDishes() {
    return (
        <div className="w-full p-4">
          <TextHeader text={"Better with"} postion="text-start" />
          <div className="w-full flex flex-1  flex-wrap p-4 space-y-4">
            <MiniSlide w={width} details={details} />
            <MiniSlide w={width} details={details} />
            <MiniSlide w={width} details={details} />
            <MiniSlide w={width} details={details} />
          </div>
        </div>
    )
}
