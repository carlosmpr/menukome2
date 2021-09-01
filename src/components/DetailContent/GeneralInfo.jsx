import React from "react";
import TextHeader from "../Text/TextHeader";
export default function GeneralInfo() {
  return (
    <>
      <div className="w-full  px-4 flex items-center justify-around">
        <TextHeader text="Pasta Olive Garden" postion={"text-start"} />
        <p className="text-4xl text-red-500">$20</p>
      </div>
      <div className="w-full px-4">
        <p className="text-justify">
          With Menukome, you can transform your menu into a mobile application,
          and you can highlight your products. It is easy to use and update, and
          you can increase your sales by showing recommendations to your
          customers.
        </p>
      </div>
    </>
  );
}