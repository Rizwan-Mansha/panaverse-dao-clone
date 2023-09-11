import React from "react";
import Wrapper from "@/shared/Wrapper";
import Button from "../shared/Button";
import QuarterBox from "@/shared/QuarterBox";

export const QuartersData = [
  {
    header: "Quarter I",
    description: "CS-101: Object-Oriented Programming using TypeScript",
    number: 1,
  },
  {
    header: "Quarter II",
    description:
      "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    number: 2,
  },
  {
    header: "Quarter III",
    description:
      "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
    number: 3,
  },
  // {
  //   header: "Quarter IV",
  //   description:
  //     "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
  //   number: 4,
  // },
  // {
  //   header: "Quarter V",
  //   description:
  //     "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
  //   number: 5,
  // },
];

const CoreTracks = () => {
  const header = "Core Courses \n (Common in All Specializations):";

  //mapping for Quarter Box data to prevent code repeatation

  return (
    <section className="mt-16 lg:mt-28">
      <Wrapper>
        {/* Content */}
        <div className="max-w-screen-md">
          <p className="font-medium text-green-800 mb-2">PROGRAM OF STUDIES</p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  font-semibold whitespace-pre-line">
            {header}
          </h2>

          <p className="text-xl my-6 text-gray-700">
            Every participant of the program will start by completing the
            following three core courses:
          </p>
        </div>
        <div>
          <Button text={"Learn More"} />
        </div>

        {/* Boxes */}
        {/* Method:-1 with Mapping */}
        <div className="mt-14 flex space-x-1  md:flex-row gap-x-6 lg:gap-x-12">
       {
        QuartersData.map((item,index) => (
          <QuarterBox
            header={item.header}
            description={item.description}
            number={index+1}
            />
        
          ))
        }
      </div> 
     


        {/* Method:-2 with mapping */}
        
      {/* <div className="flex flex-col gap-y-6 md:flex-row  max-w-screen-xl gap-x-10 mt-10">
        {QuartersData.map(item => {
          return (
              <div className=" border rounded-xl flex-1 relative flex flex-col justify-center  p-14  px-8 py-16 ">
                <h4 className="text-lg font-bold mb-2 ">{item.header}</h4>
                <p className="mt-2 text-slate-600 text-xl ">
                  {item.description}
                </p>
                <div className="absolute text-gray-200 -top-10 right-10  font-bold text-[170px]  -z-10">
                  {item.number}
                </div>
              </div>
          );
        })}
        </div> */}

        {/* </div> */}
      </Wrapper>
    </section>
  );
};

export default CoreTracks;
