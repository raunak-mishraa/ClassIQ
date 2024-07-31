import React from "react";
import Container from "./container/Container";
import feature from "../assets/feature_img.svg";
import { GiMaterialsScience } from "react-icons/gi";
import { FaUserCheck } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import Button from "./Button";
import arrow from "../assets/arrow.svg";
function Feature() {
  return (
    <Container>
      <div className="flex pt-20 items-center justify-between h-[70vh]  gap-x-14">
        <div className="md:w-3/7 h-full overflow-hidden bg-[#ECEDEF] w-full flex justify-center items-end rounded-2xl relative">
          <div className="w-[70%] h-[30%] relative flex items-center justify-center">
            <div className="absolute w-[80%] blur-3xl opacity-60 h-full rounded bg-[#C2F578] -top-5 z-0 " />
            <div className=" bg-[#f5f5f5] shadow w-[80%] h-full rounded-tl-xl rounded-tr-xl z-10 flex items-center justify-center"></div>
          </div>
          <img
            src={feature}
            alt="feature"
            className="h-80 object-cover absolute z-20"
          />
        </div>
        <div className="md:w-4/7 w-full">
          <h1 className="text-3xl font-bold text-[#373636]">
            All-In-One Solution
          </h1>
          <div className="space-y-5">
            <div className="flex gap-x-2 mt-4 items-center">
              {/* <div className='w-14 h-14 shadow-md rounded-full bg-[#F5F5F5] flex justify-center items-center'> */}
              <FaBook className="text-lg" />
              {/* </div> */}
              <h2 className="text-[#545454] text-xl font-medium">
                Flexible Learning
              </h2>
            </div>
            <div className="flex gap-x-2 mt-4 items-center">
              {/* <div className='w-14 h-14 shadow-md rounded-full bg-[#F5F5F5] flex justify-center items-center'> */}
              <FaUserCheck className="text-lg" />
              {/* </div> */}
              <h2 className="text-[#545454] text-xl font-medium">
                Expert Instructors
              </h2>
            </div>
            <div className="flex gap-x-2 mt-4 items-center">
              {/* <div className='w-14 h-14 shadow-md rounded-full bg-[#F5F5F5] flex justify-center items-center'> */}
              <FaUsers className="text-lg" />
              {/* </div> */}
              <h2 className="text-[#545454] text-xl font-medium">
                Interactive Community
              </h2>
            </div>
          </div>
          <Button className="mt-8 font-semibold text-[#3E3E3E] flex items-center gap-x-2 bg-[#C2F578] px-5 rounded-lg w-max hover:bg-[#a5d064] transition-colors ease-linear">
            <img src={arrow} alt="arrow image" className="h-3.5" />
            Join Now
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default Feature;
