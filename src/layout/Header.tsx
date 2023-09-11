import React from "react";
import PanvarseLogo from "/public/panaverse-logo.png";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/shared/Wrapper";
import { Moon } from 'lucide-react';
import blog from "@/app/blog/page";



const Header = () => {
  return (

   
    <header className="flex sm:flex-shrink-0 md:flex justify-between sticky top-0 ">
      {/* Logo */}
      <div className="w-20 ml-16">
        <Link href={"/"}>
          <Image src={PanvarseLogo} alt="Panaverse Logo" />
        </Link>
      </div>
      {/* Navigation Bar */}
      <ul className="flex items-center space-x-8 font-semibold text-lg uppercase mr-16">
        <li>
          <Link href={"/"}> Home</Link>
        </li>
        <li>
          <Link href={'/blog'}> Blog</Link>
        </li>
        <li>
          <Link href={"#"}> Video</Link>
            </li>
            <span className="">
            <Moon />
            </span>
          </ul>
         
         
      
    </header>
      

    
  );
};

export default Header;
