import React from "react";

export default function InformationCard() {
  return <div className="w-full h-1/5 bg-red-200 p-4 flex items-center justify-around rounded-xl shadow-md bg-gradient-to-r from-red-500 to-yellow-500">
     <div className="w-2/5">
      <p className="text-white">Hello</p>
      <p className="text-white text-xs text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  </p>
      </div>
      <div className="w-6/12 rounded-xl overflow-hidden p-2">
      <img src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1103&q=80" className="w-full rounded-full" alt="image"/>
      </div>
      </div>;
}
