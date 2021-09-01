import React from 'react'

export default function FoodReactionIcons({image , size='w-5 h-5'}) {
    return (
        <img src={image} alt={image} className={`${size} text-gray-400`} />
        
    )
}
