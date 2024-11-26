import Image from "next/image";
import image1 from "../Assets/Image1.png";
import arrow from "../Assets/arrow.png";


export default function Project(){
    return(
        <div className="projectManagement w-[1920px] h-[1588px] py-[140px] px-[220px] flex gap-[100px] flex-col">
        <div className="section1 W-[1480px] H-[547px] flex gap-[60px] justify-center items-center">
          <div className="w-[672px] h-[411px] flex flex-col gap-[60px]">
            <div className="text flex flex-col gap-6">
              <h1 className="text-7xl font-bold leading-[87.14px] text-[#212529] tracking-[-1.44px]">
                Project Management
              </h1>
              <p className="text-lg font-normal leading-[30px] tracking-[-0.36px] text-[#212529]">
                Images, videos, PDFs and audio files are supported. Create math
                expressions and diagrams directly from the app. Take photos with
                the mobile app and save them to a note.
              </p>
            </div>
            <button className="w-[201px] h-[63px] rounded-md px-10 py-5 bg-[#4F9CF9] text-white flex justify-center items-center gap-[10px] text-lg leading-[23px] font-medium tacking-[-0.36px]">
              Get Started
              <Image src={arrow} alt="" className="w-[14px] h-[14px]"></Image>
            </button>
          </div>
          <div className="w-[748px] h-[547px] bg-[#C4DEFD]"></div>
        </div>
        <div className="section2 w-[1480px] h-[661px] flex gap-[100px] justify-center items-center">
          <div className="image w-[710px] h-[661px]">
            <Image src={image1} alt=""></Image>
          </div>
          <div className="content w-[670px] h-[294px] flex flex-col gap-[60px]">
            <div className="text flex flex-col gap-6">
              <h1 className="text-7xl font-bold leading-[87.14px] text-[#212529] tracking-[-1.44px]">
                Work together
              </h1>
              <p className="text-lg font-normal leading-[30px] tracking-[-0.36px] text-[#212529]">
                With whitepace, share your notes with your colleagues and
                collaborate on them. You can also publish a note to the internet
                and share the URL with others.
              </p>
            </div>
            <button className="w-[186px] h-[63px] flex items-center gap-[10px] bg-[#4F9CF9] rounded-md py-5 px-10 text-white text-lg leading-[23px] font-medium tacking-[-0.36px]">
              Try it now
              <Image src={arrow} alt="" className="w-[14px] h-[14px]"></Image>
            </button>
          </div>
        </div>
      </div>
    )
}