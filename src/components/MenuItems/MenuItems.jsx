import React from 'react'

export default function MenuItems({children, text}) {
    return (
        <div className="p-2 flex flex-col items-center">
        <div className="bg-white rounded-xl shadow-md p-2">
            {children}
        </div>
        <p className="font-bold">{text}</p>
        </div>
    )
}
