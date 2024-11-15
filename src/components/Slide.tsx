import React from 'react'
import Image from 'next/image'

function Slide(props: any) {
  return (
    <>
      <div className='bg-[#ffffff] h-[600px] w-[100%] flex gap-4 rounded-2xl'>
        <div className='h-[100%] w-[50%] rounded-2xl'>
            <Image src={`/images/${props.mySrc.img1}`} alt="picture1" height={600} width={600} />
        </div>
        <div className='h-[100%] w-[50%] rounded-2xl'>
         <Image src={`/images/${props.mySrc.img2}`} alt="picture2" height={600} width={600} />
        </div>
      </div>
    </>
  )
}

export default Slide
