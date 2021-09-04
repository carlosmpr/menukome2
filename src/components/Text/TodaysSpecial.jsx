import React from 'react'
import TextHeader from './TextHeader'
export default function TodaysSpecial({day}) {

    const today = () => {
        switch (day) {
            case 1:
                return "Monday"
            case 2:
                return "Tuesday"
            case 3:
                return "Wednesday"
            case 4:
                return "Thursday"
            case 5:
                return "Friday"
            case 6:
                return "Saturday"
            case 7:
                return "Sunday"
            default:
                return "Unique"
        }
    }
    return (
       <TextHeader text={`${today()} Special`}/>
    )
}
