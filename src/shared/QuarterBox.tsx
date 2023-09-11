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
    
    <div className={`flex flex-col flex-1 rounded-xl relative    px-8 py-16  ${haveBorder && 'border'}`}>
    <h4 className="text-lg font-bold mb-2 ">{header}</h4>
    <p className="mt-2 text-slate-600 text-xl ">
      {description}
    </p>
    <div className="absolute font-bold text-gray-200 text-[170px]  -z-10 top-20 right-10   ">
      {number}
    </div>
      </div>
      
   
);
};

export default QuarterBox;
