import React from 'react'
import TextHeader from '../Text/TextHeader'
import MiniSlider from '../MiniSlider'
export default function OtherPlates({plates}) {
    return (
        <div className="w-full p-4">
        <TextHeader text={"Similar Products"} postion="text-start" />
        <MiniSlider plates={plates}/>
      </div>
    )
}
