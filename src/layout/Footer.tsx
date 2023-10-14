'use client'
import Link from 'next/link'
import React from 'react'
import { Instagram } from 'lucide-react';
import { Facebook, Twitter } from 'lucide-react';
import { Youtube } from 'lucide-react';





const Footer = () => {
    return (
      <div className="max-w-7xl  bg-[#2596be] font-semibold text-white py-3">
        <div className=" flex justify-evenly text-xl ">
          <ul className="flex  flex-col md:flex-row md:gap-x-12 uppercase mt-6 gap-y-6">
            <li>
              <Link href={''}>Home</Link>
            </li>
            <li>
              <Link href={''}>Services</Link>
            </li>
            <li>
              <Link href={''}>Blog</Link>
            </li>
            <li>
              <Link href={''}>Contact Us</Link>
            </li>
            <li>
              <Link href={''}>About Us</Link>
            </li>
          </ul>

          {/* Icons */}
          <div className="flex gap-y-6 justify-center flex-col md:flex-row  gap-x-10 md:gap-x-4 mb-6 md:mt-6">
            <Link href={'https://www.instagram.com/'} target="_blank">
              <Instagram />
            </Link>
            <Link href={'https://www.facebook.com/'} target="_blank">
              <Facebook />
            </Link>
            <Link href={'https://www.twitter.com/'} target="_blank">
              <Twitter />
            </Link>
            <Link href={'https://www.youtube.com/'} target="_blank">
              <Youtube />
            </Link>
          </div>
        </div>
      </div>
    );
}

export default Footer
