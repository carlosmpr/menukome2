import React from 'react'
import MiniSlide from '../components/Slide/MiniSlide'
import TextHeader from '../components/Text/TextHeader'
const width = "w-1/2"
const details = true
export default function MenuInfo() {
    return (
        <>
        <TextHeader text="Searching" />
        <div className="w-full flex flex-1 space-y-4 flex-wrap">
           
        <MiniSlide w={width} details={details}/>
        <MiniSlide w={width} details={details}/>
        <MiniSlide w={width} details={details}/>
        <MiniSlide w={width} details={details}/>

        <MiniSlide w={width} details={details}/>
        <MiniSlide w={width} details={details}/>
        <MiniSlide w={width} details={details}/>
        <MiniSlide w={width} details={details}/>

        <MiniSlide w={width} details={details}/>
        <MiniSlide w={width} details={details}/>
        <MiniSlide w={width} details={details}/>
        <MiniSlide w={width} details={details}/>

        <MiniSlide w={width} details={details}/>
        <MiniSlide w={width} details={details}/>
        <MiniSlide w={width} details={details}/>
        <MiniSlide w={width} details={details}/>
      
      </div>
      </>
    )
}
