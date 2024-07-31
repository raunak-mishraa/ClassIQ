import React from "react";
import Container from "./container/Container";
import arrow from "../assets/arrow.svg";
import { courses as courseData } from "../utils/data";
function Courses() {
  return (
    <div className="my-20 bg-[#F5F5F5]">
      <div>
        <div className="flex gap-x-2 items-center">
          <h1 className="font-semibold text-lg text-[#3E3E3E]">All Courses</h1>
          <img src={arrow} alt="courses" className="h-3.5" />
        </div>
        <div className="mt-10 h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 w-full">
          {/* <div className="bg-[#ECEDEF] w-full">
                <div className="w-full h-44"></div>
                <div className="w-full h-44"></div>
            </div> */}
          {/* {
                courseData.map((course)=>{
                    return(
                        <div key={course.id} className="bg-[#ECEDEF] h-auto rounded-md w-full p-2">
                            <div className="w-full h-44 ">
                                <img src={course.image} alt={course.title} className="w-full object-cover h-full rounded-lg"/>
                                <div>
                                    <h1 className="text-[#373636] font-semibold mt-2">{course.title}</h1>
                                    <p className="text-[#686868]">{course.desc}</p>
                                    <div className="flex justify-between items-center mt-2">
                                        <h1 className="text-[#373636] font-semibold">${course.price}</h1>
                                        <button className="bg-[#C2F578] text-[#373636] font-semibold px-4 py-1 rounded-md">Enroll</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })  
            } */}

          {courseData.map((course) => (
            <div
              key={course.id}
              className="bg-[#ECEDEF] w-full rounded-md  p-2"
            >
              <div className="w-full h-44">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full object-cover h-full rounded-lg"
                />
              </div>
              <div className="w-full">
                <h1 className="text-[#373636] font-semibold mt-2">
                  {course.title}
                </h1>
                <p className="text-[#686868] h-12">{course.desc}</p>
                <div className="flex justify-between items-center mt-2">
                  <h1 className="text-[#373636] font-semibold">
                    ${course.price}
                  </h1>
                  <button className="bg-[#C2F578] text-[#373636] font-semibold px-4 py-1 rounded-md">
                    Enroll
                  </button>
                </div>
              </div>
            </div>
          ))}
          {/* <div className="bg-[#ECEDEF]">er</div>
            <div className="bg-[#ECEDEF]">er</div> */}
        </div>
      </div>
    </div>
  );
}

export default Courses;
