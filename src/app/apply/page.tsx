import Link from 'next/link'
import React from 'react'
import { FaFacebook } from 'react-icons/fa';

export default function Apply() {
  return (
    <div className='w-[100%] h-[100%] bg-[#ffffff] flex justify-center items-center m-auto py-12'>
      <div className=' w-[700px] h-[576px] bg-[#ffffff] shadow-2xl  my-20 item-center'>
         <h2 className='text-center text-[32px]  text-[#044e83] px-20 py-10 '>
          Before continuing to the application please subscribe on these social media platforms.</h2>
          <div className='h-[40px] w-[40px] m-auto py-[-40px]'> 
            <Link href={"/"}><FaFacebook color='#4267b2'size={40} /></Link>
          </div>
          <div className='h-[fit-content] w-[200px] m-auto py-10'>
            <button className='bg-[#6895b5] text-[#ffffff] w-[180px] h-[50px] font-semibold'>CONTINUE</button>
          </div>
          <div className='h-[fit-content] w-[240px] m-auto mt-[-30px]'>
            <p className='text-black'>Already Applied? <Link href="/results" className='text-[#62a6fa] '>Get Admit Card</Link></p>
          </div>
      </div>
      
    </div>
  )
}
