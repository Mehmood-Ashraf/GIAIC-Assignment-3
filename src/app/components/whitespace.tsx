import Image from "next/image";
import arrow from "../Assets/arrow.png";


export default function Whitespace(){
    return(
        <div className="whiteSpace w-[1920px] h-[829px] py-[140px] px-[220px] bg-[#043873] flex justify-center items-center">
        <div className="heading w-[656px] h-[361px] text-white flex flex-col gap-[60px]">
          <h2 className="text-[64px] font-bold leading-[77.45px] tracking-[-0.0128px]">
            Get More Done with whitepace
          </h2>
          <p className="text-lg font-normal leading-[30px] tracking-[-0.36px]">
            Project management software that enables your teams to collaborate,
            plan, analyze and manage everyday tasks
          </p>
          <div className="btn">
            <button className="w-[219px] h-[63px] flex items-center gap-[10px] bg-[#4F9CF9] rounded-lg p-5 text-lg leading-[23px] font-medium tacking-[-0.36px]">
              Try Whitepace free
              <Image src={arrow} alt="" className="w-[10px] h-[10px]"></Image>
            </button>
          </div>
        </div>
        <div className="w-[824px] h-[549px] bg-[#C4DEFD]"></div>
      </div>
    )
}