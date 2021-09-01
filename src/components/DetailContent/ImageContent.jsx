import React from 'react'

export default function ImageContent({image}) {
    return (
        <div className="w-full">
            <img src={image} alt={image} className="w-full"/>
        </div>
    )
}
