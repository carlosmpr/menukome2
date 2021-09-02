import React,{useEffect}from 'react'
import InformationCard from '../components/cards/InformationCard'
import HappyHour from '../components/cards/HappyHour'
import Slider from '../components/Slider'
import MiniSlider from '../components/MiniSlider'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import { todaysOffer } from '../features/counter/counterSlice'
import TodaysSpecial from '../components/Text/TodaysSpecial'
import TextHeader from '../components/Text/TextHeader'
import InfoBanner from '../components/cards/InfoBanner'
import Loading from '../components/Loading'
export default function Welcome() {
  const date = new Date(Date.now())
  const offer = useSelector(state => state.counter.offer)
 const dispatch = useDispatch()
  useEffect(() => {
    (async function() {
      try {
          const response = await axios.post(
              ` https://xmazrc1yvj.execute-api.us-east-1.amazonaws.com/Dev/menu/offer`,{
                search: date.getDay()
              }
          );
        
      dispatch(todaysOffer(response.data.body.Items[0]))
      } catch (e) {
          console.error(e);
      }
  })()
  }, [])

   if(offer.length === 0){
     return <Loading />
   }

console.log(offer)
    return (
        <div className="w-full flex-1 space-y-4">
       <TodaysSpecial day={offer.category}/>
        <InformationCard today={JSON.parse(offer.today)}/>
        <HappyHour />
        <InfoBanner />
        <TextHeader text="Specials" postion="text-start"/>
        <Slider plates={offer.special.split(';')}/>
        <TextHeader text="User Favorites" postion="text-start"/>
        <MiniSlider plates={offer.favorites.split(';')}/>
        <InformationCard today={JSON.parse(offer.combo)}/>
      </div>
    )
}
