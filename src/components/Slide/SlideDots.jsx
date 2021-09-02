import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
import { setMiniSlider, setSliderIndex } from '../../features/counter/counterSlice'
import {useDispatch} from 'react-redux'
export default function SlideDots({dataObject, mini}) {
    const dispatch = useDispatch()
    const index = useSelector(state => state.counter.sliderIndex)
    const miniIndex = useSelector(state => state.counter.miniSliderIndex)

    useEffect(() => {
        
        return () => {
            dispatch(setMiniSlider(0))
            dispatch(setSliderIndex(0))
        }
    }, [])
    if(mini){
        return (
            <div className="w-full flex items-center justify-center space-x-2 ">
            {dataObject.map((item, i) => (
              <div
                className={`w-3 h-3 ${
                  i === miniIndex  ? "bg-red-500 " : "bg-gray-500  opacity-10"
                } rounded-full`}
              ></div>
            ))}
          </div>
        )    
    }
    return (
        <div className="w-full flex items-center justify-center space-x-2 ">
        {dataObject.map((item, i) => (
          <div
            className={`w-3 h-3 ${
              i === index ? "bg-red-500 " : "bg-gray-500  opacity-10"
            } rounded-full`}
          ></div>
        ))}
      </div>
    )
}
