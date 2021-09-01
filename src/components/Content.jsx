import React from "react";
import Welcome from "../Pages/Welcome";
import FooterSpace from "./FooterSpace";
import MenuInfo from "../Pages/MenuInfo";
export default function Content() {
  return (
    <div className="w-full h-4/5  flex-1 p-4">
      <div className="w-full h-1/6"></div>
     <MenuInfo />
     <FooterSpace />
    </div>
  );
}
