import React from 'react'
import TextHeader from '../components/Text/TextHeader'
import InformationCard from '../components/cards/InformationCard'
import Search from '../components/Search'
import Slider from '../components/Slider'
import MiniSlider from '../components/MiniSlider'
export default function Welcome() {
    return (
        <div className="w-full flex-1 space-y-4">
        <TextHeader text="Todays Plate" />
        <InformationCard />
        <Search />
        <TextHeader text="Favorites" postion="text-start"/>
        <Slider />
        <TextHeader text="User Favorites" postion="text-start"/>
        <MiniSlider />
        <InformationCard />
      </div>
    )
}
