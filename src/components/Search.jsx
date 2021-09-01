import React from "react";

export default function Search() {
  return (
    <div className="w-full  h-14 ">
      <input
        className="w-full h-full p-4 outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent shadow-lg rounded-md bg-gray-200"
        placeholder="&#xF002;  Search"
        style={{ fontFamily: "Arial, FontAwesome" }}
      ></input>
    </div>
  );
}
