import React from "react";

export default function InformationCard({today}) {
if(today){
  return <div className="w-full h-1/5 bg-red-200 p-4 flex items-center justify-around rounded-xl shadow-md bg-gradient-to-r from-red-500 to-yellow-500">
     <div className="w-2/5">
      <p className="text-white">{today.name} ${today.price}</p>
      <p className="text-white text-xs text-justify">{today.desc} </p>
      </div>
      <div className="w-6/12 rounded-xl overflow-hidden p-2">
      <img src={today.image} className="w-full rounded-full" alt="image"/>
      </div>
      </div>;
}else{
  return null
}
}
