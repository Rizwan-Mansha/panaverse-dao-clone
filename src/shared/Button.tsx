import React from "react";
import { FC } from "react";

const Button: FC<{ text: string }> = ({text}) => { // ({text})//1st
  // const text = props.text; //second method to map props value
  // const { text } = props; // third method
  return (
    <div>
      <button className="rounded-full text-white font-medium text-lg bg-primary
        py-4 px-8 hover:shadow-lg hover:scale-105 duration-300  ">
        {text}
      </button>
    </div>
  );
};

export default Button;
