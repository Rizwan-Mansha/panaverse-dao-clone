import React from "react";
import PanvarseLogo from "/public/panaverse-logo.png";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/shared/Wrapper";


const Header = () => {
  return (
  <div>
   <Wrapper>
    <header className="flex justify-between bg-white sticky top-0 items-center">
      {/* Logo */}
      <div className="w-20">
        {/* <h2 className="text-xl font-bold ">Panaverse Dao</h2> */}
        <Link href={"/"}>
          <Image src={PanvarseLogo} alt="Panaverse Logo" />
        </Link>
      </div>
      {/* Navigation Bar */}
      <ul className="flex space-x-8 font-semibold text-lg uppercase">
        <li>
          <Link href={"/"}> Home</Link>
        </li>
        <li>
          <Link href={"#"}> Blog</Link>
        </li>
        <li>
          <Link href={"#"}> Video</Link>
        </li>
      </ul>
      
    </header>
      </Wrapper>
      </div>
    
  );
};

export default Header;
