import React from "react";
import FooterSpace from "../components/FooterSpace";
import ImageContent from "../components/DetailContent/ImageContent";
import TextHeader from "../components/Text/TextHeader";
import GeneralInfo from "../components/DetailContent/GeneralInfo";
import Ingredients from "../components/DetailContent/Ingredients";
import MiniSlide from "../components/Slide/MiniSlide";
import MiniSlider from "../components/MiniSlider";
import InformationCard from "../components/cards/InformationCard";
import SidesDishes from "../components/DetailContent/SidesDishes";
import OtherPlates from "../components/DetailContent/OtherPlates";

export default function Detail() {
  return (
    <div className="w-full h-4/5  flex-1">
      <div className="w-full  flex-1 space-y-4 ">
        <ImageContent image="https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1103&q=80" />
        <GeneralInfo />
        <Ingredients />
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
