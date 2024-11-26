import Image from "next/image";
import arrow from "../Assets/arrow.png";

export default function Customize(){
    return(
        <div className="customise w-[1921px] h-[812.09px] py-[140px] px-[220px] flex gap-[98px] items-center">
        <div className="w-[714px] h-[532.09px] bg-[#C4DEFD]"></div>
        <div className="heading w-[669px] h-[411px] flex flex-col gap-[60px]">
          <div className="text w-[669px] h-[288px] flex flex-col gap-6 text-[#212529]">
            <h1 className="text-7xl font-bold leading-[87.14px] tracking-[-1.44px]">
              Customise it to your needs
            </h1>
            <p className="text-lg font-normal leading-[30px] tracking-[-0.36px]">
              Customise the app with plugins, custom themes and multiple text
              editors (Rich Text or Markdown). Or create your own scripts and
              plugins using the Extension API.
            </p>
          </div>
          <button className="w-[171px] h-[63px] rounded-lg px-10 py-5 bg-[#4F9CF9] text-white flex justify-center items-center gap-[10px] text-lg leading-[23px] font-medium tacking-[-0.36px]">
            Let’s Go
            <Image src={arrow} alt="" className="w-[14px] h-[14px]"></Image>
          </button>
        </div>
      </div>
    )
}