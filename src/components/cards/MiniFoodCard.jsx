import React from 'react'

export default function MiniFoodCard({image}) {
    return (
        <div className="w-32 h-28 overflow-hidden rounded-xl shadow-md">
        <img src={image} alt={image} className="w-full h-full rounded-xl" />
      </div>
    )
}
