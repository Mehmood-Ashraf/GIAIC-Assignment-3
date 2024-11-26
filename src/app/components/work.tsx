import Image from "next/image";
import arrow from "../Assets/arrow.png";

export default function Work(){
    return(
        <div className="work w-[1921px] h-[574px] py-[140px] px-[220px] bg-[#043873] text-white">
        <div className="heading w-[1482px] h-[294px] flex flex-col gap-[60px] justify-center items-center">
          <div className="text w-[1064px] h-[171px] flex flex-col gap-6">
            <h1 className="text-7xl font-bold leading-[87.14px] tracking-[-1.44px]">
              Your work, everywhere you are
            </h1>
            <p className="text-lg text-center font-normal leading-[30px] tracking-[-0.36px]">
              Access your notes from your computer, phone or tablet by
              synchronising with various services, including whitepace, Dropbox
              and OneDrive. The app is available on Windows, macOS, Linux,
              Android and iOS. A terminal app is also available!
            </p>
          </div>
          <button className="w-[195px] h-[63px] rounded-lg px-10 py-5 bg-[#4F9CF9] text-white flex justify-center items-center gap-[10px] text-lg leading-[23px] font-medium tacking-[-0.36px]">
          Try Taskey
              <Image src={arrow} alt="" className="w-[14px] h-[14px]"></Image>
            </button>
        </div>
      </div>
    )
}