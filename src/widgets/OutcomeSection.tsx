import Wrapper from "@/shared/Wrapper";
import React from "react";
import Image from "next/image";
import FemaleEmploye from "@/assets/images/Female-Emp.png";
import PolygonIcon from "@/assets/images/Polygon Icon.png";

const OutcomeSection = () => {
  return (
    <section>
      <Wrapper>
        <div className="flex flex-1">
          <div className="ml-8">
            <Image
              src={FemaleEmploye}
              alt="Business finance employement female"
            />
          </div>
          <div className="mt-24 ml-6">
            <h4 className="font-bold text-3xl max-w-lg">
              The Outcome for Participants of the Program
            </h4>
            <p className="max-w-xl text-xl my-6 text-gray-700">
              As a graduate of this program, you will own valuable products such
              as Full-Stack App Templates, AR and VR Experiences, and APIs that
              are marketed globally by the Panaverse DAO. You will also have the
              opportunity to offer your services at a rate of $50 per hour,
              providing a path to financial stability while contributing to the
              growth of Pakistan's software exports.
            </p>
                        
                      <div className="flex flex-col gap-y-8 ">
            <div className="flex flex-row items-center  gap-x-12">
  <div className="flex items-center gap-x-4">
    <Image src={PolygonIcon} alt="Polygon Icon"  />
    <p>Product Ownership</p>
  </div>

  <div className="flex items-center gap-x-4">
    <Image src={PolygonIcon} alt="Polygon Icon"  />
    <p>Freelancing</p>
  </div>
</div>

<div className="flex gap-x-11">
  <div className="flex items-center gap-x-4">
    <Image src={PolygonIcon} alt="Polygon Icon" />
    <p className="max-w-[140px]">Global Marketing by DAO</p>
  </div>

  <div className="flex items-center gap-x-4">
    <Image src={PolygonIcon} alt="Polygon Icon" />
    <p>Boosting Economy.</p>
                          </div>
                          </div>
                          </div>
       </div>
       </div>
      </Wrapper>
    </section>
  );
};

export default OutcomeSection;
