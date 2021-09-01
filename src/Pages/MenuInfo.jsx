import React,{useEffect} from 'react'
import MiniSlide from '../components/Slide/MiniSlide'
import TextHeader from '../components/Text/TextHeader'
import { useSelector } from 'react-redux'
import axios from 'axios'
const width = "w-1/2"
const details = true
export default function MenuInfo() {
  const menuSelected = useSelector(state=> state.counter.menuSelected)
  useEffect(() => {
    
  }, [menuSelected])
    return (
        <>
        <TextHeader text={menuSelected} />
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
