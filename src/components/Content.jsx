import React from "react";
import Welcome from "../Pages/Welcome";
import FooterSpace from "./FooterSpace";
import MenuInfo from "../Pages/MenuInfo";
import { useSelector } from "react-redux";
export default function Content() {
  const menuSelected = useSelector((state) => state.counter.menuSelected);
  console.log(menuSelected);
  return (
    <div className="w-full h-4/5  flex-1 p-4">
      <div className="w-full h-1/6"></div>
      {menuSelected !== "" ? <MenuInfo /> : <Welcome />}
      <FooterSpace />
    </div>
  );
}
