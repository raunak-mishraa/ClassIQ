import React from "react";
import Container from "./container/Container";
import arrow from "../assets/arrow.svg";
function Courses() {
  return (
      <div className="pt-20 bg-[#F5F5F5]">
       <div>
        <div className="flex gap-x-2 items-center">
            <h1 className="font-semibold text-lg text-[#3E3E3E]">All Courses</h1>
            <img src={arrow} alt="courses" className="h-3.5" />
            </div>
        <div className="mt-10 grid grid-cols-3 gap-x-9 w-full">
            <div className="bg-[#ECEDEF] w-full">
                <div className="w-full h-44"></div>
            </div>
            <div className="bg-[#ECEDEF]">er</div>
            <div className="bg-[#ECEDEF]">er</div>
        </div>
       </div>
      </div>
  );
}

export default Courses;
