'use client'
import Link from 'next/link'
import React from 'react'
import { Instagram } from 'lucide-react';
import { Facebook, Twitter } from 'lucide-react';
import { Youtube } from 'lucide-react';





const Footer = () => {
    return (
   
    <div className=' bg-[#2596be] font-semibold text-white py-3'>
         <div className='  text-xl '>
            <ul className='flex justify-center gap-x-20 uppercase'>
              <li><Link href={""}>Home</Link></li>
              <li><Link href={""}>Services</Link></li>
              <li><Link href={""}>Blog</Link></li>
              <li><Link href={""}>Contact Us</Link></li>
              <li><Link href={""}>About Us</Link></li>
            </ul>
            
            {/* Icons */}
                <div className='flex justify-center gap-x-10 mt-6'>
                    <Link href={"https://www.instagram.com/"} target='_blank'><Instagram /></Link>
                <Link href={"https://www.facebook.com/"} target='_blank'><Facebook /></Link>
                <Link href={"https://www.twitter.com/"} target='_blank'><Twitter /></Link>
                <Link href={"https://www.youtube.com/"} target='_blank'><Youtube /></Link>                
             
                
            </div>
            </div>
            </div>
            
  )
}

export default Footer
