import React from "react";
import { FC } from "react";

//Interaface For QuarterBox Props

interface IProps{
  header: string,
  description: string,
  number: number,
  haveBorder?: boolean
}

const QuarterBox: FC<IProps> = ({header, description,number,haveBorder = true}) => {
  return (
    <div className={`rounded-xl flex-1 relative flex flex-col justify-center  p-14  px-8 py-16 ${haveBorder && 'border'}`}>
    <h4 className="text-lg font-bold mb-2 ">{header}</h4>
    <p className="mt-2 text-slate-600 text-xl ">
      {description}
    </p>
    <div className="absolute text-gray-200 -top-6 right-10  font-bold text-[170px]  -z-10">
      {number}
    </div>
  </div>
   
);
};

export default QuarterBox;
