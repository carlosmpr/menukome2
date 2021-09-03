import React from 'react'

export default function Badge({text}) {
    return (
        <div className="p-2  bg-red-400 rounded-xl shadow-md">
            <p className="text-white text-xs  uppercase">{text}</p>
        </div>
    )
}
