import React from "react";
import Wrapper from "@/shared/Wrapper";
import Image from "next/image";
import HeroPoster from "@/assets/images/hero-poster.png"
import Button from "../shared/Button";


const Hero = () => {
  return (
    <section className="max-w-7xl max-h-screen mt-12">
      <Wrapper>
        <div className="flex items-center flex-col lg:flex-row ">
          {/* Left Side */}
          <div  className="flex-1 ">
            <h4 className="text-primary font-semibold text-lg ">
              Presidential Initiative for Artificial Intelligence and Computing
              (PIAIC).
            </h4>
            <h1 className="text-5xl md:text-6xl font-semibold">Certified Web 3.0 and Metaverse Developer</h1>
            <div className="max-w-2xl">
            <p className="text-xl my-6 text-gray-700">
              A One and Quarter Years Panaverse DAO Earn as you Learn Program
              Getting Ready for the Next Generation of the Internet
            </p>
            <p className="text-xl my-6 text-gray-700">
              Consolidating Web 3.0, Metaverse, Artificial Intelligence(AI)
              Cloud, Edge, Ambient Computing/IoT, Network Automation, and
              Bioinformatics Technology
              </p>
              </div>
            <Button text={'Learn More'} />
          </div>

          {/* Right Side */}
          <div className="flex-1 ">
            <Image src={HeroPoster} alt="Hero Poster" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
