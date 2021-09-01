import React from 'react'
import {useDispatch} from 'react-redux'
import { detailSelect, menuSelect } from '../../features/counter/counterSlice'


export default function MenuItems({children, text}) {
    const dispatch = useDispatch()
    return (
        <div className="p-2 flex flex-col items-center" onClick={()=>{
            dispatch(menuSelect(text))
            dispatch(detailSelect(''))
            }}>
        <div className="bg-white rounded-xl shadow-md p-2">
            {children}
        </div>
        <p className="font-bold">{text}</p>
        </div>
    )
}
