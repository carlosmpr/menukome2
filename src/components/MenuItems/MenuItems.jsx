import React from 'react'

export default function MenuItems({image, text}) {
    return (
        <div className="p-2 flex flex-col items-center">
        <div className="w-12 h-12 bg-white rounded-xl shadow-md p-2">
            <img src={image} alt={image} className="w-full"/>
        </div>
        <p className="font-bold">{text}</p>
        </div>
    )
}
