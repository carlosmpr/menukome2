import React,{useState, useEffect} from "react";
import FooterSpace from "../components/FooterSpace";
import ImageContent from "../components/DetailContent/ImageContent";
import GeneralInfo from "../components/DetailContent/GeneralInfo";
import Ingredients from "../components/DetailContent/Ingredients";
import InformationCard from "../components/cards/InformationCard";
import SidesDishes from "../components/DetailContent/SidesDishes";
import OtherPlates from "../components/DetailContent/OtherPlates";
import axios from "axios";
import Loading from "../components/Loading";
import {useSelector} from 'react-redux'
import ErrorNotFount from "../components/ErrorNotFount";
export default function Detail() {
  window.scrollTo(0,0)
  const detail = useSelector(state => state.counter.detailsSelected)
  const [detailData, setDetailData] = useState(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    (async function() {
      try {
          const response = await axios.post(
              `https://xmazrc1yvj.execute-api.us-east-1.amazonaws.com/Dev/menu/detail`,{
                search: detail.name
              }
          );
          setDetailData(response.data.body.Items[0])
          setLoading(true)
          
          // dispatch(setData(response.data.body.Items))
      } catch (e) {
          console.error(e);
      }
  })()
    
  }, [detail])

if(!loading){
  return <Loading />
}
 
  if(!detailData){
    return <ErrorNotFount />
  }


  console.log(detailData.similar)
  return (
    <div className="w-full h-4/5  flex-1">
      <div className="w-full  flex-1 space-y-4 ">
        <ImageContent image={detail.image} />
        <GeneralInfo name={detail.name} price={detail.price} image={detail.image}/>
        <Ingredients ingredients={detailData.ingredients.split(",")}/>
        <SidesDishes sides={detailData.sides.split(';')} drinks={detailData.drinks.split(';')}/>
       <OtherPlates plates={detailData.similar.split(';')}/>

        <div className="w-full p-4">
        <InformationCard />
        </div>
       
      </div>
      <FooterSpace />
    </div>
  );
}
