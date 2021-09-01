import React from 'react'

export default function TextHeader({text, postion="text-center"}) {
    return (
        <p className={`font-bold text-3xl ${postion}`}>{text}</p>
    )
}
