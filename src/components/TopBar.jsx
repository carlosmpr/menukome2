import React from 'react'

export default function TopBar() {
    return (
        <div className="w-full h-20 bg-red-400 p-2 flex items-center shadow-md fixed ">
            <div className="flex-1">
            <div className="rounded-full w-16 h-16 bg-white">
            </div>
            </div>
            <p className="m-26 font-bold text-3xl w-4/6 text-white">Brand</p>
        </div>
    )
}
