import React,{useState, useEffect} from "react";
import FooterSpace from "../components/FooterSpace";
import ImageContent from "../components/DetailContent/ImageContent";
import GeneralInfo from "../components/DetailContent/GeneralInfo";
import Ingredients from "../components/DetailContent/Ingredients";
import InformationCard from "../components/cards/InformationCard";
import SidesDishes from "../components/DetailContent/SidesDishes";
import OtherPlates from "../components/DetailContent/OtherPlates";
import axios from "axios";
import {useSelector} from 'react-redux'
export default function Detail() {
  const detail = useSelector(state => state.counter.detailsSelected)
  const [detailData, setDetailData] = useState(null)
  useEffect(() => {
    (async function() {
      try {
          const response = await axios.post(
              `https://xmazrc1yvj.execute-api.us-east-1.amazonaws.com/Dev/menu/detail`,{
                search: detail.name
              }
          );
          setDetailData(response.data.body.Items[0])
          
          // dispatch(setData(response.data.body.Items))
      } catch (e) {
          console.error(e);
      }
  })()
    
  }, [detail])

  if(!detailData){
    return<p>Loading...</p>
  }
  return (
    <div className="w-full h-4/5  flex-1">
      <div className="w-full  flex-1 space-y-4 ">
        <ImageContent image={detail.image} />
        <GeneralInfo name={detail.name} price={detail.price} image={detail.image}/>
        <Ingredients ingredients={detailData.ingredients.split(",")}/>
        <SidesDishes />
       <OtherPlates />

        <div className="w-full p-4">
        <InformationCard />
        </div>
       
      </div>
      <FooterSpace />
    </div>
  );
}
