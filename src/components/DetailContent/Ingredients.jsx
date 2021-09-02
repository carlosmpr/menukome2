import React from 'react'
import ReactSwipe from "react-swipe";
import TextHeader from '../Text/TextHeader';
import Badge from '../cards/Badge';
export default function Ingredients({ingredients}) {
    let reactSwipeEl;


 const data = () => {
     let newArray =[]
    let magicArry = []
     for (let i = 0; i <= ingredients.length; i++ ){
        if(i === ingredients.length ){
            const resultArray = <div className="flex w-full justify-evenly">{[...newArray]}</div>
            magicArry.push(resultArray)  
            newArray = []
        }
        if(i %4 ===0){
            const resultArray = <div className="flex w-full justify-evenly">{[...newArray]}</div>
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
        <div className="w-full px-4">
        <TextHeader text={"Ingredients"} postion="text-start"/>
        <ReactSwipe
              chiclassName="w-full"
              swipeOptions={{ continuous: false }}
              ref={(el) => (reactSwipeEl = el)}
            >
      
               {data()}
              
            
              
                </ReactSwipe>
        </div>
    )
}
