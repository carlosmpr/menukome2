import React,{useState} from "react";

export default function Search({setSearch, search}) {

  return (
    <div className="w-full  h-14 mb-12">
      <input
      type="text"
      value={search}
      onChange={(e)=> setSearch(e.target.value)}
        className="w-full h-full p-4 outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent shadow-lg rounded-md bg-gray-200"
        placeholder="&#xF002;  Search"
        style={{ fontFamily: "Arial, FontAwesome" }}
        onKeyPress={(e)=>{ if(e.key === 'Enter'){
          e.target.blur();
        }}}
      ></input>
    </div>
  );
}
