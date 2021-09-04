import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { detailSelect, menuSelect } from '../../features/counter/counterSlice'
import { useSpring, animated } from 'react-spring'
export default function MenuItems({children, text}) {
    const styles = useSpring({
        config:{ duration: 100 },
        to: [
          {y:2,  boxShadow: '0 0 0 5px rgba(0, 0, 0, 0.2)' },
         
          { y:0,  boxShadow: '0 0 0 0px rgba(0, 0, 0, 0.2)'}
        ],
        from: { y:0,   boxShadow: '0 0 0 0px rgba(0, 0, 0, 0.2)' },
      })
    const menuSelected = useSelector(state => state.counter.menuSelected)
    const dispatch = useDispatch()
    return (
        <div className="p-2 flex flex-col items-center" onClick={()=>{
            dispatch(menuSelect(text))
            dispatch(detailSelect(''))
            }} style={styles}>
        <animated.div className={`${menuSelected === text ? "bg-red-200" : "bg-white"} rounded-xl shadow-md p-2`} style={menuSelected === text ? styles:null}>
            {children}
        </animated.div>
        <p className={`${menuSelected === text ? "text-white font-bold" : "text-black font-bold"}`}>{text}</p>
        </div>
    )
}
