import Image from "next/image";
import arrow from "../Assets/arrow.png";

export default function Extension(){
    return(
        <div className="extension w-[1921px] h-[759px] py-[140px] px-[220px] bg-[#043873] flex gap-[98px] items-center">
        <div className="heading w-[697px] h-[294px] flex flex-col gap-[60px]">
          <div className="text w-[697px] h-[171px] flex flex-col gap-6 text-white">
            <h1 className="text-7xl font-bold leading-[87.14px] tracking-[-1.44px]">
              Use as Extension
            </h1>
            <p className="text-lg font-normal leading-[30px] tracking-[-0.36px]">
              Use the web clipper extension, available on Chrome and Firefox, to
              save web pages or take screenshots as notes.
            </p>
          </div>
          <button className="w-[171px] h-[63px] rounded-md px-10 py-5 bg-[#4F9CF9] text-white flex justify-center items-center gap-[10px] text-lg leading-[23px] font-medium tacking-[-0.36px]">
            Let’s Go
            <Image src={arrow} alt="" className="w-[14px] h-[14px]"></Image>
          </button>
        </div>
        <div className="w-[686px] h-[489px] bg-[#C4DEFD]"></div>
      </div>
    )
}