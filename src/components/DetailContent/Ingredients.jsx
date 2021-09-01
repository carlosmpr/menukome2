import React from 'react'
import ReactSwipe from "react-swipe";
import TextHeader from '../Text/TextHeader';
import Badge from '../cards/Badge';
export default function Ingredients() {
    let reactSwipeEl;
    return (
        <div className="w-full px-4">
        <TextHeader text={"Ingredients"} postion="text-start"/>
        <ReactSwipe
              chiclassName="w-full"
              swipeOptions={{ continuous: false }}
              ref={(el) => (reactSwipeEl = el)}
            >
    
                <div className="flex w-full justify-evenly">
                <Badge text={"Tomato"} />
                <Badge text={"Tomato"} />
                <Badge text={"Tomato"} />
                <Badge text={"Tomato"} />
                </div>
                <div className="flex w-full justify-evenly">
                <Badge text={"Tomato"} />
                <Badge text={"Tomato"} />
                <Badge text={"Tomato"} />
                <Badge text={"Tomato"} />
                </div>
                </ReactSwipe>
        </div>
    )
}
