import React from 'react'
import Image1 from "@/assets/images/image-1.png"
import Image from 'next/image'
import { FC } from 'react'
import { StaticImageData } from 'next/image'

interface SpecilizedBox{
    imageSrc: StaticImageData,
    alt: string,
    specialProgram?: string,
    programName: string
}

const SpecilizedPrograms:FC<SpecilizedBox> = ({imageSrc,alt,specialProgram="Specialized Program",programName}) => {
    return (
        <>
        <div className='flex py-4'>

    <div ><Image src={imageSrc} alt= {alt} /></div>
            
              <div className="ml-4">
                <p className="font-medium text-green-700 mb-2">
                  {specialProgram}
                </p>
                <h2 className="font-medium text-xl max-w-md">
                  {programName}
                </h2>
            </div>
        </div>
        <hr className='h-[2px]  my-1 bg-gray-200 border-0 rounded md:my-1'/>
        </>        

        

            )
}

export default SpecilizedPrograms
