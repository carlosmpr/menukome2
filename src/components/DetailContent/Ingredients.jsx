import React from 'react'
import ReactSwipe from "react-swipe";
import TextHeader from '../Text/TextHeader';
import Badge from '../cards/Badge';
import { useSpring, animated } from 'react-spring'
export default function Ingredients({ingredients}) {
    let reactSwipeEl;

    const props = useSpring({ to: { opacity: 1, x:0 }, from: { opacity: 0 , x:-10},  delay: 500 })
 const data = () => {
     let newArray =[]
    let magicArry = []
     for (let i = 0; i <= ingredients.length; i++ ){
        if(i === ingredients.length ){
            const resultArray = <div className="flex w-full space-x-2  justify-evenly">{[...newArray]}</div>
            magicArry.push(resultArray)  
            newArray = []
        }
        if(i %4 ===0){
            const resultArray = <div className="flex w-full space-x-2   justify-evenly">{[...newArray]}</div>
            magicArry.push(resultArray)  
        newArray = []
        } 
        newArray.push(<Badge text={ingredients[i]}/>)
     }

     
     magicArry.shift()
     return magicArry
 }
    console.log(data())
    return (
        <animated.div className="w-full px-4 space-y-4" style={props}>
        <TextHeader text={"Ingredients"} postion="text-start"/>
        <ReactSwipe
              chiclassName="w-full"
              swipeOptions={{ continuous: false }}
              ref={(el) => (reactSwipeEl = el)}
            >
      
               {data()}
              
            
              
                </ReactSwipe>
        </animated.div>
    )
}
