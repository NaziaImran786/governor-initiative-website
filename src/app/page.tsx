"use client";
import MySlider from "@/components/my-slider/MySlider";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="relative z-0 w-[100%] h-[806px]">
        <Image
          src="/images/background.jpg"
          alt="background image"
          height={806}
          width={1440}
          object-cover
          className="absolute top-0 left-0 z-0 w-[100%] h-[806px] opacity-80 overflow-y-hidden"
        
        />

        <div className="absolute top-0 left-0 z-0 w-[100%] h-[806px] bg-zinc-100 opacity-80 overflow-y-hidden"></div>
      </div>
      <div className="absolute z-3 top-[80px] left-0 h-[806px] m-auto w-[100%] flex ">
        <div className=" h-[100%] w-[50%] m-auto text-left p-10 ">
          <h1 className="text-[60px] font-extrabold text-[#044e83] mt-10 ">
            Governor Sindh
          </h1>
          <h1 className="text-[50px] font bold text-[#044e83]">
            Kamran Khan Tessori
          </h1>
          <h1 className="text-[#2eb6e8] font-extrabold text-[40px]">
            Certified Cloud <br />
            Applied Gernerative AI <br /> Engineer (GenEng)
          </h1>
          <p className="text-[#044e83] text-[30px]">Earn up to $5,000/month</p>
          <p className="text-[#044e83] text-[30px]">
            Now admissions are open in <br /> Hyderabad
          </p>
          <br />
          <div className="flex">
            <button className="bg-[#044e83] h-[56px] w-[208px] rounded-lg font-bold  text-[#ffffff]">
              APPLY NOW
            </button>
            <div className="text-center">
              <p className="text-[#044e83] ml-10 text-[24px] font-bold">
                562,143
              </p>
              <p className="text-[#044e83] ml-10">Accepted Applications</p>
            </div>
          </div>
        </div>
        <div className="relative h-full w-[45%] ml-26   overflow-hidden">
          <Image
            src="/images/governor1.png"
            alt="side image"
            height={704}
            width={600}
            className="absolute top-6 left-0 h-[704px] w-[600px] ml-[130px] pt-4 bg-transparent "
          />
        </div>
      </div>

      <div className="w-[100%] h-[400px] bg-[#ffffff] py-10 m-auto">
        <h1 className="text-[27px] px-14 text-center font-extrabold text-[#044e83]">
          Certified Cloud Applied Gernerative AI Engineer (GenEng) and
          Solorprenuer <br />
          Developing Billion-Dollar Valued Developer and Solorprenuer
        </h1>
        <p className="text-[#27272a] text-[20px] py-10 px-16 text-justify">
          The pace of technological change is accelerating, big players like
          Microsoft, Amazon, Google, and OpenAI are winning by providing
          infrastructure, large AI foundation models, frameworks, 3D Metaverse
          experiences, and massive distribution networks. Solopreneurs trained
          in this program will win by automating work typically outsourced to
          employees, by directly connecting to customers by eliminating the
          middleman, and by developing vertical metaverses, thus paving the way
          for the first billion-dollar valued solopreneur businesses. This
          program has the objective to train this new breed of billion-dollar
          solopreneurs. These solopreneurs will adopt the ultra-lean business
          model and work independently and will not need to hire employees or
          other&nbsp;team&nbsp;members.
        </p>
      </div>

      <div className="h-[400px] w-[100%] bg-[#fdfdfd] py-5 px-16 grid grid-cols-[auto,1fr,1fr] gap-5">
        <div className="h-[300px] rounded-[10px]">
          <Image
            src="/images/col-1.png"
            alt=""
            height={300}
            width={370}
            className="h-[300px] rounded-[10px] shadow-2xl shadow-black"
          />
        </div>
        <div className="h-[300px] rounded-[10px]">
          <Image
            src="/images/col-2.png"
            alt=""
            height={300}
            width={370}
            className="h-[300px] rounded-[10px] shadow-2xl shadow-black"
          />
        </div>
        <div className="h-[300px] rounded-[10px]">
          <Image
            src="/images/col-3.png"
            alt=""
            height={300}
            width={370}
            className="h-[300px] rounded-[10px] shadow-2xl shadow-black"
          />
        </div>
      </div>
 
      <div className="h-[650px] w-[100%] bg-[#ffffff] mt-[-30px] px-16 rounded-xl">
      <MySlider/>
      </div>

      <div className="h-[400px] w-full bg-[#fdfdfd] py-5 px-16">
            <h1 className=" py-5 px-2 text-[34px] font-extrabold text-[#044e83]">
               Core Courses Sequance
          </h1>

         <div className="h-[300px] w-[100%] bg-[#fdfdfd] py-5 px-2 grid grid-cols-4 gap-16">
          
            <Link href={"/"}>
            <div className="h-[200px] w-[250px] rounded-b-2xl shadow-black shadow-2xl hover:scale-[1.1]">
              <Image
                src="/images/programming.png"
                alt=""
                height={170}
                width={250}
                className="h-[170px] w-full object-cover rounded-t-2xl shadow-sm "
              />
              <h1 className="px-4 py-2 bg-[#FFFFFF] text-center rounded-b-2xl text-[#52525b] font-bold text-[18px]">
              Programming Fundamentals
            </h1>
            </div>
            </Link>

            <Link href={"/"}>
            <div className="h-[200px] w-[250px] rounded-b-2xl shadow-black shadow-2xl hover:scale-[1.1]">
              <Image
                src="/images/web2.png"
                alt=""
                height={170}
                width={250}
                className="h-[170px] w-full object-cover rounded-t-2xl shadow-sm "
              />
              <h1 className="px-4 py-5 bg-[#FFFFFF] text-center rounded-b-2xl text-[#52525b] font-bold text-[18px]">
              Web2 Using NextJS
            </h1>
            </div>
            </Link>

            <Link href={"/"}>
            <div className="h-[200px] w-[250px] rounded-b-2xl shadow-black shadow-2xl hover:scale-[1.1]">
              <Image
                src="/images/earn.png"
                alt=""
                height={170}
                width={250}
                className="h-[170px] w-full object-cover rounded-t-2xl shadow-sm "
              />
              <h1 className="px-4 py-5 bg-[#FFFFFF] text-center rounded-b-2xl text-[#52525b] font-bold text-[18px]">
              Earn as You Learn
            </h1>
            </div>
            </Link>        
          </div>
      </div>

      <div className="h-[680px] w-full bg-[#fdfdfd] py-5 px-16">
        <h1 className=" py-5 px-2 text-[34px] font-extrabold text-[#044e83]">
          Advanced Courses
        </h1>

        <div className="h-[300px] w-full bg-[#fdfdfd] p-2 grid grid-cols-4 gap-16 ">
          
            <Link href={"/"}>
            <div className="h-[200px] w-[250px] rounded-b-2xl shadow-black shadow-2xl hover:scale-[1.1]">
              <Image
                src="/images/artificial.png"
                alt=""
                height={170}
                width={250}
                className="h-[170px] w-full object-cover rounded-t-2xl shadow-sm "
              />
              <h1 className="px-4 py-5 bg-[#FFFFFF] text-center rounded-b-2xl text-[#52525b] font-bold text-[18px]">
              Artificaial Intelligence
            </h1>
            </div>
            </Link>

            <Link href={"/"}>
            <div className="h-[200px] w-[250px] rounded-b-2xl shadow-black shadow-2xl hover:scale-[1.1]">
              <Image
                src="/images/web3.png"
                alt=""
                height={170}
                width={250}
                className="h-[170px] w-full object-cover rounded-t-2xl shadow-sm "
              />
              <h1 className="px-4 py-5 bg-[#FFFFFF] text-center rounded-b-2xl text-[#52525b] font-bold text-[18px]">
              Web 3 and Metaverse
            </h1>
            </div>
            </Link>

            <Link href={"/"}>
            <div className="h-[200px] w-[250px] rounded-b-2xl shadow-black shadow-2xl hover:scale-[1.1]">
              <Image
                src="/images/cloudNative.png"
                alt=""
                height={170}
                width={250}
                className="h-[170px] w-full object-cover rounded-t-2xl shadow-sm "
              />
              <h1 className="px-4 py-5 bg-[#FFFFFF] text-center rounded-b-2xl text-[#52525b] font-bold text-[18px]">
              Cloud-Native Computing
            </h1>
            </div>
            </Link>

             <Link href={"/"}>
            <div className="h-[200px] w-[250px] rounded-b-2xl shadow-black shadow-2xl hover:scale-[1.1]">
              <Image
                src="/images/IoT.png"
                alt=""
                height={170}
                width={250}
                className="h-[170px] w-full object-cover rounded-t-2xl shadow-sm "
              />
              <h1 className="px-4 py-2 bg-[#FFFFFF] text-center rounded-b-2xl text-[#52525b] font-bold text-[18px]">
              Ambient Computing and IoT
            </h1>
            </div>
            </Link>        

             <Link href={"/"}>
            <div className="h-[200px] w-[250px] rounded-b-2xl shadow-black shadow-2xl hover:scale-[1.1]">
              <Image
                src="/images/bioinformation.png"
                alt=""
                height={170}
                width={250}
                className="h-[170px] w-full object-cover rounded-t-2xl shadow-sm "
              />
              <h1 className="px-4 py-2 bg-[#FFFFFF] text-center rounded-b-2xl text-[#52525b] font-bold text-[18px]">
              Genomics and Bioinformatics
            </h1>
            </div>
            </Link>        

             <Link href={"/"}>
            <div className="h-[200px] w-[250px] rounded-b-2xl shadow-black shadow-2xl hover:scale-[1.1]">
              <Image
                src="/images/network.png"
                alt=""
                height={170}
                width={250}
                className="h-[170px] w-full object-cover rounded-t-2xl shadow-sm "
              />
              <h1 className="px-2 py-2 bg-[#FFFFFF] text-center rounded-b-2xl text-[#52525b] font-bold text-[18px]">
              Network Programmability and Automation
            </h1>
            </div>
            </Link>                 
          </div>
      </div> 
    </>
  );
}
