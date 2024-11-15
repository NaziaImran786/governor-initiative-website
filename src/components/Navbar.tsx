import Link from "next/link";
import React from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  return ( 
    <div className="fixed top-0 left-0 z-30  w-[100%] ">   
<div className="bg-[#044E83] w-[100%] h-[80px] px-4 py-6 flex  m-0 p-0 sticky top-0 z-30 ">
        <Link href="/">
        <Image
          src="/images/logo-governor.png"
          alt="logo-governor.png"
          height={80}
          width={113}          
        />
        </Link>

        <h1 className="text-shdow text-[20px] text-[#B9D8F3] font-extrabold  px-20">
          Tuition Free Program on Latest Technologies
        </h1>

        <ul className="flex  gap-8 text-[16px] text-[#faf9f6]">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/apply">Apply</Link>
          </li>
          <li>
            <Link href="/myjobs">Jobs</Link>
          </li>
          <li>
            <Link href="/results">Results</Link>
          </li>
          
        
    <select className=" bg-[#044e83] border-none w-24 text-white mt-[-6px]">
     <option className="bg-white hidden hover:bg-white text-black">Courses</option>
     <optgroup className="bg-white text-black" label=" Core Courses"></optgroup>
     <option className="bg-white text-black">Programming Fundamentals</option>
     <option className="bg-white text-black">Web2 Using NextJS</option>
     <option className="bg-white text-black">Earn as You Learn</option>

     <hr />
    <optgroup className="bg-white text-black" label="Advanced Courses"></optgroup>
     <option className="bg-white text-black">Web 3 and Metaverse</option>
     <option className="bg-white text-black">Cloud-Native Computing</option>
     <option className="bg-white text-black">Artificial Intelligence (AI) and Deep Learning</option>
     <option className="bg-white text-black">Ambient Computing and IoT</option>
     <option className="bg-white text-black">Genomics and Bioinformatics</option>
     <option className="bg-white text-black">Network Programmability and Automation</option>
   </select>
   </ul>
</div>
</div> 
  );
};

export default Navbar;



